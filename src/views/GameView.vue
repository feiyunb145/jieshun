<script setup>
import { reactive, ref, computed, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import gameData from '../data/gameData.js'
import DialogueEngine from '../engine/DialogueEngine.js'
import CoverScreen from '../components/game/CoverScreen.vue'
import DialogueBox from '../components/game/DialogueBox.vue'
import ChoicePanel from '../components/game/ChoicePanel.vue'
import CharacterSprite from '../components/game/CharacterSprite.vue'
import EndingScreen from '../components/game/EndingScreen.vue'

import '../styles/game.css'

const router = useRouter()

const engine = new DialogueEngine(gameData)

const phase = ref('cover')
const displayedText = ref('')
const isTyping = ref(false)
const isShaking = ref(false)
const activeChoiceId = ref(null)
const currentOnComplete = ref(null)
const optionClickEmotion = ref(null)
const THINKING_PAUSE = 1500

const currentNodeIdRef = ref('cover')

const mirrorState = reactive({
  objectionCount: 0,
  negotiationLog: [],
  currentNodeId: 'cover'
})

function syncEngineToRef() {
  currentNodeIdRef.value = engine.currentNodeId
}

const currentNode = computed(() => {
  currentNodeIdRef.value
  return engine.data.nodes[currentNodeIdRef.value]
})

const currentEmotion = computed(() => {
  if (optionClickEmotion.value) return optionClickEmotion.value
  const node = currentNode.value
  if (!node || !node.emotion) return 'normal'
  return node.emotion
})

const currentSpeaker = computed(() => {
  const node = currentNode.value
  if (!node || !node.speaker) return ''
  return node.speaker
})

const currentChoices = computed(() => {
  const node = currentNode.value
  if (!node || !node.choices) return []
  return node.choices
})

let typewriterTimer = null

function syncMirrorState() {
  mirrorState.objectionCount = engine.state.objectionCount
  mirrorState.negotiationLog = [...engine.state.negotiationLog]
  mirrorState.currentNodeId = engine.currentNodeId
  syncEngineToRef()
}

function getTypeDelay(char, nextChar) {
  const baseDelay = 45
  const pauseMap = {
    '。': 400,
    '，': 250,
    '！': 400,
    '？': 400,
    '；': 300,
    '：': 200,
    '…': 350,
    '\n': 300,
    '、': 150
  }
  if (pauseMap[char]) {
    return baseDelay + pauseMap[char]
  }
  if (/[a-zA-Z0-9]/.test(char)) {
    return 35
  }
  return baseDelay
}

function startTypewriter(text, onComplete) {
  isTyping.value = true
  displayedText.value = ''
  currentOnComplete.value = onComplete

  let index = 0

  function scheduleNext() {
    if (!isTyping.value) return
    if (index < text.length) {
      const char = text[index]
      const nextChar = text[index + 1] || ''
      displayedText.value += char
      index++
      const delay = getTypeDelay(char, nextChar)
      typewriterTimer = setTimeout(scheduleNext, delay)
    } else {
      // 全部打完，思考停顿 1.5s
      typewriterTimer = setTimeout(() => {
        isTyping.value = false
        const cb = currentOnComplete.value
        currentOnComplete.value = null
        if (cb) cb()
      }, THINKING_PAUSE)
    }
  }

  clearTimeout(typewriterTimer)
  scheduleNext()
}

function skipTypewriter() {
  if (!isTyping.value) return
  clearTimeout(typewriterTimer)
  typewriterTimer = null
  const node = currentNode.value
  if (node && node.text) {
    displayedText.value = node.text
  }
  isTyping.value = false
  currentOnComplete.value = null
}

function handleStart() {
  phase.value = 'dialogue'
  engine.currentNodeId = 'node_1'
  syncMirrorState()
  const node = currentNode.value
  if (node && node.text) {
    startTypewriter(node.text)
  }
}

function handleSelectChoice(choiceId, choiceType) {
  if (isTyping.value) {
    skipTypewriter()
    return
  }

  if (choiceType === 'objection') {
    isShaking.value = true
    activeChoiceId.value = choiceId
    setTimeout(() => {
      isShaking.value = false
      activeChoiceId.value = null
    }, 300)
  }

  // 点击选项后，角色表情与选项表情同步
  const choiceEmotionMap = {
    objection: 'questioned',
    neutral: 'normal',
    acceptance: 'confident'
  }
  optionClickEmotion.value = choiceEmotionMap[choiceType] || 'normal'

  const answerNode = engine.selectChoice(choiceId)
  syncMirrorState()

  if (!answerNode) return

  if (answerNode.type === 'ending') {
    phase.value = 'ending'
    return
  }

  // 延迟 1.5s 后清除选项表情，开始打字
  setTimeout(() => {
    optionClickEmotion.value = null
    startTypewriter(answerNode.text || '')
  }, THINKING_PAUSE)
}

function handleAdvance() {
  const result = engine.advance()
  if (result) {
    syncMirrorState()
    if (result.type === 'ending') {
      phase.value = 'ending'
      return
    }
    if (result.text) {
      startTypewriter(result.text)
    }
  }
}

function handleRestart() {
  engine.reset()
  syncMirrorState()
  phase.value = 'cover'
  displayedText.value = ''
  isTyping.value = false
  isShaking.value = false
  activeChoiceId.value = null
}

function handleDialogueClick() {
  if (isTyping.value) {
    skipTypewriter()
    return
  }

  const node = currentNode.value
  if (node && !node.choices && node.nextNode) {
    handleAdvance()
    return
  }

  if (node && node.choices && node.choices.length > 0 && !isTyping.value) {
    return
  }
}

onBeforeUnmount(() => {
  clearTimeout(typewriterTimer)
})
</script>

<template>
  <div class="game-page" :class="{ shake: isShaking }">
    <!-- Cover Phase -->
    <CoverScreen
      v-if="phase === 'cover'"
      :title="gameData.nodes.cover.title"
      :subtitle="gameData.nodes.cover.subtitle"
      :intro="gameData.nodes.cover.intro"
      @start="handleStart"
    />

    <!-- Dialogue Phase -->
    <template v-else-if="phase === 'dialogue'">
      <div class="dialogue-scene" @click="handleDialogueClick">
        <CharacterSprite :emotion="currentEmotion" />
        <div class="dialogue-ui">
          <DialogueBox
            :speaker="currentSpeaker"
            :text="displayedText"
            :emotion="currentEmotion"
            :is-typing="isTyping"
            @typing-complete="() => {}"
          />
          <ChoicePanel
            v-show="!isTyping && currentChoices.length > 0"
            :choices="currentChoices"
            :active-choice-id="activeChoiceId"
            @select="handleSelectChoice"
          />
        </div>
      </div>
    </template>

    <!-- Ending Phase -->
    <EndingScreen
      v-else-if="phase === 'ending'"
      :objection-count="mirrorState.objectionCount"
      :negotiation-log="mirrorState.negotiationLog"
      @restart="handleRestart"
      @go-home="() => router.push('/')"
    />
  </div>
</template>

<style scoped>
.game-page {
  width: 100%;
  min-height: 100vh;
  background: var(--bg-dark);
  color: var(--white);
  font-family: var(--font-family);
  overflow: hidden;
  position: relative;
}

.game-page.shake {
  animation: shake 0.3s ease;
}

.dialogue-scene {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 200px);
  padding: 40px 20px 20px;
  cursor: pointer;
}

.dialogue-ui {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  max-width: 700px;
}

@media (max-width: 768px) {
  .dialogue-scene {
    padding: 24px 12px 12px;
  }
}

@media (max-width: 480px) {
  .dialogue-scene {
    padding: 16px 8px 8px;
  }
}
</style>

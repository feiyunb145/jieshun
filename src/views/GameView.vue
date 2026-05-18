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

function startTypewriter(text, onComplete) {
  isTyping.value = true
  displayedText.value = ''
  let index = 0
  clearInterval(typewriterTimer)
  typewriterTimer = setInterval(() => {
    if (index < text.length) {
      displayedText.value += text[index]
      index++
    } else {
      clearInterval(typewriterTimer)
      typewriterTimer = null
      isTyping.value = false
      if (onComplete) onComplete()
    }
  }, 50)
}

function skipTypewriter() {
  if (!isTyping.value) return
  clearInterval(typewriterTimer)
  typewriterTimer = null
  const node = currentNode.value
  if (node && node.text) {
    displayedText.value = node.text
  }
  isTyping.value = false
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

  const answerNode = engine.selectChoice(choiceId)
  syncMirrorState()

  if (!answerNode) return

  if (answerNode.type === 'ending') {
    phase.value = 'ending'
    return
  }

  const savedNextNode = answerNode.nextNode || null

  startTypewriter(answerNode.text || '', () => {
    if (savedNextNode) {
      handleAdvance()
    }
  })
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
      startTypewriter(result.text, () => {
        if (result.nextNode) {
          handleAdvance()
        }
      })
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
  }
}

onBeforeUnmount(() => {
  clearInterval(typewriterTimer)
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
</style>

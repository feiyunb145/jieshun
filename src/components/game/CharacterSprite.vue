<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  emotion: { type: String, default: 'normal' }
})

const emotionMap = {
  normal: '😐',
  questioned: '🤔',
  confident: '😏',
  closed: '😄'
}

const currentEmoji = ref(emotionMap[props.emotion] || '😐')
const isTransitioning = ref(false)

watch(() => props.emotion, (newEmotion) => {
  isTransitioning.value = true
  setTimeout(() => {
    currentEmoji.value = emotionMap[newEmotion] || '😐'
    isTransitioning.value = false
  }, 150)
})
</script>

<template>
  <div class="character-sprite">
    <div class="character-body">
      <!-- Head -->
      <div class="head">
        <div class="face-emoji" :class="{ 'face-transitioning': isTransitioning }">
          {{ currentEmoji }}
        </div>
      </div>
      <!-- Body (suit) -->
      <div class="body-suit">
        <div class="lapel-left"></div>
        <div class="lapel-right"></div>
        <div class="tie"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-sprite {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
}

.character-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: nod 3s ease-in-out infinite;
}

.head {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #FFD5B4, #F5C49C);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.face-emoji {
  font-size: 28px;
  line-height: 1;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.face-transitioning {
  opacity: 0;
  transform: scale(0.8);
}

.body-suit {
  width: 80px;
  height: 60px;
  background: linear-gradient(180deg, #2C3E50, #1a252f);
  border-radius: 0 0 12px 12px;
  position: relative;
  margin-top: -8px;
  z-index: 1;
  overflow: hidden;
}

.lapel-left,
.lapel-right {
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
}

.lapel-left {
  left: 16px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 20px solid #34495E;
}

.lapel-right {
  right: 16px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 20px solid #34495E;
}

.tie {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 24px;
  background: linear-gradient(180deg, #C0392B, #E74C3C);
  clip-path: polygon(50% 0%, 100% 25%, 50% 100%, 0% 25%);
}
</style>

<script setup>
defineProps({
  speaker: { type: String, default: '' },
  text: { type: String, default: '' },
  emotion: { type: String, default: 'normal' },
  isTyping: { type: Boolean, default: false }
})

defineEmits(['typingComplete'])
</script>

<template>
  <div class="dialogue-box">
    <div class="speaker-name" v-if="speaker">{{ speaker }}</div>
    <div class="dialogue-text">
      <p class="text-content">{{ text }}</p>
      <span v-if="isTyping" class="typing-cursor">|</span>
    </div>
  </div>
</template>

<style scoped>
.dialogue-box {
  background: var(--bg-dark-92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--brand-blue-30);
  padding: 16px 24px 20px;
  width: 100%;
}

.speaker-name {
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.dialogue-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--white-90);
  max-width: 800px;
  margin: 0 auto;
}

.text-content {
  margin: 0;
  white-space: pre-line;
}

.typing-cursor {
  display: inline-block;
  color: var(--gradient-blue-end);
  font-weight: 700;
  animation: blink 0.8s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>

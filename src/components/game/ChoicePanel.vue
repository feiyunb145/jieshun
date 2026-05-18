<script setup>
defineProps({
  choices: { type: Array, default: () => [] },
  activeChoiceId: { type: String, default: null }
})

const emit = defineEmits(['select'])

function handleClick(choice) {
  emit('select', choice.id, choice.type)
}
</script>

<template>
  <div class="choice-panel" v-if="choices.length > 0">
    <button
      v-for="(choice, index) in choices"
      :key="choice.id"
      class="choice-btn"
      :class="{
        'choice-objection': choice.type === 'objection',
        'choice-accept': choice.type === 'accept',
        'choice-neutral': choice.type === 'neutral',
        'choice-active': activeChoiceId === choice.id
      }"
      :style="{ animationDelay: `${index * 0.1}s` }"
      @click.stop="handleClick(choice)"
    >
      {{ choice.label }}
    </button>
  </div>
</template>

<style scoped>
.choice-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px 0 16px;
  width: 100%;
}

.choice-btn {
  width: 100%;
  max-width: 600px;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--white-90);
  background: var(--white-06);
  border: 1px solid var(--white-15);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
  font-family: inherit;
  line-height: 1.5;
  animation: fade-in 0.4s ease-out both;
}

.choice-btn:hover {
  background: var(--white-12);
  transform: translateX(4px);
}

.choice-btn:active {
  transform: scale(0.98);
}

.choice-objection {
  border-color: var(--alert-orange-50);
  background: var(--alert-orange-08);
  animation: fade-in 0.4s ease-out both, breath-glow 2.5s ease-in-out infinite;
}

.choice-objection:hover {
  background: var(--alert-orange-18);
  border-color: var(--alert-orange-80);
}

.choice-accept {
  border-color: var(--tech-cyan-50);
  background: var(--tech-cyan-08);
}

.choice-accept:hover {
  background: var(--tech-cyan-18);
  border-color: var(--tech-cyan-80);
}

.choice-neutral {
  border-color: var(--brand-blue-40);
  background: var(--brand-blue-06);
}

.choice-neutral:hover {
  background: var(--brand-blue-15);
  border-color: var(--brand-blue-70);
}

.choice-btn.choice-active {
  animation: shake 0.3s ease;
}
</style>

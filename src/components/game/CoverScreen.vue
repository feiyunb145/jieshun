<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  intro: { type: String, required: true }
})

defineEmits(['start'])
</script>

<template>
  <div class="cover-screen">
    <!-- Particle grid background -->
    <div class="particle-grid">
      <div class="grid-layer"></div>
      <div class="grid-layer grid-layer-2"></div>
    </div>

    <div class="cover-content">
      <h1 class="cover-title">{{ title }}</h1>
      <p class="cover-subtitle">{{ subtitle }}</p>

      <div class="cover-intro">
        <p class="intro-text">{{ intro }}</p>
      </div>

      <button class="start-btn" @click="$emit('start')">
        开始谈判
      </button>
    </div>
  </div>
</template>

<style scoped>
.cover-screen {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--deep-blue) 0%, var(--bg-dark) 50%, #0d2137 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.particle-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-layer {
  position: absolute;
  inset: -60px;
  background-image:
    linear-gradient(var(--brand-blue-08) 1px, transparent 1px),
    linear-gradient(90deg, var(--brand-blue-08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-drift 20s linear infinite;
}

.grid-layer-2 {
  animation-duration: 30s;
  animation-direction: reverse;
  opacity: 0.5;
}

.cover-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 24px;
  max-width: 600px;
  animation: card-bounce-in 0.6s ease-out;
}

.cover-title {
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 16px;
  line-height: 1.3;
}

.cover-subtitle {
  font-size: 18px;
  color: var(--white-60);
  margin: 0 0 40px;
  font-weight: 400;
}

.cover-intro {
  background: var(--brand-blue-08);
  border: 1px solid var(--brand-blue-20);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 40px;
  text-align: left;
}

.intro-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--white-80);
  margin: 0;
  white-space: pre-line;
}

.start-btn {
  display: inline-block;
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 700;
  color: var(--white);
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end));
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: pulse-glow 2s ease-in-out infinite;
  font-family: inherit;
}

.start-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 32px var(--brand-blue-60), 0 0 64px var(--brand-blue-30);
}

.start-btn:active {
  transform: scale(0.98);
}
</style>

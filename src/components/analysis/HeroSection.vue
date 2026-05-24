<template>
  <section id="hero" class="hero-section" data-section="hero">
    <div class="hero-content">
      <h1 class="hero-title">V2G + 停充储一体化</h1>
      <p class="hero-subtitle">捷顺V2G + 停充储一体化机会分析</p>
      <div class="stat-grid">
        <StatCard value="9个" label="首批V2G试点城市" />
        <StatCard value="4397万辆" label="2025年底新能源汽车保有量" />
        <StatCard value="102亿元" label="2025年虚拟电厂市场规模" />
      </div>
    </div>
  </section>
</template>

<script setup>
import StatCard from './StatCard.vue'
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--brand-blue-08) 1px, transparent 1px),
    linear-gradient(90deg, var(--brand-blue-08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-drift 20s linear infinite;
}

.hero-section::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--brand-blue-15) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  padding: 0 40px;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-blue), var(--tech-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 16px;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  margin: 0 0 48px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.guide-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

@keyframes grid-drift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
    margin-bottom: 32px;
  }

  .stat-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .guide-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 0 16px;
  }

  .hero-title {
    font-size: 26px;
  }

  .hero-subtitle {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .guide-text {
    font-size: 13px;
    line-height: 1.7;
  }
}
</style>

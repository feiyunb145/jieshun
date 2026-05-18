<template>
  <section id="hero" class="hero-section" data-section="hero">
    <div class="hero-content">
      <h1 class="hero-title">城市停车资产运营服务商</h1>
      <p class="hero-subtitle">从卖铲子到承包矿山</p>
      <div class="stat-grid">
        <StatCard value="8000万+" label="全国车位缺口" />
        <StatCard value="40%" label="存量泊位平均利用率" />
        <StatCard value="54.78%" label="捷顺创新业务新签订单增速" />
      </div>
      <p class="guide-text">
        停车产业正从"卖设备"走向"经营资产"。谁能率先完成从硬件商到运营商的转型，谁就能占据下一个十年的制高点。
      </p>
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
</style>

<template>
  <div class="home">
    <!-- 粒子网格背景 -->
    <div class="grid-bg"></div>

    <div class="home-content">
      <!-- Logo -->
      <div class="logo">
        <span class="logo-text">JIESHUN</span>
        <span class="logo-sub">捷顺科技</span>
      </div>

      <!-- 标题 -->
      <h1 class="title">岗前培训 · 学习成果展示</h1>
      <p class="subtitle">五月任务：业务初探与行业认知</p>

      <!-- 卡片区域 -->
      <div class="cards">
        <router-link to="/game" class="task-card card-1">
          <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <line x1="6" y1="12" x2="6.01" y2="12"/>
              <line x1="10" y1="12" x2="10.01" y2="12"/>
              <line x1="14" y1="12" x2="14.01" y2="12"/>
              <path d="M18 10v4"/>
            </svg>
          </div>
          <span class="card-tag">任务一</span>
          <h2 class="card-title">车场老板的谈判挑战</h2>
          <p class="card-desc">对话式文字冒险游戏 -- 模拟向车场老板推销捷顺云托管方案</p>
          <span class="card-arrow">&rarr;</span>
        </router-link>

        <router-link to="/analysis" class="task-card card-2">
          <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
              <line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          </div>
          <span class="card-tag">任务二</span>
          <h2 class="card-title">V2G + 停充储一体化机会分析</h2>
          <p class="card-desc">政策趋势、市场空间与捷顺的机会点</p>
          <span class="card-arrow">&rarr;</span>
        </router-link>
      </div>

      <!-- 底部署名 -->
      <footer class="footer">
        <p>2026捷顺产品应用岗培第二小组</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(160deg, var(--bg-dark) 0%, var(--deep-blue) 40%, #0d2247 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ---- 粒子网格背景 ---- */
.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--brand-blue-08) 1px, transparent 1px),
    linear-gradient(90deg, var(--brand-blue-08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-drift 20s linear infinite;
}

.grid-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, var(--brand-blue-15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, var(--tech-cyan-10) 0%, transparent 50%);
}

@keyframes grid-drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

/* ---- 内容区 ---- */
.home-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 60px 32px;
  max-width: 960px;
  width: 100%;
}

/* ---- Logo ---- */
.logo {
  margin-bottom: 16px;
}

.logo-text {
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end), var(--tech-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 6px;
}

.logo-sub {
  display: block;
  font-size: 16px;
  color: var(--text-secondary);
  letter-spacing: 8px;
  margin-top: 4px;
}

/* ---- 标题 ---- */
.title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 48px;
}

/* ---- 卡片区域 ---- */
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

/* ---- 任务卡片 ---- */
.task-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  background: var(--white-04);
  border: 1px solid var(--white-08);
  border-radius: 16px;
  text-align: left;
  text-decoration: none;
  color: var(--text-primary);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
  /* stagger 弹入动画 */
  opacity: 0;
  transform: translateY(30px);
  animation: card-pop 0.6s ease forwards;
}

.task-card:hover {
  transform: translateY(-4px);
  border-color: var(--brand-blue-40);
  box-shadow: 0 8px 32px var(--brand-blue-25);
}

.card-1 {
  animation-delay: 0.15s;
}

.card-2 {
  animation-delay: 0.35s;
}

@keyframes card-pop {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.96);
  }
  70% {
    transform: translateY(-4px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 20px;
  background: var(--brand-blue-12);
  color: var(--brand-blue);
}

.card-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--tech-cyan);
  margin-bottom: 8px;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 8px;
}

.card-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
}

.card-arrow {
  display: block;
  margin-top: 16px;
  font-size: 20px;
  color: var(--brand-blue);
  transition: transform var(--transition-fast);
}

.task-card:hover .card-arrow {
  transform: translateX(6px);
}

/* ---- 底部署名 ---- */
.footer {
  color: var(--text-secondary);
  font-size: 13px;
  opacity: 0.6;
}

/* ---- 响应式 ---- */
@media (max-width: 768px) {
  .home-content {
    padding: 40px 20px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .logo-text {
    font-size: 28px;
    letter-spacing: 4px;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    margin-bottom: 32px;
  }

  .task-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .home-content {
    padding: 32px 16px;
  }

  .logo-text {
    font-size: 22px;
    letter-spacing: 3px;
  }

  .logo-sub {
    font-size: 14px;
    letter-spacing: 4px;
  }

  .title {
    font-size: 20px;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .cards {
    gap: 16px;
    margin-bottom: 32px;
  }

  .task-card {
    padding: 20px;
  }

  .card-icon {
    width: 44px;
    height: 44px;
    margin-bottom: 14px;
  }

  .card-icon svg {
    width: 28px;
    height: 28px;
  }

  .card-title {
    font-size: 18px;
  }

  .card-desc {
    font-size: 13px;
  }

  .footer {
    font-size: 12px;
  }
}
</style>

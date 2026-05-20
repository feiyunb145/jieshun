<script setup>
import { computed } from 'vue'

const props = defineProps({
  objectionCount: { type: Number, default: 0 },
  negotiationLog: { type: Array, default: () => [] }
})

defineEmits(['restart', 'goHome'])

const evaluation = computed(() => {
  const count = props.objectionCount
  const hasOnlyNeutralOrAccept = props.negotiationLog.every(
    log => log.choiceType === 'neutral' || log.choiceType === 'accept'
  )

  if (count === 0 && hasOnlyNeutralOrAccept) {
    return {
      title: '天选客户',
      desc: '全程零异议，你是最容易沟通的老板！小捷都不用费力说服你。',
      emoji: '🌟',
      level: 'relevance'
    }
  } else if (count >= 4) {
    return {
      title: '最难搞的老板',
      desc: '异议最多，但小捷全程不卑不亢，用数据和案例一一回应——这正是捷顺销售的日常。',
      emoji: '🔥',
      level: 'hardest'
    }
  } else {
    return {
      title: '理性决策者',
      desc: '你有质疑也有倾听，是一个理性又务实的老板。小捷用专业打动了你。',
      emoji: '💼',
      level: 'normal'
    }
  }
})

const nodeLabels = {
  node_1: '开场白',
  node_2: '痛点确认',
  node_3: '方案介绍',
  node_3_follow_B: '方案追问',
  node_4: '数据算账',
  node_4_follow_A: '数据追问',
  node_5: '案例展示',
  node_5_follow_B: '案例追问',
  node_6: '合作模式'
}

function getNodeLabel(nodeId) {
  return nodeLabels[nodeId] || nodeId
}

function getChoiceTypeLabel(type) {
  const map = {
    objection: '异议',
    neutral: '中立',
    accept: '接受'
  }
  return map[type] || type
}
</script>

<template>
  <div class="ending-screen">
    <div class="ending-content">
      <div class="ending-emoji">{{ evaluation.emoji }}</div>
      <h1 class="ending-title">{{ evaluation.title }}</h1>
      <p class="ending-desc">{{ evaluation.desc }}</p>

      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-value">{{ objectionCount }}</span>
          <span class="stat-label">异议次数</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ negotiationLog.length }}</span>
          <span class="stat-label">互动次数</span>
        </div>
      </div>

      <div class="negotiation-log" v-if="negotiationLog.length > 0">
        <h3 class="log-title">谈判轨迹</h3>
        <ul class="log-list">
          <li
            v-for="(log, index) in negotiationLog"
            :key="index"
            class="log-item"
            :class="`log-${log.choiceType}`"
          >
            <span class="log-node">{{ getNodeLabel(log.nodeId) }}</span>
            <span class="log-type">{{ getChoiceTypeLabel(log.choiceType) }}</span>
            <span class="log-label">{{ log.choiceLabel }}</span>
          </li>
        </ul>
      </div>

      <div class="ending-summary">
        <p>
          不管你提了多少异议，小捷都一一回应了——这就是捷顺云托管 + 车位代运营的底气。
          数据有出处，案例可查证，合作模式灵活，先试后买零风险。
        </p>
      </div>

      <div class="ending-actions">
        <button class="btn-restart" @click="$emit('restart')">再来一次</button>
        <button class="btn-home" @click="$emit('goHome')">返回首页</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ending-screen {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--deep-blue) 0%, var(--bg-dark) 50%, #0d2137 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.ending-content {
  max-width: 560px;
  width: 100%;
  text-align: center;
  animation: card-bounce-in 0.6s ease-out;
}

.ending-emoji {
  font-size: 64px;
  margin-bottom: 16px;
}

.ending-title {
  font-size: 36px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 12px;
}

.ending-desc {
  font-size: 16px;
  color: var(--white-70);
  line-height: 1.7;
  margin: 0 0 32px;
}

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 32px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  color: var(--tech-cyan);
}

.stat-label {
  font-size: 13px;
  color: var(--white-50);
  margin-top: 4px;
}

.negotiation-log {
  text-align: left;
  background: var(--brand-blue-06);
  border: 1px solid var(--brand-blue-15);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.log-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--white-90);
  margin: 0 0 12px;
}

.log-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.log-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--white-03);
}

.log-node {
  font-weight: 600;
  color: var(--white-80);
  white-space: nowrap;
}

.log-type {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 600;
}

.log-objection .log-type {
  background: var(--alert-orange-15);
  color: var(--alert-orange);
}

.log-neutral .log-type {
  background: var(--brand-blue-15);
  color: var(--gradient-blue-end);
}

.log-accept .log-type {
  background: var(--tech-cyan-15);
  color: var(--tech-cyan);
}

.log-label {
  color: var(--white-50);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.ending-summary {
  background: var(--tech-cyan-06);
  border: 1px solid var(--tech-cyan-20);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 32px;
}

.ending-summary p {
  font-size: 14px;
  line-height: 1.8;
  color: var(--white-70);
  margin: 0;
}

.ending-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-restart,
.btn-home {
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
  border: none;
}

.btn-restart {
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end));
  color: var(--white);
}

.btn-restart:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px var(--brand-blue-40);
}

.btn-home {
  background: var(--white-08);
  color: var(--white-80);
  border: 1px solid var(--white-20);
}

.btn-home:hover {
  background: var(--white-15);
  transform: scale(1.05);
}
</style>

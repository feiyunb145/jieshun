<template>
  <div class="mode-card">
    <span class="mode-tag">{{ tag }}</span>
    <h3 class="mode-title">{{ title }}</h3>
    <ul class="mode-features">
      <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
    </ul>
    <div class="mode-revenue">
      <span class="revenue-label">预期收益</span>
      <span class="revenue-value">{{ revenue }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  revenue: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.mode-card {
  background: var(--white-04);
  border: 1px solid var(--white-08);
  border-radius: 16px;
  padding: 32px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
}

.mode-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px var(--brand-blue-25);
}

.mode-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end));
  color: var(--white);
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  align-self: flex-start;
  margin-bottom: 16px;
}

.mode-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 16px;
}

.mode-features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  flex: 1;
}

.mode-features li {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-secondary);
  padding-left: 16px;
  position: relative;
}

.mode-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tech-cyan);
}

.mode-revenue {
  border-top: 1px solid var(--white-08);
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.revenue-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.revenue-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--tech-cyan);
}
</style>

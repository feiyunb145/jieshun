<template>
  <div class="stat-card">
    <span class="number">{{ value }}</span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.stat-card {
  background: var(--brand-blue-10);
  border: 1px solid var(--brand-blue-30);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px var(--brand-blue-30);
}

.number {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: var(--tech-cyan);
  margin-bottom: 8px;
}

.label {
  display: block;
  font-size: 14px;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .stat-card {
    padding: 18px;
  }

  .number {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .stat-card {
    padding: 14px;
  }

  .number {
    font-size: 24px;
  }

  .label {
    font-size: 13px;
  }
}
</style>

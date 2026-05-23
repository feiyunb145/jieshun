<template>
  <div class="timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-label">{{ item.label }}</span>
        <p class="timeline-text">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--brand-blue), var(--tech-cyan));
  border-radius: 1px;
}

.timeline-item {
  position: relative;
  padding-bottom: 32px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -29px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--brand-blue);
  border: 2px solid var(--tech-cyan);
  z-index: 1;
}

.timeline-content {
  background: var(--white-04);
  border: 1px solid var(--white-08);
  border-radius: 8px;
  padding: 16px 20px;
}

.timeline-label {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: var(--tech-cyan);
  margin-bottom: 6px;
}

.timeline-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 480px) {
  .timeline {
    padding-left: 24px;
  }

  .timeline-dot {
    left: -21px;
    width: 10px;
    height: 10px;
  }

  .timeline-content {
    padding: 12px 14px;
  }

  .timeline-label {
    font-size: 13px;
  }

  .timeline-text {
    font-size: 13px;
  }
}
</style>

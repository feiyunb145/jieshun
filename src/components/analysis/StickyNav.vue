<template>
  <nav class="sticky-nav">
    <div class="nav-inner">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="'#' + section.id"
        :class="['nav-link', { active: activeId === section.id }]"
        @click.prevent="$emit('navigate', section.id)"
      >
        {{ section.label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  },
  activeId: {
    type: String,
    default: ''
  }
})

defineEmits(['navigate'])
</script>

<style scoped>
.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 22, 40, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  gap: 4px;
  overflow-x: auto;
}

.nav-link {
  display: inline-block;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease, border-color 0.2s ease;
  border-bottom: 3px solid transparent;
  letter-spacing: 0.5px;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--tech-cyan);
  border-bottom-color: var(--tech-cyan);
}

@media (max-width: 768px) {
  .sticky-nav {
    border-bottom-color: rgba(255, 255, 255, 0.12);
  }

  .nav-inner {
    padding: 0 16px;
    gap: 8px;
  }

  .nav-link {
    padding: 14px 14px;
    font-size: 13px;
    border-bottom-width: 2px;
  }
}

@media (max-width: 480px) {
  .nav-inner {
    padding: 0 12px;
  }

  .nav-link {
    padding: 12px 12px;
    font-size: 13px;
  }
}
</style>

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
  background: var(--bg-dark-95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--white-06);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
}

.nav-link {
  display: inline-block;
  padding: 14px 18px;
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--tech-cyan);
  border-bottom-color: var(--tech-cyan);
}

@media (max-width: 768px) {
  .nav-inner {
    padding: 0 16px;
  }

  .nav-link {
    padding: 12px 12px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .nav-link {
    padding: 10px 10px;
    font-size: 12px;
  }
}
</style>

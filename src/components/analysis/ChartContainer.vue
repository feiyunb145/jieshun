<template>
  <div :id="chartId" class="chart-container" :style="{ height: height + 'px' }"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as echarts from 'echarts/core'

const props = defineProps({
  chartId: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    default: 400
  },
  option: {
    type: Object,
    default: null
  }
})

const chartInstance = ref(null)

const emit = defineEmits(['chart-ready'])

onMounted(() => {
  const el = document.getElementById(props.chartId)
  if (!el) return

  chartInstance.value = echarts.init(el)

  if (props.option) {
    chartInstance.value.setOption(applyResponsiveGrid(props.option))
  }

  emit('chart-ready', chartInstance.value)

  const resizeHandler = () => {
    if (props.option) {
      chartInstance.value.setOption(applyResponsiveGrid(props.option))
    }
    chartInstance.value?.resize()
  }
  window.addEventListener('resize', resizeHandler)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
    chartInstance.value?.dispose()
  })
})

function applyResponsiveGrid(option) {
  const w = window.innerWidth
  if (w > 768) return option
  const grid = { ...option.grid }
  if (w <= 480) {
    grid.left = Math.min(grid.left || 60, 40)
    grid.right = Math.min(grid.right || 30, 20)
    grid.top = Math.min(grid.top || 50, 40)
  } else {
    grid.left = Math.min(grid.left || 60, 50)
    grid.right = Math.min(grid.right || 30, 25)
  }
  return { ...option, grid }
}

function setOption(opt) {
  chartInstance.value?.setOption(opt)
}

defineExpose({ setOption, chartInstance })
</script>

<style scoped>
.chart-container {
  width: 100%;
  background: var(--white-03);
  border: 1px solid var(--white-06);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .chart-container {
    min-height: 300px;
  }
}

@media (max-width: 480px) {
  .chart-container {
    min-height: 250px;
  }
}
</style>

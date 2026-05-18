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
    chartInstance.value.setOption(props.option)
  }

  emit('chart-ready', chartInstance.value)

  const resizeHandler = () => chartInstance.value?.resize()
  window.addEventListener('resize', resizeHandler)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
    chartInstance.value?.dispose()
  })
})

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
</style>

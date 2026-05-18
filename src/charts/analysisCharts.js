import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  BarChart, LineChart, PieChart,
  GridComponent, TooltipComponent, LegendComponent,
  CanvasRenderer
])

const CHART_COLORS = {
  blue: '#0052D9',
  cyan: '#00D4AA',
  orange: '#FF6B35',
  lightBlue: '#00A6FF',
  purple: '#7B61FF'
}

const DARK_TOOLTIP = {
  backgroundColor: 'rgba(10,22,40,0.9)',
  borderColor: 'rgba(255,255,255,0.1)',
  textStyle: { color: '#e0e6f0' }
}

const AXIS_LINE = { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
const AXIS_LABEL = { color: '#8899aa' }
const SPLIT_LINE = { lineStyle: { color: 'rgba(255,255,255,0.06)' } }

export function createIndustryTrendOption() {
  const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025']
  const marketSize = [120, 145, 180, 230, 310, 420, 580]
  const growthRate = [null, 20.8, 24.1, 27.8, 34.8, 35.5, 38.1]

  return {
    backgroundColor: 'transparent',
    tooltip: {
      ...DARK_TOOLTIP,
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
      data: ['市场规模（亿元）', '增长率（%）'],
      textStyle: { color: '#8899aa' },
      top: 0
    },
    grid: { left: 60, right: 60, top: 50, bottom: 30 },
    xAxis: {
      type: 'category',
      data: years,
      axisLine: AXIS_LINE,
      axisLabel: AXIS_LABEL
    },
    yAxis: [
      {
        type: 'value',
        name: '市场规模（亿元）',
        nameTextStyle: { color: '#8899aa' },
        axisLine: AXIS_LINE,
        axisLabel: AXIS_LABEL,
        splitLine: SPLIT_LINE
      },
      {
        type: 'value',
        name: '增长率（%）',
        nameTextStyle: { color: '#8899aa' },
        axisLine: AXIS_LINE,
        axisLabel: AXIS_LABEL,
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '市场规模（亿元）',
        type: 'bar',
        yAxisIndex: 0,
        data: marketSize,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: CHART_COLORS.blue },
            { offset: 1, color: CHART_COLORS.lightBlue }
          ]),
          borderRadius: [4, 4, 0, 0]
        },
        barWidth: '40%'
      },
      {
        name: '增长率（%）',
        type: 'line',
        yAxisIndex: 1,
        data: growthRate,
        smooth: true,
        lineStyle: { color: CHART_COLORS.orange, width: 2 },
        itemStyle: { color: CHART_COLORS.orange },
        symbol: 'circle',
        symbolSize: 6
      }
    ]
  }
}

export function createGrossMarginOption() {
  const categories = ['To B 硬件', 'To B 云托管', 'To G 平台', 'To G 资产运营']
  const values = [35, 70, 55, 65]
  const colors = [CHART_COLORS.lightBlue, CHART_COLORS.cyan, CHART_COLORS.blue, CHART_COLORS.purple]

  return {
    backgroundColor: 'transparent',
    tooltip: {
      ...DARK_TOOLTIP,
      trigger: 'axis',
      formatter: (params) => {
        const item = params[0]
        return `${item.name}<br/>毛利率：${item.value}%`
      }
    },
    grid: { left: 100, right: 30, top: 20, bottom: 30 },
    xAxis: {
      type: 'value',
      max: 100,
      axisLine: AXIS_LINE,
      axisLabel: { ...AXIS_LABEL, formatter: '{value}%' },
      splitLine: SPLIT_LINE
    },
    yAxis: {
      type: 'category',
      data: categories,
      axisLine: AXIS_LINE,
      axisLabel: AXIS_LABEL
    },
    series: [{
      type: 'bar',
      data: values.map((v, i) => ({
        value: v,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: colors[i] + '80' },
            { offset: 1, color: colors[i] }
          ]),
          borderRadius: [0, 4, 4, 0]
        }
      })),
      barWidth: '50%',
      label: {
        show: true,
        position: 'right',
        color: '#e0e6f0',
        formatter: '{c}%'
      }
    }]
  }
}

export function createContractCompareOption() {
  const categories = ['To B 硬件', 'To B 云托管', 'To G 平台', 'To G 特许经营']
  const amounts = [80, 150, 2750, 15000]
  const periods = [1, 3, 5, 15]

  return {
    backgroundColor: 'transparent',
    tooltip: {
      ...DARK_TOOLTIP,
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
      data: ['合同金额（万元）', '合作周期（年）'],
      textStyle: { color: '#8899aa' },
      top: 0
    },
    grid: { left: 80, right: 60, top: 50, bottom: 30 },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: AXIS_LINE,
      axisLabel: AXIS_LABEL
    },
    yAxis: [
      {
        type: 'value',
        name: '金额（万元）',
        nameTextStyle: { color: '#8899aa' },
        axisLine: AXIS_LINE,
        axisLabel: AXIS_LABEL,
        splitLine: SPLIT_LINE
      },
      {
        type: 'value',
        name: '周期（年）',
        nameTextStyle: { color: '#8899aa' },
        axisLine: AXIS_LINE,
        axisLabel: AXIS_LABEL,
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '合同金额（万元）',
        type: 'bar',
        yAxisIndex: 0,
        data: amounts,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: CHART_COLORS.blue },
            { offset: 1, color: CHART_COLORS.cyan }
          ]),
          borderRadius: [4, 4, 0, 0]
        },
        barWidth: '35%'
      },
      {
        name: '合作周期（年）',
        type: 'line',
        yAxisIndex: 1,
        data: periods,
        smooth: true,
        lineStyle: { color: CHART_COLORS.orange, width: 2 },
        itemStyle: { color: CHART_COLORS.orange },
        symbol: 'circle',
        symbolSize: 6
      }
    ]
  }
}

export function createRevenueForecastOption() {
  const years = ['第1年', '第2年', '第3年']
  const conservative = [0.3, 1.2, 3.0]
  const neutral = [0.5, 2.0, 5.0]
  const optimistic = [0.8, 3.0, 8.0]

  return {
    backgroundColor: 'transparent',
    tooltip: {
      ...DARK_TOOLTIP,
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['保守', '中性', '乐观'],
      textStyle: { color: '#8899aa' },
      top: 0
    },
    grid: { left: 60, right: 30, top: 50, bottom: 30 },
    xAxis: {
      type: 'category',
      data: years,
      axisLine: AXIS_LINE,
      axisLabel: AXIS_LABEL
    },
    yAxis: {
      type: 'value',
      name: '收入（亿元）',
      nameTextStyle: { color: '#8899aa' },
      axisLine: AXIS_LINE,
      axisLabel: AXIS_LABEL,
      splitLine: SPLIT_LINE
    },
    series: [
      {
        name: '保守',
        type: 'bar',
        data: conservative,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: CHART_COLORS.lightBlue },
            { offset: 1, color: CHART_COLORS.lightBlue + '60' }
          ]),
          borderRadius: [4, 4, 0, 0]
        }
      },
      {
        name: '中性',
        type: 'bar',
        data: neutral,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: CHART_COLORS.blue },
            { offset: 1, color: CHART_COLORS.blue + '60' }
          ]),
          borderRadius: [4, 4, 0, 0]
        }
      },
      {
        name: '乐观',
        type: 'bar',
        data: optimistic,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: CHART_COLORS.cyan },
            { offset: 1, color: CHART_COLORS.cyan + '60' }
          ]),
          borderRadius: [4, 4, 0, 0]
        }
      }
    ]
  }
}

export function createProfitStructureOption() {
  const data = [
    { value: 45, name: '停车资产运营' },
    { value: 30, name: '软件及云服务' },
    { value: 15, name: '交易结算手续费' },
    { value: 10, name: '其他增值服务' }
  ]
  const colors = [CHART_COLORS.blue, CHART_COLORS.cyan, CHART_COLORS.orange, CHART_COLORS.purple]

  return {
    backgroundColor: 'transparent',
    tooltip: {
      ...DARK_TOOLTIP,
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#8899aa' }
    },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['35%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 6,
        borderColor: '#0A1628',
        borderWidth: 2
      },
      label: {
        color: '#e0e6f0',
        formatter: '{b}\n{c}%'
      },
      labelLine: {
        lineStyle: { color: 'rgba(255,255,255,0.2)' }
      },
      data: data.map((d, i) => ({
        ...d,
        itemStyle: { color: colors[i] }
      }))
    }]
  }
}

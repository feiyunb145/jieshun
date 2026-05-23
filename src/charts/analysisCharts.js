import * as echarts from 'echarts/core'
import { BarChart, LineChart, RadarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  BarChart, LineChart, RadarChart,
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

// Section 2: 虚拟电厂市场规模（柱状图 + 增长率折线）
export function createVppMarketOption() {
  const years = ['2025', '2026', '2027', '2028', '2029', '2030']
  const marketSize = [102, 140, 200, 350, 600, 1000]
  const growthRate = [null, 37.3, 42.9, 75.0, 71.4, 66.7]

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

// Section 4: 捷顺V2G相关能力雷达图
export function createCapabilityRadarOption() {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      ...DARK_TOOLTIP
    },
    radar: {
      indicator: [
        { name: '场景覆盖', max: 10 },
        { name: '数据能力', max: 10 },
        { name: '硬件自研', max: 10 },
        { name: '运营经验', max: 10 },
        { name: '技术储备', max: 10 },
        { name: '增长验证', max: 10 }
      ],
      shape: 'polygon',
      splitNumber: 5,
      axisName: {
        color: '#8899aa',
        fontSize: 12
      },
      splitLine: {
        lineStyle: { color: 'rgba(255,255,255,0.08)' }
      },
      splitArea: {
        areaStyle: { color: ['rgba(0,82,217,0.02)', 'rgba(0,82,217,0.04)'] }
      },
      axisLine: {
        lineStyle: { color: 'rgba(255,255,255,0.1)' }
      }
    },
    series: [{
      type: 'radar',
      data: [{
        value: [9, 8, 7, 8, 6, 8],
        name: '捷顺V2G能力',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0,82,217,0.4)' },
            { offset: 1, color: 'rgba(0,212,170,0.1)' }
          ])
        },
        lineStyle: {
          color: CHART_COLORS.blue,
          width: 2
        },
        itemStyle: {
          color: CHART_COLORS.cyan
        }
      }]
    }]
  }
}

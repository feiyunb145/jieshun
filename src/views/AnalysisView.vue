<template>
  <div class="analysis-page">
    <StickyNav :sections="navSections" :active-id="activeSection" @navigate="scrollToSection" />

    <HeroSection />

    <!-- 行业背景 -->
    <section id="background" data-section="background">
      <div class="section-inner">
        <h2 class="section-title">行业背景</h2>
        <p class="section-subtitle">供需错配，是最大的机会</p>
        <p class="section-body">
          全国汽车保有量已达<span class="highlight">3.66亿辆</span>，车位缺口超<span class="highlight">8000万</span>。但与此同时，存量泊位平均利用率仅<span class="alert">40%</span>——"停车难"与"车位空"并存，这不是资源不足，而是资源错配。
        </p>
        <div class="contradiction-list">
          <div class="contradiction-item">
            <h4>空间错配</h4>
            <p>商业区车位长期满载，住宅区车位大量闲置，资源无法跨区域流动</p>
          </div>
          <div class="contradiction-item">
            <h4>时间错配</h4>
            <p>白天写字楼车位紧张、小区空置，夜间完全反转，潮汐现象严重</p>
          </div>
          <div class="contradiction-item">
            <h4>信息错配</h4>
            <p>车主找不到车位，车位找不到车主，缺乏统一调度平台</p>
          </div>
        </div>
        <ChartContainer chart-id="chart-industry-trend" :option="industryTrendOption" />
      </div>
    </section>

    <!-- To G 机会 -->
    <section id="why-tog" data-section="why-tog">
      <div class="section-inner">
        <h2 class="section-title">为什么是 To G</h2>
        <p class="section-subtitle">政策·市场·竞争·财务，四重驱动</p>
        <div class="quad-grid">
          <div class="quad-card">
            <h4>政策驱动</h4>
            <p>国务院《推动城市停车设施发展意见》明确鼓励社会资本参与停车设施建设运营，地方政府积极引入市场化力量解决停车难题</p>
          </div>
          <div class="quad-card">
            <h4>市场驱动</h4>
            <p>智慧停车市场规模从2019年120亿增长至2025年580亿，年复合增长率超25%，To G 项目单体金额远超 To B</p>
          </div>
          <div class="quad-card">
            <h4>竞争驱动</h4>
            <p>传统硬件商陷入价格战，毛利率持续走低；To G 赛道门槛高、竞争少，先发者可建立长期壁垒</p>
          </div>
          <div class="quad-card">
            <h4>财务驱动</h4>
            <p>To G 资产运营毛利率65%，远超硬件35%；合同周期5-15年，带来持续稳定的现金流</p>
          </div>
        </div>
        <ChartContainer chart-id="chart-gross-margin" :option="grossMarginOption" />
      </div>
    </section>

    <!-- 合作模式 -->
    <section id="models" data-section="models">
      <div class="section-inner">
        <h2 class="section-title">三种合作模式</h2>
        <p class="section-subtitle">从轻到重，三种路径切入 To G</p>
        <div class="mode-grid">
          <ModeCard
            title="合资公司"
            tag="重资产"
            :features="[
              '与地方政府合资成立运营公司',
              '获取区域停车资产独家经营权',
              '深度参与城市停车资产运营',
              '分享停车费收入与增值服务收益'
            ]"
            revenue="年收益约2.3亿元"
          />
          <ModeCard
            title="特许经营"
            tag="中资产"
            :features="[
              '获得政府特许经营权',
              '投资建设智慧停车系统',
              '特许期内自主运营收费',
              '期满后资产移交政府'
            ]"
            revenue="年净收益1.82亿"
          />
          <ModeCard
            title="平台服务"
            tag="轻资产"
            :features="[
              '提供 SaaS 平台和技术服务',
              '不参与资产投资和运营',
              '按年收取平台服务费',
              '快速复制、低风险扩张'
            ]"
            revenue="年收入约2,750万"
          />
        </div>

        <table class="compare-table">
          <thead>
            <tr>
              <th>对比维度</th>
              <th>合资公司</th>
              <th>特许经营</th>
              <th>平台服务</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>投资规模</td>
              <td>大（数亿元）</td>
              <td>中（数千万元）</td>
              <td>小（数百万元）</td>
            </tr>
            <tr>
              <td>回报周期</td>
              <td>3-5年</td>
              <td>2-3年</td>
              <td>1-2年</td>
            </tr>
            <tr>
              <td>毛利率</td>
              <td>65%</td>
              <td>55%</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>合作周期</td>
              <td>15年+</td>
              <td>5-15年</td>
              <td>1-3年</td>
            </tr>
            <tr>
              <td>风险等级</td>
              <td>高</td>
              <td>中</td>
              <td>低</td>
            </tr>
          </tbody>
        </table>

        <div class="stages">
          <div class="stage-item" data-stage="第一阶段">
            <h4>平台切入（0-6月）</h4>
            <p>以平台服务模式快速进入3-5个城市，验证商业模式，建立政府信任关系</p>
          </div>
          <div class="stage-item" data-stage="第二阶段">
            <h4>特许扩张（6-18月）</h4>
            <p>在已建立信任的城市升级为特许经营模式，扩大收入规模和运营深度</p>
          </div>
          <div class="stage-item" data-stage="第三阶段">
            <h4>合资深耕（18-36月）</h4>
            <p>在核心城市成立合资公司，获取长期资产经营权，构建竞争壁垒</p>
          </div>
        </div>

        <ChartContainer chart-id="chart-contract-compare" :option="contractCompareOption" />
      </div>
    </section>

    <!-- 财务测算 -->
    <section id="finance" data-section="finance">
      <div class="section-inner">
        <h2 class="section-title">财务测算</h2>
        <p class="section-subtitle">三年从0.5亿到5亿，To G 的复利增长</p>
        <p class="section-body">
          创新业务收入<span class="highlight">9.10亿元</span>，同比增长35.73%，停车资产运营收入<span class="highlight">4.86亿元</span>，同比增长59.46%，创新业务新签订单<span class="highlight">19.80亿元</span>，同比增长54.78%。
        </p>

        <table class="data-table">
          <thead>
            <tr>
              <th>指标</th>
              <th>第1年</th>
              <th>第2年</th>
              <th>第3年</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>To G 收入（亿元）</td>
              <td>0.5</td>
              <td>2.0</td>
              <td>5.0</td>
            </tr>
            <tr>
              <td>占创新业务比例</td>
              <td>5.5%</td>
              <td>16.7%</td>
              <td>33.3%</td>
            </tr>
            <tr>
              <td>新增城市数</td>
              <td>5</td>
              <td>12</td>
              <td>20</td>
            </tr>
            <tr>
              <td>累计运营车位（万）</td>
              <td>10</td>
              <td>35</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>

        <div class="valuation-highlight">
          <div class="valuation-item">
            <div class="val-from">~1.3亿</div>
            <div class="val-arrow">&#8594;</div>
            <div class="val-to">~3亿</div>
            <div class="val-label">净利润</div>
          </div>
          <div class="valuation-item">
            <div class="val-from">25x</div>
            <div class="val-arrow">&#8594;</div>
            <div class="val-to">45x</div>
            <div class="val-label">PE 估值倍数</div>
          </div>
          <div class="valuation-item">
            <div class="val-from">~50亿</div>
            <div class="val-arrow">&#8594;</div>
            <div class="val-to">~135亿</div>
            <div class="val-label">目标市值</div>
          </div>
        </div>

        <div class="charts-row">
          <ChartContainer chart-id="chart-revenue-forecast" :option="revenueForecastOption" :height="350" />
          <ChartContainer chart-id="chart-profit-structure" :option="profitStructureOption" :height="350" />
        </div>
      </div>
    </section>

    <!-- 风险与建议 -->
    <section id="risk" data-section="risk">
      <div class="section-inner">
        <h2 class="section-title">风险与建议</h2>
        <p class="section-subtitle">90天行动路线 + 风险矩阵</p>

        <div class="risk-matrix">
          <table class="data-table">
            <thead>
              <tr>
                <th>风险类型</th>
                <th>风险描述</th>
                <th>影响程度</th>
                <th>应对策略</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>政策风险</td>
                <td>地方政府换届导致项目推进放缓</td>
                <td><span class="alert">高</span></td>
                <td>建立多层级政府关系，分散区域布局</td>
              </tr>
              <tr>
                <td>回款风险</td>
                <td>政府财政紧张导致付款延迟</td>
                <td><span class="alert">高</span></td>
                <td>合同约定分期付款，引入第三方担保</td>
              </tr>
              <tr>
                <td>运营风险</td>
                <td>资产运营效率不达预期</td>
                <td>中</td>
                <td>以平台服务先行验证，再升级重资产模式</td>
              </tr>
              <tr>
                <td>竞争风险</td>
                <td>互联网巨头切入停车赛道</td>
                <td>中</td>
                <td>深耕政府关系壁垒，加速资产锁定</td>
              </tr>
              <tr>
                <td>技术风险</td>
                <td>技术迭代导致系统过时</td>
                <td>低</td>
                <td>持续投入研发，保持技术领先性</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Timeline :items="timelineItems" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="analysis-footer">
      <blockquote>「停车产业终局不是卖设备，而是经营城市停车资产。」</blockquote>
      <p class="footer-text">
        捷顺科技拥有行业最完整的停车产品线和最广泛的客户基础，从硬件到软件、从设备到运营的全链路能力，是转型城市停车资产运营商的核心优势。抓住 To G 战略窗口期，三年内将创新业务占比提升至30%以上，公司估值将迎来结构性重估。
      </p>
      <router-link to="/" class="footer-link">返回导航首页</router-link>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import StickyNav from '@/components/analysis/StickyNav.vue'
import HeroSection from '@/components/analysis/HeroSection.vue'
import ChartContainer from '@/components/analysis/ChartContainer.vue'
import ModeCard from '@/components/analysis/ModeCard.vue'
import Timeline from '@/components/analysis/Timeline.vue'
import {
  createIndustryTrendOption,
  createGrossMarginOption,
  createContractCompareOption,
  createRevenueForecastOption,
  createProfitStructureOption
} from '@/charts/analysisCharts.js'
import '@/styles/analysis.css'

const navSections = [
  { id: 'hero', label: '首页' },
  { id: 'background', label: '行业背景' },
  { id: 'why-tog', label: 'To G 机会' },
  { id: 'models', label: '合作模式' },
  { id: 'finance', label: '财务测算' },
  { id: 'risk', label: '风险与建议' }
]

const activeSection = ref('hero')

const industryTrendOption = createIndustryTrendOption()
const grossMarginOption = createGrossMarginOption()
const contractCompareOption = createContractCompareOption()
const revenueForecastOption = createRevenueForecastOption()
const profitStructureOption = createProfitStructureOption()

const timelineItems = [
  { label: '第1-30天', content: '完成3个目标城市的政府对接，确定1个平台服务试点城市' },
  { label: '第31-60天', content: '签约首个平台服务合同，启动技术团队交付；同步推进2个特许经营项目谈判' },
  { label: '第61-90天', content: '首个平台服务项目上线运营；完成1个特许经营合同签约；启动合资公司可行性研究' }
]

let sectionObserver = null

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // 观察 section 添加 section-visible 类
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible')
        // 更新导航高亮
        const sectionId = entry.target.getAttribute('data-section')
        if (sectionId) {
          activeSection.value = sectionId
        }
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll('.analysis-page section').forEach(s => {
    sectionObserver.observe(s)
  })
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
})
</script>

<style scoped>
.mode-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}
</style>

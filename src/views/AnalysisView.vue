<template>
  <div class="analysis-page">
    <StickyNav :sections="navSections" :active-id="activeSection" @navigate="scrollToSection" />

    <HeroSection />

    <!-- 行业趋势 -->
    <section id="discovery" data-section="discovery">
      <div class="section-inner">
        <h2 class="section-title">行业正在发生什么</h2>
        <p class="section-subtitle">政策、车、电——三条线同时走到一个交汇点</p>

        <p class="section-body">
          梳理公开的行业资料后，我们注意到三个趋势几乎同时成熟了：
        </p>

        <div class="trend-list">
          <div class="trend-item">
            <h4>政策从"研究"变成"推动"</h4>
            <ul>
              <li>2023年底，四部门联合发布《加强新能源汽车与电网融合互动的实施意见》，第一次把V2G写进了顶层设计</li>
              <li>2025年4月，首批<span class="highlight">9个试点城市</span>（上海、常州、合肥、淮北、广州、深圳、海口、重庆、昆明）和<span class="highlight">30个试点项目</span>正式公布</li>
              <li>国家要求2025年前完成V2G关键技术标准制修订，节奏比预期快</li>
            </ul>
          </div>

          <div class="trend-item">
            <h4>4397万辆车，就是4397万个移动电池</h4>
            <ul>
              <li>2025年底全国新能源汽车保有量达<span class="highlight">4397万辆</span>，已经是全球最大的移动储能资源</li>
              <li>私家车平均每天停超过20小时——车停在停车场的时候，电池基本是闲着的</li>
              <li>深圳实测：新能源汽车车载电池储能潜力可达<span class="highlight">5000万度</span>，相当于5台中型燃煤发电机组</li>
            </ul>
          </div>

          <div class="trend-item">
            <h4>虚拟电厂从试点走向规模化</h4>
            <ul>
              <li>2025年虚拟电厂市场规模约<span class="highlight">102亿元</span>，预计2030年达千亿元</li>
              <li>电力市场化改革推进，峰谷价差越拉越大（广东珠三角达<span class="highlight">1.28元/千瓦时</span>），低充高放的套利空间开始出现</li>
              <li>虚拟电厂聚合调节能力目标：2027年2000万千瓦以上，2030年5000万千瓦以上</li>
            </ul>
          </div>
        </div>

        <p class="section-body insight-box">
          说白了：政策在推、车够多了、电价差也出来了。V2G不再是PPT里的概念，而是正在发生的事。而停车场是电动车停留时间最长的地方——这跟捷顺的业务直接相关。
        </p>

        <ChartContainer chart-id="chart-vpp-market" :option="vppMarketOption" />

        <Timeline :items="policyTimeline" />
      </div>
    </section>

    <!-- 机会分析 -->
    <section id="opportunity" data-section="opportunity">
      <div class="section-inner">
        <h2 class="section-title">这跟捷顺有什么关系</h2>
        <p class="section-subtitle">不是另起炉灶，是现有能力的延伸</p>

        <p class="section-body">
          任务一里我们学了捷顺的"云托管"和"车位代运营"。顺着这个思路看，V2G跟捷顺现有业务其实有不少衔接点：
        </p>

        <div class="opp-grid">
          <div class="opp-card">
            <span class="opp-tag">窗口期</span>
            <h4>政策窗口期真实存在</h4>
            <p>首批9个试点城市已经启动，未来2-3年可能是布局的关键期。先进去的人会积累数据、建立政府信任、形成网络效应，后来的人可能只能做"补充接入"。</p>
          </div>

          <div class="opp-card">
            <span class="opp-tag">三方共赢</span>
            <h4>电网、车主、政府都有动力</h4>
            <p><strong>电网：</strong>需要分布式调峰资源，V2G响应速度是秒级的，比传统火电调峰快得多<br>
            <strong>车主：</strong>深圳实测，反向送电每度能赚<span class="highlight">4元</span>，跟低谷充电成本之间有明显的价差<br>
            <strong>政府：</strong>"双碳"目标摆在那，需要能落地的绿色能源方案</p>
          </div>

          <div class="opp-card">
            <span class="opp-tag">业务协同</span>
            <h4>"停充储"已经铺了，V2G是加模块</h4>
            <p>任务一里我们学了捷顺的"停充储一体化"方案：停车场+充电桩+储能柜。V2G只需要在现有基础上增加"双向充放电"能力，不是从零开始。捷顺已经在深圳、广州等试点城市布局了"停充储"，升级V2G是"加模块"不是"建体系"。</p>
          </div>

          <div class="opp-card">
            <span class="opp-tag">轻资产</span>
            <h4>改造就行，不用大建</h4>
            <p>利用现有的停车场和充电桩改造，不需要大规模新建基础设施。常州的实践表明，把普通车桩改成交流V2G充电桩，费用可以压到<span class="highlight">1000元以内</span>。</p>
          </div>
        </div>

        <p class="section-body insight-box">
          所以V2G不是在追风口——捷顺的"停充储一体化"本身就在往这个方向走，政策只是加速了这个进程。
        </p>
      </div>
    </section>

    <!-- 捷顺能力 -->
    <section id="capability" data-section="capability">
      <div class="section-inner">
        <h2 class="section-title">捷顺做V2G，有什么基础</h2>
        <p class="section-subtitle">场景、数据、硬件、运营——不是从零开始</p>

        <p class="section-body">
          基于公开资料，我们梳理了捷顺可能具备的几项能力：
        </p>

        <div class="cap-grid">
          <div class="cap-item">
            <span class="cap-num">01</span>
            <h4>5万个停车场的场景优势</h4>
            <p class="cap-subtitle">停车场是V2G落地的天然点位</p>
            <p>捷顺在全国管理超过<span class="highlight">5万个停车场</span>，覆盖社区、园区、商业体等场景。私家车在这些地方停的时间最长，是装V2G桩最合适的位置。相比纯充电运营商，捷顺有停车资产的运营权或长期管理权，不用一个一个去谈。</p>
          </div>

          <div class="cap-item">
            <span class="cap-num">02</span>
            <h4>停车+充电双重数据</h4>
            <p class="cap-subtitle">知道车什么时候来、停多久、充多少</p>
            <p>捷停车平台覆盖<span class="highlight">1.3亿+车主用户</span>，掌握进出场时间、停留时长、月卡类型等停车行为数据，同时也在积累充电行为数据。虚拟电厂需要提前24小时预测可调度容量，"停车+充电"数据交叉有可能提升预测精度。</p>
          </div>

          <div class="cap-item">
            <span class="cap-num">03</span>
            <h4>硬件自研能力</h4>
            <p class="cap-subtitle">道闸、检测器、EMS都是自己的</p>
            <p>捷顺有道闸、车位检测器、车牌识别等自研硬件能力，也自主研发了EMS能量管理系统、协调控制器、储能变流器。理论上可以做到"识别车位占用→决定是否允许充放电→动态调节功率"的闭环。</p>
          </div>

          <div class="cap-item">
            <span class="cap-num">04</span>
            <h4>停充储已经跑起来了</h4>
            <p class="cap-subtitle">不是PPT，是已经落地的数据</p>
            <p>储能落地超百台（总容量<span class="highlight">26.45MWh</span>），充电桩突破<span class="highlight">1万个</span>。社区充电利用率平均<span class="highlight">20%</span>，行业平均才4%左右。"停充联动"的运营模型已经跑通了。</p>
          </div>

          <div class="cap-item">
            <span class="cap-num">05</span>
            <h4>创新业务增速说明公司能转型</h4>
            <p class="cap-subtitle">从卖硬件到卖服务，已经验证过一次</p>
            <p>创新业务新签订单<span class="highlight">19.80亿元</span>（同比+54.78%），收入占比首次突破<span class="highlight">50%</span>。公司从传统硬件销售转向"硬件+平台+运营+能源服务"，这条路已经走了一半了。</p>
          </div>
        </div>

        <ChartContainer chart-id="chart-capability-radar" :option="capabilityRadarOption" />

        <p class="section-body insight-box">
          当然，这只是我们基于公开资料做的梳理，不是确定的结论。但场景+数据+硬件+运营的组合，确实让捷顺在V2G方向上有一定基础，值得进一步研究。
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="analysis-footer">
      <blockquote>「从停车服务商到能源聚合服务商——一个可能的方向。」</blockquote>
      <p class="footer-text">
        任务一里，我们学了捷顺"云托管+车位代运营"怎么帮单个车场降本增收。任务二里，我们顺着这个思路往下看——如果把这些分散在停车场的电动汽车聚合起来，参与城市电网调峰和电力市场交易呢？
      </p>
      <p class="footer-text">
        这不是一份成熟的商业计划。只是作为刚入职的培训生，在学完公司产品知识后，觉得V2G + 停充储一体化可能是捷顺从"停车服务商"往"能源聚合服务商"延伸的一个值得探索的方向。
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
import Timeline from '@/components/analysis/Timeline.vue'
import {
  createVppMarketOption,
  createCapabilityRadarOption
} from '@/charts/analysisCharts.js'
import '@/styles/analysis.css'

const navSections = [
  { id: 'hero', label: '首页' },
  { id: 'discovery', label: '行业趋势' },
  { id: 'opportunity', label: '机会分析' },
  { id: 'capability', label: '捷顺优势' }
]

const activeSection = ref('hero')

const vppMarketOption = createVppMarketOption()
const capabilityRadarOption = createCapabilityRadarOption()

const policyTimeline = [
  { label: '2023年底', content: '《加强新能源汽车与电网融合互动的实施意见》发布，首次确立V2G战略地位' },
  { label: '2025年4月', content: '首批9个试点城市、30个试点项目公布' },
  { label: '2025年底前', content: '完成V2G关键技术标准制修订' },
  { label: '2027年', content: '虚拟电厂调节能力目标2000万千瓦' },
  { label: '2030年', content: '虚拟电厂市场规模预计达千亿元' }
]

let sectionObserver = null

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible')
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
.opp-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.opp-card {
  background: var(--white-04);
  border: 1px solid var(--white-08);
  border-radius: 12px;
  padding: 24px;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.opp-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px var(--brand-blue-20);
}

.opp-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--brand-blue), var(--gradient-blue-end));
  color: var(--white);
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.opp-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 10px;
}

.opp-card p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

.trend-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.trend-item {
  background: var(--white-04);
  border: 1px solid var(--white-08);
  border-radius: 12px;
  padding: 24px;
}

.trend-item h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 12px;
}

.trend-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.trend-item li {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  padding-left: 18px;
  position: relative;
}

.trend-item li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tech-cyan);
}

.cap-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.cap-item {
  background: var(--white-04);
  border: 1px solid var(--white-08);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cap-num {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-blue), var(--tech-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.cap-item h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.cap-subtitle {
  font-size: 14px;
  color: var(--tech-cyan);
  font-weight: 600;
  margin: 0;
}

.cap-item p:last-child {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 4px 0 0;
}

.insight-box {
  background: var(--brand-blue-08);
  border: 1px solid var(--brand-blue-20);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .opp-grid {
    grid-template-columns: 1fr;
  }

  .opp-card {
    padding: 18px;
  }

  .opp-card h4 {
    font-size: 16px;
  }

  .trend-item {
    padding: 18px;
  }

  .trend-item h4 {
    font-size: 16px;
  }

  .cap-item {
    padding: 18px;
  }

  .cap-item h4 {
    font-size: 16px;
  }
}
</style>

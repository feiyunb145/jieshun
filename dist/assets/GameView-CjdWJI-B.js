import{B as e,C as t,R as n,S as r,T as i,_ as a,b as o,c as s,h as c,i as l,l as u,m as d,o as f,r as p,s as m,u as h,v as g,w as _,z as v}from"./vue-vendor-Bu9dmlp0.js";import{n as ee,r as y,t as b}from"./index-D32nlHX2.js";var x={npc_profile:{name:`小捷`,layers:{layer0_hard_rules:[`绝不对客户表现出不耐烦`,`绝不用"您说得对但是"否定式承接`,`所有数据必须有出处（案例/报告/官网可查）`],layer1_identity:`捷顺科技To B销售，从业5年，服务200+车场，MBTI: ESFJ`,layer2_expression:{style:`口语化，像聊天不像背稿`,catchphrases:[`您放心`,`哈哈哈您真幽默`,`理解理解`],response_structure:`承接质疑 → 举证(数据+案例) → 收尾推进(三段式)`,banned:[`专业术语不解释`,`居高临下语气`]},layer3_power:{vs_objection:`不卑不亢，用数据回应`,vs_acceptance:`乘胜追击，用案例巩固`,vs_hesitation:`主动降低门槛`},layer4_emotion:{stability:7,expressions:{normal:`😐`,questioned:`🤔`,confident:`😏`,closed:`😄`}}}},nodes:{cover:{type:`cover`,title:`🚗 车场老板的谈判挑战`,subtitle:`今天，有个销售上门给你推方案...`,intro:`你是小区车场老板老王，
每月利润3万块，
全国车位缺口超8000万，
可你的泊位利用率才40%。

招人难、漏费多、
白天60个车位空着浪费。

捷顺的销售小捷上门了，
张嘴就说能帮你一年多赚54万...

你可以随时打断他，
抛出你最刁钻的问题！`},node_1:{speaker:`小捷`,emotion:`normal`,text:`王总您好！我是捷顺的小捷。
今天过来，就想跟您算一笔账——
怎么把您这车场，从每月赚3万，变成每月7万5。

一年多赚54万，不是空话。
全国车位缺口超8000万，可存量泊位利用率才40%。
您这小区，白天60个车位空着，
晚上业主回来又一位难求——
这差距，就是钱啊。`,choices:[{id:`1A`,label:`🤨 吹什么牛？我一年才赚30多万，你一张嘴就多赚54万？`,type:`objection`,responseNode:`node_1_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`1B`,label:`😨 上来就说多赚54万，你这销售靠谱吗？`,type:`objection`,responseNode:`node_1_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`1C`,label:`😐 行，你先说说看`,type:`neutral`,responseNode:`node_1_answer_C`}]},node_1_answer_A:{speaker:`小捷`,emotion:`questioned`,text:`王总，真不是吹牛！
我帮您捋捋这笔账——

您这4个车道，配了4个收费员吧？
一人月薪5000，一个月工资就2万。
人工收费，跟车的、倒车的、说下次给的，
一个月少说漏5000。

还有，白天业主上班，60个车位空着，
周边上班族找不到地儿停，您也不知道人在哪。

这三块一解决，
一个月直接多赚4万5，一年54万，账就是这么算的！`,nextNode:`node_2`},node_1_answer_B:{speaker:`小捷`,emotion:`normal`,text:`哈哈哈王总，您这警惕性，不愧是做生意的！

给您看看，捷顺A股上市十多年，代码002609，随时可查。全国5.5万多个智慧车场在用我们，1.5亿注册车主。

SOHO中国上海六大地标、贵阳花果园亚洲最大社区，都是我们的客户。
骗子可做不了这么大的生意，您说对吧？`,nextNode:`node_2`},node_1_answer_C:{speaker:`小捷`,emotion:`normal`,text:`好嘞王总！
您这车场现在有三处漏钱，
我一个一个帮您盘。

您先听着，哪儿不对随时打断我！`,nextNode:`node_2`},node_2:{speaker:`小捷`,emotion:`normal`,text:`王总，您这4个车道，4个收费员，
一个月工资2万，对吧？
现在招人多难啊，年轻人谁愿意熬夜看杆子？
您是不是也头疼？

再说漏费——跟车逃费、倒车逃费、收费员疏忽，
全国车场平均逃费率超10%，
您一个月少说损失大几千。
我们的AI堵漏系统，追缴率91%。

最可惜的是，白天一半车位空着，
周边上班的还找不到地儿。
全国泊位利用率才40%，
这就是信息错配——车主找不到空位，空位找不到车主。

我们今天，一次性把这三个问题全解决。`,choices:[{id:`2A`,label:`🤨 你怎么知道我有4个收费员？调查我？`,type:`objection`,responseNode:`node_2_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`2B`,label:`😠 漏费？我的收费员跟了我5年，老实得很！`,type:`objection`,responseNode:`node_2_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`2C`,label:`😐 嗯，你说的还真有点对...`,type:`neutral`,responseNode:`node_2_answer_C`}]},node_2_answer_A:{speaker:`小捷`,emotion:`normal`,text:`王总，这哪是调查啊！
您这种4个车道的小区车场，
行业标配就是4个收费员两班倒，
不然谁顶得住？

全国做了5.5万多个车场，您这情况太普遍了。
贵阳花果园当年273条车道，配了500个收费员，
后来全换成云托管了。
见得多了，一眼就知道。`,nextNode:`node_3`},node_2_answer_B:{speaker:`小捷`,emotion:`normal`,text:`王总，我相信您的收费员人老实！
但人总有疏忽的时候——
晚上犯困，车主冲杆了没拦住；
或者说没带钱下次给，转头就忘了。

我们的雷视融合防逃费系统，
激光雷达加视觉融合，
拖车进出场、跟车、假车牌，全能识别。
AI堵漏自动追缴，追缴率91%。

原来一个月漏5000，现在基本都能追回来。
不比您自己盯着强？`,nextNode:`node_3`},node_2_answer_C:{speaker:`小捷`,emotion:`normal`,text:`哈哈，被我说中了吧！
这三个痛点，全国5.5万多个车场基本都一样。

接下来给您看看我们的方案，
怎么一个一个解决。`,nextNode:`node_3`},node_3:{speaker:`小捷`,emotion:`normal`,text:`王总，我们给您的是「云托管 + 车位代运营」整体方案。
先帮您砍成本，再帮您把闲置资源变钱。

第一件，云托管。
收费管理搬云端，不用雇收费员。
365天云端坐席，车主有问题扫码呼叫，
平均响应10秒。
原来4个收费员，现在留1个维护秩序，
一个月省1.5万工资。

第二件，AI堵漏+无人值守。
雷视融合防逃费，激光雷达加视觉融合，
拖车、跟车、假车牌，精准识别。
AI巡检机器人24小时自动巡检。
全国车场平均逃费率超10%，我们追缴率91%。

第三件，天启AI运营助手。
300万级数据训练的行业大模型，
12个智能体，60多个AI工具——
智能定价、潮汐调度、用户画像，全部自动化。
就像给车场配了个运营专家。

白天空的60个车位，
我们包装成错峰月卡，放捷停车平台——
1.5亿注册车主，周边上班族一搜就能找到。`,choices:[{id:`3A`,label:`😨 无人值守了，车主有问题找不到人怎么办？`,type:`objection`,responseNode:`node_3_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`3B`,label:`🤨 我原来的设备不是你们的，能用吗？`,type:`objection`,responseNode:`node_3_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`3C`,label:`😠 车位租给外人，业主回来没车位了怎么办？`,type:`objection`,responseNode:`node_3_answer_C`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`3D`,label:`😐 听起来不错，我先看看效果`,type:`accept`,responseNode:`node_3_answer_D`}]},node_3_answer_A:{speaker:`小捷`,emotion:`normal`,text:`王总您放心！
我们的7×24h云端坐席不是摆设。

车主付不了钱、找不到车位，
扫一下码，一秒呼叫坐席，
平均响应10秒，比收费员反应还快。

汕头物流园用了一年多，
从来没出过车主找不到人的问题。`,nextNode:`node_4`},node_3_answer_B:{speaker:`小捷`,emotion:`normal`,text:`当然能！
我们的系统开放的，
全国几千个非捷顺硬件的车场都接入了，
照样降本增收。

厦门嘉禾新天地，
原来设备就不是我们的，
我们照样帮他做车位代运营。
0投入升级，9个车位上线就卖光了。`,nextNode:`node_3_follow_B`},node_3_follow_B:{speaker:`小捷`,emotion:`normal`,text:`王总，接入其实很简单——
我们在您现有道闸上加个边缘计算盒子，
半天就能装好，不用换设备。

软件层面，我们的平台开放API，
不管是科拓、道尔还是海康的系统，
都能无缝对接。

您还有什么担心的吗？`,choices:[{id:`3FB_A`,label:`🤨 加盒子会不会影响现有系统稳定？`,type:`objection`,responseNode:`node_3_follow_B_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`3FB_B`,label:`😐 那数据会不会泄露？`,type:`objection`,responseNode:`node_3_follow_B_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`3FB_C`,label:`😐 听起来还行，继续说说别的`,type:`neutral`,responseNode:`node_3_follow_B_answer_C`}]},node_3_follow_B_answer_A:{speaker:`小捷`,emotion:`normal`,text:`完全不会！
我们的边缘盒子是旁路部署，
不影响您现有系统的任何功能。

就算盒子出了问题，
您的道闸照样能正常起落杆，
收费员该干嘛干嘛，
只是暂时享受不到云端功能而已。

而且我们有7×24小时远程监控，
出问题5分钟内就能响应。`,nextNode:`node_4`},node_3_follow_B_answer_B:{speaker:`小捷`,emotion:`normal`,text:`王总，数据安全是我们的生命线。

我们是等保三级认证，
所有数据加密传输、加密存储。
您的经营数据只属于您，
我们签保密协议，白纸黑字。

SOHO中国、重庆公租房这种大项目，
数据安全要求比我们严格多了，
不也合作得好好的吗？`,nextNode:`node_4`},node_3_follow_B_answer_C:{speaker:`小捷`,emotion:`normal`,text:`好嘞王总！
接下来给您算算账，
看看具体能省多少、赚多少。`,nextNode:`node_4`},node_3_answer_C:{speaker:`小捷`,emotion:`confident`,text:`王总，这个问题我们想过。

第一，我们只租白天——早上8点到晚上6点。
业主回来之前，租出去的车早就走了。

第二，万一真有白天租的车主到点不走怎么办？
两招兜底：

一是在筛选用户的时候，大数据只把车位给那些"准时走"的优质用户；
二是万一还是不走，我们立刻在附近给业主找个备用车位，再通过优惠券或者现金补偿把业主安抚好。

说白了，风险我们担，收益您拿。`,nextNode:`node_4`},node_3_answer_D:{speaker:`小捷`,emotion:`normal`,text:`好嘞王总！
给您看几个跟您情况差不多的案例——

南京太阳宫，33个闲置车位首月卖光；
厦门嘉禾新天地，0投入升级，
9个车位上线就售罄。

您看完心里就有底了。`,nextNode:`node_4`},node_4:{speaker:`小捷`,emotion:`normal`,text:`王总，这是最实在的账，
按您4进4出的标准车场算：

人工成本：原来20,000 → 现在5,000，省15,000
逃费损失：原来5,000 → 现在450，挽回4,550
车位收入：原来0 → 现在25,000，新增25,000

原来月利润3万，现在直接变7万5。
一年下来，帮您多赚54万。

全国车场平均增收20%-40%，
深圳新闻网、证券之星都报道过我们。
汕头物流园16条车道全换方案后，收益涨了20%。
南京太阳宫，跟您情况一样，
33个闲置车位首月售罄，半年多赚5万。`,choices:[{id:`4A`,label:`🤨 你这账算得太理想了，真能做到？`,type:`objection`,responseNode:`node_4_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`4B`,label:`😨 你们服务费是不是很贵？别我省的钱都给你们了`,type:`objection`,responseNode:`node_4_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`4C`,label:`😐 这账还挺诱人的，看看你们的案例`,type:`neutral`,responseNode:`node_4_answer_C`}]},node_4_answer_A:{speaker:`小捷`,emotion:`confident`,text:`王总，这可不是理想状态，
是几千个车场的平均数据。

南京太阳宫，33个闲置车位首月100%售罄，
半年多赚5万；
上海陆家嘴写字楼，保底分成模式，
一年多赚320万，物业分了100万；
SOHO中国上海六大地标，
3325个车位中标1.61亿，年收益提升超20%。

这些在深圳新闻网、证券之星都有公开报道，
您搜一搜就能看到。`,nextNode:`node_4_follow_A`},node_4_follow_A:{speaker:`小捷`,emotion:`normal`,text:`王总，我知道您担心这些案例跟您情况不一样。

南京太阳宫是社区型车场，跟您一样；
汕头物流园是4进4出，车道数跟您一样；
厦门嘉禾新天地是老旧小区，车位数和您差不多。

您最担心的是哪一点？`,choices:[{id:`4FA_A`,label:`🤨 我这小区老旧，车主不愿意用智能缴费`,type:`objection`,responseNode:`node_4_follow_A_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`4FA_B`,label:`😨 万一投了钱，收益没你说的那么好怎么办？`,type:`objection`,responseNode:`node_4_follow_A_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`4FA_C`,label:`😐 案例还行，再看看你们的服务`,type:`neutral`,responseNode:`node_4_follow_A_answer_C`}]},node_4_follow_A_answer_A:{speaker:`小捷`,emotion:`normal`,text:`王总，这您放心！

我们的系统支持现金、微信、支付宝、
ETC、月卡、临时卡——
老年人不会用手机，照样能现金缴费。

而且我们提供现场培训，
前两周安排专人驻场指导，
车主有问题随时有人教。

贵阳花果园当年也是老人多，
现在95%的车主都用手机缴费了，
习惯是可以培养的。`,nextNode:`node_5`},node_4_follow_A_answer_B:{speaker:`小捷`,emotion:`normal`,text:`王总，这个风险我们替您想到了。

所以我们有"先试后买"——
拿3个车位试1个月，
您自己看数据、算收益。

如果效果不好，
设备我们拉走，车场恢复原样，
您一分钱损失都没有。

而且保底分成模式里，
我们承诺"只多不少"，
原来赚多少现在保底多少，
多赚的才分成。
这还有什么好担心的？`,nextNode:`node_5`},node_4_follow_A_answer_C:{speaker:`小捷`,emotion:`normal`,text:`好嘞！
给您看看我们刚落地的几个大项目，
都是公开可查的。`,nextNode:`node_5`},node_4_answer_B:{speaker:`小捷`,emotion:`normal`,text:`王总，车位代运营，
租出去一个车位收300块，
我们只拿20%佣金，60块，
剩下240全是您的。

云托管服务费，一个车道一个月才几百块。
您省了1.5万工资，
AI堵漏挽回4500，
车位增收2.5万——
这点服务费算什么呀。

而且我们先试后买，
拿3个车位试1个月，
您自己看效果，不好随时撤。`,nextNode:`node_5`},node_4_answer_C:{speaker:`小捷`,emotion:`normal`,text:`好嘞！
给您看真实案例——
南京太阳宫、上海陆家嘴、SOHO中国，
都是公开可查的。

您看完再说。`,nextNode:`node_5`},node_5:{speaker:`小捷`,emotion:`confident`,text:`王总，这都是刚落地的项目，
全部公开可查：

🏙️ 南京太阳宫广场——
0投入升级，33个闲置车位首月100%售罄，
半年多赚5万

🏙️ 上海陆家嘴写字楼——
保底分成模式，一年多赚320万，
物业分了100万

🏙️ SOHO中国——
上海六大地标，3325个车位中标1.61亿，
年收益提升超20%

🏙️ 重庆公租房——
9300个车位，智慧停车管理

从亚洲最大社区到地标写字楼，
从小区到物流园，我们都做过。`,choices:[{id:`5A`,label:`🤨 这些案例是不是编的？我怎么知道真假？`,type:`objection`,responseNode:`node_5_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`5B`,label:`😨 那是人家的情况，我这周边没人，车位肯定租不出去！`,type:`objection`,responseNode:`node_5_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`5C`,label:`😐 还真有这么回事？怎么跟你们合作？`,type:`accept`,responseNode:`node_5_answer_C`}]},node_5_answer_A:{speaker:`小捷`,emotion:`normal`,text:`王总，绝对不是编的！

南京太阳宫的案例，
捷停车官网可查。
SOHO中国是上市公司中标公告，
1.61亿公开招标，公开可查。

重庆公租房、贵阳花果园，
您搜"捷顺 云托管"看看，
深圳新闻网、证券之星都报道过。`,nextNode:`node_6`},node_5_answer_B:{speaker:`小捷`,emotion:`normal`,text:`王总您放心！
我们有1.5亿用户，
周边车主用捷停车找车位，
一搜就能找到您的。

天启AI运营助手还会帮您精准推广，
给周边写字楼和小区发优惠券。

全国5.5万多个车场，
从城市CBD到偏远园区，
从来没有卖不出去的情况。
我们的运营团队是专业的，
比您自己做推广强多了。`,nextNode:`node_5_follow_B`},node_5_follow_B:{speaker:`小捷`,emotion:`normal`,text:`王总，我知道您担心周边没人。

其实车位代运营的核心不是"等人来"，
而是"主动找人"。

我们有三种引流方式，
您看哪种最适合您？`,choices:[{id:`5FB_A`,label:`🤨 具体怎么引流？别光说大话`,type:`objection`,responseNode:`node_5_follow_B_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`5FB_B`,label:`😨 月租价格定多少合适？别比我现在的低`,type:`objection`,responseNode:`node_5_follow_B_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`5FB_C`,label:`😐 引流方式还行，说说合作模式吧`,type:`neutral`,responseNode:`node_5_follow_B_answer_C`}]},node_5_follow_B_answer_A:{speaker:`小捷`,emotion:`normal`,text:`王总，我给您具体说说——

第一，捷停车App精准推送。
周边1公里内的车主，
打开App就能看到您的空闲车位，
还有首小时半价优惠券。

第二，高德/百度地图接入。
车主导航到附近时，
您的车场会显示"有空位"，
直接导流。

第三，企业团购。
我们帮您对接周边写字楼、医院，
批量签月卡，一次卖出10个、20个。

这三种方式同时启动，
保证您的车位不空置。`,nextNode:`node_6`},node_5_follow_B_answer_B:{speaker:`小捷`,emotion:`normal`,text:`王总，定价是天启AI的强项。

它会分析周边5公里内所有停车场的定价，
结合您的车位位置、时段需求，
自动算出最优价格。

一般来说，
白天错峰月卡定200-250元/月，
时租定3-5元/小时，
既比周边商场便宜，
又保证您的收益最大化。

而且价格是动态调整的，
节假日、周末自动上浮，
淡季自动促销——
比您人工定价科学多了。`,nextNode:`node_6`},node_5_follow_B_answer_C:{speaker:`小捷`,emotion:`normal`,text:`好嘞王总！
接下来给您介绍三种合作模式，
您看哪种最合适。`,nextNode:`node_6`},node_5_answer_C:{speaker:`小捷`,emotion:`normal`,text:`好嘞王总！
我们有三种合作模式，
从零投入到保底分成，
您随便选。`,nextNode:`node_6`},node_6:{speaker:`小捷`,emotion:`normal`,text:`王总，三种合作模式，您看哪种合适：

🎁 车位置换——
您不花一分钱，我们出设备出平台，
您拿闲置车位给我们运营，
0投入升级。

🤝 保底分成——
我们承诺保底，
原来赚多少现在只多不少，
多赚的我们分一点。
上海陆家嘴写字楼就是这个模式，
一年多赚320万，物业分了100万。

💰 先试后买——
先拿3个车位做一个月，
效果好再全改。
试错成本为零！`,choices:[{id:`6A`,label:`😨 钱会不会进你们账户？我怕不安全！`,type:`objection`,responseNode:`node_6_answer_A`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`6B`,label:`🤨 试了效果不好，我能改回来吗？`,type:`objection`,responseNode:`node_6_answer_B`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`6C`,label:`😠 空口无凭，能写进合同吗？`,type:`objection`,responseNode:`node_6_answer_C`,effect:{type:`incrementCounter`,key:`objectionCount`}},{id:`6D`,label:`😐 行，那我试试！`,type:`accept`,responseNode:`node_6_answer_D`}]},node_6_answer_A:{speaker:`小捷`,emotion:`normal`,text:`王总放心，
钱直接进您的账户，秒到账，
我们碰都碰不到！

停车费、月卡费，
全部进您自己的微信/支付宝商户号，
我们只做管理推广。

SOHO中国、重庆公租房要是钱不安全，
能跟我们合作吗？`,nextNode:`ending`},node_6_answer_B:{speaker:`小捷`,emotion:`normal`,text:`完全可以！
我们建议您先试。

拿3个车位试1个月，
您自己看效果。

不好我们随时撤，
设备拉走，车场恢复原样，
您一点损失都没有。`,nextNode:`ending`},node_6_answer_C:{speaker:`小捷`,emotion:`normal`,text:`当然写进合同！
保底金额、分成比例、退出机制、数据安全，
全部白纸黑字。

我们是A股上市公司，代码002609，
合同都是标准模板，
您请律师审都行。`,nextNode:`ending`},node_6_answer_D:{speaker:`小捷`,emotion:`confident`,text:`太好了王总！
您不会后悔的！

先从3个车位试起，
一个月看效果。

您准备好车位信息，
我安排技术对接，
最快下周就能上线！`,nextNode:`ending`},ending:{type:`ending`}},state:{objectionCount:0,currentNode:`cover`,negotiationLog:[]}},S=class{constructor(e){this.data=e,this.state={...e.state,negotiationLog:[]},this.currentNodeId=`cover`,this.history=[]}getCurrentNode(){return this.data.nodes[this.currentNodeId]}selectChoice(e){let t=this.getCurrentNode();if(!t||!t.choices)return null;let n=t.choices.find(t=>t.id===e);return n?(n.effect&&this.applyEffect(n.effect),this.logChoice(e,n.type,n.label),this.currentNodeId=n.responseNode,this.getCurrentNode()):null}advance(){let e=this.getCurrentNode();return e.nextNode?(this.currentNodeId=e.nextNode,this.getCurrentNode()):null}reset(){this.state={...this.data.state,negotiationLog:[]},this.currentNodeId=`cover`,this.history=[]}applyEffect(e){e.type===`incrementCounter`&&(this.state[e.key]=(this.state[e.key]||0)+1)}logChoice(e,t,n){this.state.negotiationLog.push({nodeId:this.currentNodeId,choiceId:e,choiceType:t,choiceLabel:n,timestamp:Date.now()}),this.history.push(e)}},C={class:`cover-screen`},w={class:`cover-content`},T={class:`cover-title`},E={class:`cover-subtitle`},D={class:`cover-intro`},O={class:`intro-text`},k=b({__name:`CoverScreen`,props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},intro:{type:String,required:!0}},emits:[`start`],setup(t){return(n,r)=>(a(),h(`div`,C,[r[1]||=m(`div`,{class:`particle-grid`},[m(`div`,{class:`grid-layer`}),m(`div`,{class:`grid-layer grid-layer-2`})],-1),m(`div`,w,[m(`h1`,T,e(t.title),1),m(`p`,E,e(t.subtitle),1),m(`div`,D,[m(`p`,O,e(t.intro),1)]),m(`button`,{class:`start-btn`,onClick:r[0]||=e=>n.$emit(`start`)},` 开始谈判 `)])]))}},[[`__scopeId`,`data-v-af54c00c`]]),A={class:`dialogue-box`},j={key:0,class:`speaker-name`},M={class:`dialogue-text`},N={class:`text-content`},P={key:0,class:`typing-cursor`},te=b({__name:`DialogueBox`,props:{speaker:{type:String,default:``},text:{type:String,default:``},emotion:{type:String,default:`normal`},isTyping:{type:Boolean,default:!1}},emits:[`typingComplete`],setup(t){return(n,r)=>(a(),h(`div`,A,[t.speaker?(a(),h(`div`,j,e(t.speaker),1)):u(``,!0),m(`div`,M,[m(`p`,N,e(t.text),1),t.isTyping?(a(),h(`span`,P,`|`)):u(``,!0)])]))}},[[`__scopeId`,`data-v-9ab41300`]]),F={key:0,class:`choice-panel`},I=[`onClick`],L=b({__name:`ChoicePanel`,props:{choices:{type:Array,default:()=>[]},activeChoiceId:{type:String,default:null}},emits:[`select`],setup(t,{emit:r}){let i=r;function o(e){i(`select`,e.id,e.type)}return(r,i)=>t.choices.length>0?(a(),h(`div`,F,[(a(!0),h(l,null,g(t.choices,(r,i)=>(a(),h(`button`,{key:r.id,class:n([`choice-btn`,{"choice-objection":r.type===`objection`,"choice-accept":r.type===`accept`,"choice-neutral":r.type===`neutral`,"choice-active":t.activeChoiceId===r.id}]),style:v({animationDelay:`${i*.1}s`}),onClick:y(e=>o(r),[`stop`])},e(r.label),15,I))),128))])):u(``,!0)}},[[`__scopeId`,`data-v-1ffff14f`]]),R={class:`character-sprite`},z={class:`character-body`},B={class:`head`},V=b({__name:`CharacterSprite`,props:{emotion:{type:String,default:`normal`}},setup(t){let r=t,i={normal:`😐`,questioned:`🤔`,confident:`😏`,closed:`😄`},s=_(i[r.emotion]||`😐`),c=_(!1);return o(()=>r.emotion,e=>{c.value=!0,setTimeout(()=>{s.value=i[e]||`😐`,c.value=!1},150)}),(t,r)=>(a(),h(`div`,R,[m(`div`,z,[m(`div`,B,[m(`div`,{class:n([`face-emoji`,{"face-transitioning":c.value}])},e(s.value),3)]),r[0]||=m(`div`,{class:`body-suit`},[m(`div`,{class:`lapel-left`}),m(`div`,{class:`lapel-right`}),m(`div`,{class:`tie`})],-1)])]))}},[[`__scopeId`,`data-v-9203d2f0`]]),H={class:`ending-screen`},U={class:`ending-content`},W={class:`ending-emoji`},G={class:`ending-title`},K={class:`ending-desc`},q={class:`stats-bar`},J={class:`stat-item`},Y={class:`stat-value`},X={class:`stat-item`},Z={class:`stat-value`},ne={key:0,class:`negotiation-log`},re={class:`log-list`},ie={class:`log-node`},ae={class:`log-type`},oe={class:`log-label`},se={class:`ending-actions`},Q=b({__name:`EndingScreen`,props:{objectionCount:{type:Number,default:0},negotiationLog:{type:Array,default:()=>[]}},emits:[`restart`,`goHome`],setup(t){let r=t,i=f(()=>{let e=r.objectionCount,t=r.negotiationLog.every(e=>e.choiceType===`neutral`||e.choiceType===`accept`);return e===0&&t?{title:`天选客户`,desc:`全程零异议，你是最容易沟通的老板！小捷都不用费力说服你。`,emoji:`🌟`,level:`relevance`}:e>=4?{title:`最难搞的老板`,desc:`异议最多，但小捷全程不卑不亢，用数据和案例一一回应——这正是捷顺销售的日常。`,emoji:`🔥`,level:`hardest`}:{title:`理性决策者`,desc:`你有质疑也有倾听，是一个理性又务实的老板。小捷用专业打动了你。`,emoji:`💼`,level:`normal`}}),o={node_1:`开场白`,node_2:`痛点确认`,node_3:`方案介绍`,node_3_follow_B:`方案追问`,node_4:`数据算账`,node_4_follow_A:`数据追问`,node_5:`案例展示`,node_5_follow_B:`案例追问`,node_6:`合作模式`};function s(e){return o[e]||e}function c(e){return{objection:`异议`,neutral:`中立`,accept:`接受`}[e]||e}return(r,o)=>(a(),h(`div`,H,[m(`div`,U,[m(`div`,W,e(i.value.emoji),1),m(`h1`,G,e(i.value.title),1),m(`p`,K,e(i.value.desc),1),m(`div`,q,[m(`div`,J,[m(`span`,Y,e(t.objectionCount),1),o[2]||=m(`span`,{class:`stat-label`},`异议次数`,-1)]),m(`div`,X,[m(`span`,Z,e(t.negotiationLog.length),1),o[3]||=m(`span`,{class:`stat-label`},`互动次数`,-1)])]),t.negotiationLog.length>0?(a(),h(`div`,ne,[o[4]||=m(`h3`,{class:`log-title`},`谈判轨迹`,-1),m(`ul`,re,[(a(!0),h(l,null,g(t.negotiationLog,(t,r)=>(a(),h(`li`,{key:r,class:n([`log-item`,`log-${t.choiceType}`])},[m(`span`,ie,e(s(t.nodeId)),1),m(`span`,ae,e(c(t.choiceType)),1),m(`span`,oe,e(t.choiceLabel),1)],2))),128))])])):u(``,!0),o[5]||=m(`div`,{class:`ending-summary`},[m(`p`,null,` 不管你提了多少异议，小捷都一一回应了——这就是捷顺云托管 + 车位代运营的底气。 数据有出处，案例可查证，合作模式灵活，先试后买零风险。 `)],-1),m(`div`,se,[m(`button`,{class:`btn-restart`,onClick:o[0]||=e=>r.$emit(`restart`)},`再来一次`),m(`button`,{class:`btn-home`,onClick:o[1]||=e=>r.$emit(`goHome`)},`返回首页`)])])]))}},[[`__scopeId`,`data-v-debd3d6b`]]),ce={class:`dialogue-ui`},$=1500,le=b({__name:`GameView`,setup(e){let o=p(),l=new S(x),g=_(`cover`),v=_(``),y=_(!1),b=_(!1),C=_(null),w=_(null),T=_(null),E=_(`cover`),D=t({objectionCount:0,negotiationLog:[],currentNodeId:`cover`});function O(){E.value=l.currentNodeId}let A=f(()=>(E.value,l.data.nodes[E.value])),j=f(()=>{if(T.value)return T.value;let e=A.value;return!e||!e.emotion?`normal`:e.emotion}),M=f(()=>{let e=A.value;return!e||!e.speaker?``:e.speaker}),N=f(()=>{let e=A.value;return!e||!e.choices?[]:e.choices}),P=null;function F(){D.objectionCount=l.state.objectionCount,D.negotiationLog=[...l.state.negotiationLog],D.currentNodeId=l.currentNodeId,O()}function I(e,t){let n={"。":400,"，":250,"！":400,"？":400,"；":300,"：":200,"…":350,"\n":300,"、":150};return n[e]?45+n[e]:/[a-zA-Z0-9]/.test(e)?35:45}function R(e,t){y.value=!0,v.value=``,w.value=t;let n=0;function r(){if(y.value)if(n<e.length){let t=e[n],i=e[n+1]||``;v.value+=t,n++;let a=I(t,i);P=setTimeout(r,a)}else P=setTimeout(()=>{y.value=!1;let e=w.value;w.value=null,e&&e()},$)}clearTimeout(P),r()}function z(){if(!y.value)return;clearTimeout(P),P=null;let e=A.value;e&&e.text&&(v.value=e.text),y.value=!1,w.value=null}function B(){g.value=`dialogue`,l.currentNodeId=`node_1`,F();let e=A.value;e&&e.text&&R(e.text)}function H(e,t){if(y.value){z();return}t===`objection`&&(b.value=!0,C.value=e,setTimeout(()=>{b.value=!1,C.value=null},300)),T.value={objection:`questioned`,neutral:`normal`,acceptance:`confident`}[t]||`normal`;let n=l.selectChoice(e);if(F(),n){if(n.type===`ending`){g.value=`ending`;return}setTimeout(()=>{T.value=null,R(n.text||``)},$)}}function U(){let e=l.advance();if(e){if(F(),e.type===`ending`){g.value=`ending`;return}e.text&&R(e.text)}}function W(){l.reset(),F(),g.value=`cover`,v.value=``,y.value=!1,b.value=!1,C.value=null}function G(){if(y.value){z();return}let e=A.value;if(e&&!e.choices&&e.nextNode){U();return}e&&e.choices&&e.choices.length>0&&y.value}return c(()=>{clearTimeout(P)}),(e,t)=>(a(),h(`div`,{class:n([`game-page`,{shake:b.value}])},[g.value===`cover`?(a(),s(k,{key:0,title:i(x).nodes.cover.title,subtitle:i(x).nodes.cover.subtitle,intro:i(x).nodes.cover.intro,onStart:B},null,8,[`title`,`subtitle`,`intro`])):g.value===`dialogue`?(a(),h(`div`,{key:1,class:`dialogue-scene`,onClick:G},[d(V,{emotion:j.value},null,8,[`emotion`]),m(`div`,ce,[d(te,{speaker:M.value,text:v.value,emotion:j.value,"is-typing":y.value,onTypingComplete:()=>{}},null,8,[`speaker`,`text`,`emotion`,`is-typing`]),r(d(L,{choices:N.value,"active-choice-id":C.value,onSelect:H},null,8,[`choices`,`active-choice-id`]),[[ee,!y.value&&N.value.length>0]])])])):g.value===`ending`?(a(),s(Q,{key:2,"objection-count":D.objectionCount,"negotiation-log":D.negotiationLog,onRestart:W,onGoHome:t[0]||=()=>i(o).push(`/`)},null,8,[`objection-count`,`negotiation-log`])):u(``,!0)],2))}},[[`__scopeId`,`data-v-93689c83`]]);export{le as default};
const gameData = {
  npc_profile: {
    name: '小捷',
    layers: {
      layer0_hard_rules: [
        '绝不对客户表现出不耐烦',
        '绝不用"您说得对但是"否定式承接',
        '所有数据必须有出处（案例/报告/官网可查）'
      ],
      layer1_identity: '捷顺科技To B销售，从业5年，服务200+车场，MBTI: ESFJ',
      layer2_expression: {
        style: '口语化，像聊天不像背稿',
        catchphrases: ['您放心', '哈哈哈您真幽默', '理解理解'],
        response_structure: '承接质疑 → 举证(数据+案例) → 收尾推进(三段式)',
        banned: ['专业术语不解释', '居高临下语气']
      },
      layer3_power: {
        vs_objection: '不卑不亢，用数据回应',
        vs_acceptance: '乘胜追击，用案例巩固',
        vs_hesitation: '主动降低门槛'
      },
      layer4_emotion: {
        stability: 7,
        expressions: {
          normal: '😐',
          questioned: '🤔',
          confident: '😏',
          closed: '😄'
        }
      }
    }
  },

  nodes: {
    cover: {
      type: 'cover',
      title: '🚗 车场老板的谈判挑战',
      subtitle: '今天，有个销售上门给你推方案...',
      intro: '你是小区车场老板老王，\n每月利润3万块，\n全国车位缺口超8000万，\n可你的泊位利用率才40%。\n\n招人难、漏费多、\n白天60个车位空着浪费。\n\n捷顺的销售小捷上门了，\n张嘴就说能帮你一年多赚54万...\n\n你可以随时打断他，\n抛出你最刁钻的问题！'
    },

    node_1: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总您好！我是捷顺的小捷。\n今天过来，就想跟您算一笔账——\n怎么把您这车场，从每月赚3万，变成每月7万5。\n\n一年多赚54万，不是空话。\n全国车位缺口超8000万，可存量泊位利用率才40%。\n您这小区，白天60个车位空着，\n晚上业主回来又一位难求——\n这差距，就是钱啊。',
      choices: [
        {
          id: '1A',
          label: '🤨 吹什么牛？我一年才赚30多万，你一张嘴就多赚54万？',
          type: 'objection',
          responseNode: 'node_1_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '1B',
          label: '😨 上来就说多赚54万，你这销售靠谱吗？',
          type: 'objection',
          responseNode: 'node_1_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '1C',
          label: '😐 行，你先说说看',
          type: 'neutral',
          responseNode: 'node_1_answer_C'
        }
      ]
    },

    node_1_answer_A: {
      speaker: '小捷',
      emotion: 'questioned',
      text: '王总，真不是吹牛！\n我帮您捋捋这笔账——\n\n您这4个车道，配了4个收费员吧？\n一人月薪5000，一个月工资就2万。\n人工收费，跟车的、倒车的、说下次给的，\n一个月少说漏5000。\n\n还有，白天业主上班，60个车位空着，\n周边上班族找不到地儿停，您也不知道人在哪。\n\n这三块一解决，\n一个月直接多赚4万5，一年54万，账就是这么算的！',
      nextNode: 'node_2'
    },

    node_1_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '哈哈哈王总，您这警惕性，不愧是做生意的！\n\n给您看看，捷顺A股上市十多年，代码002609，随时可查。全国5.5万多个智慧车场在用我们，1.5亿注册车主。\n\nSOHO中国上海六大地标、贵阳花果园亚洲最大社区，都是我们的客户。\n骗子可做不了这么大的生意，您说对吧？',
      nextNode: 'node_2'
    },

    node_1_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '好嘞王总！\n您这车场现在有三处漏钱，\n我一个一个帮您盘。\n\n您先听着，哪儿不对随时打断我！',
      nextNode: 'node_2'
    },

    node_2: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，您这4个车道，4个收费员，\n一个月工资2万，对吧？\n现在招人多难啊，年轻人谁愿意熬夜看杆子？\n您是不是也头疼？\n\n再说漏费——跟车逃费、倒车逃费、收费员疏忽，\n全国车场平均逃费率超10%，\n您一个月少说损失大几千。\n我们的AI堵漏系统，追缴率91%。\n\n最可惜的是，白天一半车位空着，\n周边上班的还找不到地儿。\n全国泊位利用率才40%，\n这就是信息错配——车主找不到空位，空位找不到车主。\n\n我们今天，一次性把这三个问题全解决。',
      choices: [
        {
          id: '2A',
          label: '🤨 你怎么知道我有4个收费员？调查我？',
          type: 'objection',
          responseNode: 'node_2_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '2B',
          label: '😠 漏费？我的收费员跟了我5年，老实得很！',
          type: 'objection',
          responseNode: 'node_2_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '2C',
          label: '😐 嗯，你说的还真有点对...',
          type: 'neutral',
          responseNode: 'node_2_answer_C'
        }
      ]
    },

    node_2_answer_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，这哪是调查啊！\n您这种4个车道的小区车场，\n行业标配就是4个收费员两班倒，\n不然谁顶得住？\n\n全国做了5.5万多个车场，您这情况太普遍了。\n贵阳花果园当年273条车道，配了500个收费员，\n后来全换成云托管了。\n见得多了，一眼就知道。',
      nextNode: 'node_3'
    },

    node_2_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，我相信您的收费员人老实！\n但人总有疏忽的时候——\n晚上犯困，车主冲杆了没拦住；\n或者说没带钱下次给，转头就忘了。\n\n我们的雷视融合防逃费系统，\n激光雷达加视觉融合，\n拖车进出场、跟车、假车牌，全能识别。\nAI堵漏自动追缴，追缴率91%。\n\n原来一个月漏5000，现在基本都能追回来。\n不比您自己盯着强？',
      nextNode: 'node_3'
    },

    node_2_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '哈哈，被我说中了吧！\n这三个痛点，全国5.5万多个车场基本都一样。\n\n接下来给您看看我们的方案，\n怎么一个一个解决。',
      nextNode: 'node_3'
    },

    node_3: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，我们给您的是「云托管 + 车位代运营」整体方案。\n先帮您砍成本，再帮您把闲置资源变钱。\n\n第一件，云托管。\n收费管理搬云端，不用雇收费员。\n365天云端坐席，车主有问题扫码呼叫，\n平均响应10秒。\n原来4个收费员，现在留1个维护秩序，\n一个月省1.5万工资。\n\n第二件，AI堵漏+无人值守。\n雷视融合防逃费，激光雷达加视觉融合，\n拖车、跟车、假车牌，精准识别。\nAI巡检机器人24小时自动巡检。\n全国车场平均逃费率超10%，我们追缴率91%。\n\n第三件，天启AI运营助手。\n300万级数据训练的行业大模型，\n12个智能体，60多个AI工具——\n智能定价、潮汐调度、用户画像，全部自动化。\n就像给车场配了个运营专家。\n\n白天空的60个车位，\n我们包装成错峰月卡，放捷停车平台——\n1.5亿注册车主，周边上班族一搜就能找到。',
      choices: [
        {
          id: '3A',
          label: '😨 无人值守了，车主有问题找不到人怎么办？',
          type: 'objection',
          responseNode: 'node_3_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '3B',
          label: '🤨 我原来的设备不是你们的，能用吗？',
          type: 'objection',
          responseNode: 'node_3_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '3C',
          label: '😠 车位租给外人，业主回来没车位了怎么办？',
          type: 'objection',
          responseNode: 'node_3_answer_C',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '3D',
          label: '😐 听起来不错，我先看看效果',
          type: 'accept',
          responseNode: 'node_3_answer_D'
        }
      ]
    },

    node_3_answer_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总您放心！\n我们的7×24h云端坐席不是摆设。\n\n车主付不了钱、找不到车位，\n扫一下码，一秒呼叫坐席，\n平均响应10秒，比收费员反应还快。\n\n汕头物流园用了一年多，\n从来没出过车主找不到人的问题。',
      nextNode: 'node_4'
    },

    node_3_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '当然能！\n我们的系统开放的，\n全国几千个非捷顺硬件的车场都接入了，\n照样降本增收。\n\n厦门嘉禾新天地，\n原来设备就不是我们的，\n我们照样帮他做车位代运营。\n0投入升级，9个车位上线就卖光了。',
      nextNode: 'node_3_follow_B'
    },

    node_3_follow_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，接入其实很简单——\n我们在您现有道闸上加个边缘计算盒子，\n半天就能装好，不用换设备。\n\n软件层面，我们的平台开放API，\n不管是科拓、道尔还是海康的系统，\n都能无缝对接。\n\n您还有什么担心的吗？',
      choices: [
        {
          id: '3FB_A',
          label: '🤨 加盒子会不会影响现有系统稳定？',
          type: 'objection',
          responseNode: 'node_3_follow_B_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '3FB_B',
          label: '😐 那数据会不会泄露？',
          type: 'objection',
          responseNode: 'node_3_follow_B_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '3FB_C',
          label: '😐 听起来还行，继续说说别的',
          type: 'neutral',
          responseNode: 'node_3_follow_B_answer_C'
        }
      ]
    },

    node_3_follow_B_answer_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '完全不会！\n我们的边缘盒子是旁路部署，\n不影响您现有系统的任何功能。\n\n就算盒子出了问题，\n您的道闸照样能正常起落杆，\n收费员该干嘛干嘛，\n只是暂时享受不到云端功能而已。\n\n而且我们有7×24小时远程监控，\n出问题5分钟内就能响应。',
      nextNode: 'node_4'
    },

    node_3_follow_B_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，数据安全是我们的生命线。\n\n我们是等保三级认证，\n所有数据加密传输、加密存储。\n您的经营数据只属于您，\n我们签保密协议，白纸黑字。\n\nSOHO中国、重庆公租房这种大项目，\n数据安全要求比我们严格多了，\n不也合作得好好的吗？',
      nextNode: 'node_4'
    },

    node_3_follow_B_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '好嘞王总！\n接下来给您算算账，\n看看具体能省多少、赚多少。',
      nextNode: 'node_4'
    },

    node_3_answer_C: {
      speaker: '小捷',
      emotion: 'confident',
      text: '绝对不会！\n我们只租白天业主不在的时段——\n早上8点到晚上6点。\n\n晚上业主回来，车位还是业主的，\n一点不耽误。\n\n反而能帮您解决晚上的问题：\n周边上班的白天停、晚上走，\n不会跟业主抢车位。\n业主开心，晚上车位不挤了，\n您也多赚钱了——三方共赢。',
      nextNode: 'node_4'
    },

    node_3_answer_D: {
      speaker: '小捷',
      emotion: 'normal',
      text: '好嘞王总！\n给您看几个跟您情况差不多的案例——\n\n南京太阳宫，33个闲置车位首月卖光；\n厦门嘉禾新天地，0投入升级，\n9个车位上线就售罄。\n\n您看完心里就有底了。',
      nextNode: 'node_4'
    },

    node_4: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，这是最实在的账，\n按您4进4出的标准车场算：\n\n人工成本：原来20,000 → 现在5,000，省15,000\n逃费损失：原来5,000 → 现在450，挽回4,550\n车位收入：原来0 → 现在25,000，新增25,000\n\n原来月利润3万，现在直接变7万5。\n一年下来，帮您多赚54万。\n\n全国车场平均增收20%-40%，\n深圳新闻网、证券之星都报道过我们。\n汕头物流园16条车道全换方案后，收益涨了20%。\n南京太阳宫，跟您情况一样，\n33个闲置车位首月售罄，半年多赚5万。',
      choices: [
        {
          id: '4A',
          label: '🤨 你这账算得太理想了，真能做到？',
          type: 'objection',
          responseNode: 'node_4_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '4B',
          label: '😨 你们服务费是不是很贵？别我省的钱都给你们了',
          type: 'objection',
          responseNode: 'node_4_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '4C',
          label: '😐 这账还挺诱人的，看看你们的案例',
          type: 'neutral',
          responseNode: 'node_4_answer_C'
        }
      ]
    },

    node_4_answer_A: {
      speaker: '小捷',
      emotion: 'confident',
      text: '王总，这可不是理想状态，\n是几千个车场的平均数据。\n\n南京太阳宫，33个闲置车位首月100%售罄，\n半年多赚5万；\n上海陆家嘴写字楼，保底分成模式，\n一年多赚320万，物业分了100万；\nSOHO中国上海六大地标，\n3325个车位中标1.61亿，年收益提升超20%。\n\n这些在深圳新闻网、证券之星都有公开报道，\n您搜一搜就能看到。',
      nextNode: 'node_4_follow_A'
    },

    node_4_follow_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，我知道您担心这些案例跟您情况不一样。\n\n南京太阳宫是社区型车场，跟您一样；\n汕头物流园是4进4出，车道数跟您一样；\n厦门嘉禾新天地是老旧小区，车位数和您差不多。\n\n您最担心的是哪一点？',
      choices: [
        {
          id: '4FA_A',
          label: '🤨 我这小区老旧，车主不愿意用智能缴费',
          type: 'objection',
          responseNode: 'node_4_follow_A_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '4FA_B',
          label: '😨 万一投了钱，收益没你说的那么好怎么办？',
          type: 'objection',
          responseNode: 'node_4_follow_A_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '4FA_C',
          label: '😐 案例还行，再看看你们的服务',
          type: 'neutral',
          responseNode: 'node_4_follow_A_answer_C'
        }
      ]
    },

    node_4_follow_A_answer_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，这您放心！\n\n我们的系统支持现金、微信、支付宝、\nETC、月卡、临时卡——\n老年人不会用手机，照样能现金缴费。\n\n而且我们提供现场培训，\n前两周安排专人驻场指导，\n车主有问题随时有人教。\n\n贵阳花果园当年也是老人多，\n现在95%的车主都用手机缴费了，\n习惯是可以培养的。',
      nextNode: 'node_5'
    },

    node_4_follow_A_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，这个风险我们替您想到了。\n\n所以我们有"先试后买"——\n拿3个车位试1个月，\n您自己看数据、算收益。\n\n如果效果不好，\n设备我们拉走，车场恢复原样，\n您一分钱损失都没有。\n\n而且保底分成模式里，\n我们承诺"只多不少"，\n原来赚多少现在保底多少，\n多赚的才分成。\n这还有什么好担心的？',
      nextNode: 'node_5'
    },

    node_4_follow_A_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '好嘞！\n给您看看我们刚落地的几个大项目，\n都是公开可查的。',
      nextNode: 'node_5'
    },

    node_4_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，车位代运营，\n租出去一个车位收300块，\n我们只拿20%佣金，60块，\n剩下240全是您的。\n\n云托管服务费，一个车道一个月才几百块。\n您省了1.5万工资，\nAI堵漏挽回4500，\n车位增收2.5万——\n这点服务费算什么呀。\n\n而且我们先试后买，\n拿3个车位试1个月，\n您自己看效果，不好随时撤。',
      nextNode: 'node_5'
    },

    node_4_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '好嘞！\n给您看真实案例——\n南京太阳宫、上海陆家嘴、SOHO中国，\n都是公开可查的。\n\n您看完再说。',
      nextNode: 'node_5'
    },

    node_5: {
      speaker: '小捷',
      emotion: 'confident',
      text: '王总，这都是刚落地的项目，\n全部公开可查：\n\n🏙️ 南京太阳宫广场——\n0投入升级，33个闲置车位首月100%售罄，\n半年多赚5万\n\n🏙️ 上海陆家嘴写字楼——\n保底分成模式，一年多赚320万，\n物业分了100万\n\n🏙️ SOHO中国——\n上海六大地标，3325个车位中标1.61亿，\n年收益提升超20%\n\n🏙️ 重庆公租房——\n9300个车位，智慧停车管理\n\n从亚洲最大社区到地标写字楼，\n从小区到物流园，我们都做过。',
      choices: [
        {
          id: '5A',
          label: '🤨 这些案例是不是编的？我怎么知道真假？',
          type: 'objection',
          responseNode: 'node_5_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '5B',
          label: '😨 那是人家的情况，我这周边没人，车位肯定租不出去！',
          type: 'objection',
          responseNode: 'node_5_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '5C',
          label: '😐 还真有这么回事？怎么跟你们合作？',
          type: 'accept',
          responseNode: 'node_5_answer_C'
        }
      ]
    },

    node_5_answer_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，绝对不是编的！\n\n南京太阳宫的案例，\n捷停车官网可查。\nSOHO中国是上市公司中标公告，\n1.61亿公开招标，公开可查。\n\n重庆公租房、贵阳花果园，\n您搜"捷顺 云托管"看看，\n深圳新闻网、证券之星都报道过。',
      nextNode: 'node_6'
    },

    node_5_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总您放心！\n我们有1.5亿用户，\n周边车主用捷停车找车位，\n一搜就能找到您的。\n\n天启AI运营助手还会帮您精准推广，\n给周边写字楼和小区发优惠券。\n\n全国5.5万多个车场，\n从城市CBD到偏远园区，\n从来没有卖不出去的情况。\n我们的运营团队是专业的，\n比您自己做推广强多了。',
      nextNode: 'node_5_follow_B'
    },

    node_5_follow_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，我知道您担心周边没人。\n\n其实车位代运营的核心不是"等人来"，\n而是"主动找人"。\n\n我们有三种引流方式，\n您看哪种最适合您？',
      choices: [
        {
          id: '5FB_A',
          label: '🤨 具体怎么引流？别光说大话',
          type: 'objection',
          responseNode: 'node_5_follow_B_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '5FB_B',
          label: '😨 月租价格定多少合适？别比我现在的低',
          type: 'objection',
          responseNode: 'node_5_follow_B_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '5FB_C',
          label: '😐 引流方式还行，说说合作模式吧',
          type: 'neutral',
          responseNode: 'node_5_follow_B_answer_C'
        }
      ]
    },

    node_5_follow_B_answer_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，我给您具体说说——\n\n第一，捷停车App精准推送。\n周边1公里内的车主，\n打开App就能看到您的空闲车位，\n还有首小时半价优惠券。\n\n第二，高德/百度地图接入。\n车主导航到附近时，\n您的车场会显示"有空位"，\n直接导流。\n\n第三，企业团购。\n我们帮您对接周边写字楼、医院，\n批量签月卡，一次卖出10个、20个。\n\n这三种方式同时启动，\n保证您的车位不空置。',
      nextNode: 'node_6'
    },

    node_5_follow_B_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，定价是天启AI的强项。\n\n它会分析周边5公里内所有停车场的定价，\n结合您的车位位置、时段需求，\n自动算出最优价格。\n\n一般来说，\n白天错峰月卡定200-250元/月，\n时租定3-5元/小时，\n既比周边商场便宜，\n又保证您的收益最大化。\n\n而且价格是动态调整的，\n节假日、周末自动上浮，\n淡季自动促销——\n比您人工定价科学多了。',
      nextNode: 'node_6'
    },

    node_5_follow_B_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '好嘞王总！\n接下来给您介绍三种合作模式，\n您看哪种最合适。',
      nextNode: 'node_6'
    },

    node_5_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '好嘞王总！\n我们有三种合作模式，\n从零投入到保底分成，\n您随便选。',
      nextNode: 'node_6'
    },

    node_6: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总，三种合作模式，您看哪种合适：\n\n🎁 车位置换——\n您不花一分钱，我们出设备出平台，\n您拿闲置车位给我们运营，\n0投入升级。\n\n🤝 保底分成——\n我们承诺保底，\n原来赚多少现在只多不少，\n多赚的我们分一点。\n上海陆家嘴写字楼就是这个模式，\n一年多赚320万，物业分了100万。\n\n💰 先试后买——\n先拿3个车位做一个月，\n效果好再全改。\n试错成本为零！',
      choices: [
        {
          id: '6A',
          label: '😨 钱会不会进你们账户？我怕不安全！',
          type: 'objection',
          responseNode: 'node_6_answer_A',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '6B',
          label: '🤨 试了效果不好，我能改回来吗？',
          type: 'objection',
          responseNode: 'node_6_answer_B',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '6C',
          label: '😠 空口无凭，能写进合同吗？',
          type: 'objection',
          responseNode: 'node_6_answer_C',
          effect: { type: 'incrementCounter', key: 'objectionCount' }
        },
        {
          id: '6D',
          label: '😐 行，那我试试！',
          type: 'accept',
          responseNode: 'node_6_answer_D'
        }
      ]
    },

    node_6_answer_A: {
      speaker: '小捷',
      emotion: 'normal',
      text: '王总放心，\n钱直接进您的账户，秒到账，\n我们碰都碰不到！\n\n停车费、月卡费，\n全部进您自己的微信/支付宝商户号，\n我们只做管理推广。\n\nSOHO中国、重庆公租房要是钱不安全，\n能跟我们合作吗？',
      nextNode: 'ending'
    },

    node_6_answer_B: {
      speaker: '小捷',
      emotion: 'normal',
      text: '完全可以！\n我们建议您先试。\n\n拿3个车位试1个月，\n您自己看效果。\n\n不好我们随时撤，\n设备拉走，车场恢复原样，\n您一点损失都没有。',
      nextNode: 'ending'
    },

    node_6_answer_C: {
      speaker: '小捷',
      emotion: 'normal',
      text: '当然写进合同！\n保底金额、分成比例、退出机制、数据安全，\n全部白纸黑字。\n\n我们是A股上市公司，代码002609，\n合同都是标准模板，\n您请律师审都行。',
      nextNode: 'ending'
    },

    node_6_answer_D: {
      speaker: '小捷',
      emotion: 'confident',
      text: '太好了王总！\n您不会后悔的！\n\n先从3个车位试起，\n一个月看效果。\n\n您准备好车位信息，\n我安排技术对接，\n最快下周就能上线！',
      nextNode: 'ending'
    },

    ending: {
      type: 'ending'
    }
  },

  state: {
    objectionCount: 0,
    currentNode: 'cover',
    negotiationLog: []
  }
}

export default gameData

const questions = [
  {
    id: 1,
    text: "请选择最符合你的选项：",
    options: [
      { text: "富于冒险:愿意面对新事物并敢于下决心掌握的人", score: "D" },
      { text: "生动:充满活力,表情生动,多手势", score: "I" },
      { text: "适应力强:轻松自如适应任何环境", score: "S" },
      { text: "善于分析:喜欢研究各部分之间的逻辑和正确的关系", score: "C" }
    ]
  },
  {
    id: 2,
    text: "请选择最符合你的选项：",
    options: [
      { text: "善于说服：用逻辑和事实而不用威严和权利服人", score: "D" },
      { text: "喜好娱乐：开心充满乐趣与幽默感", score: "I" },
      { text: "平和：在冲突中不受干扰，保持平静", score: "S" },
      { text: "坚持不懈：要完成现有的事才能做新的事情", score: "C" }
    ]
  },
  {
    id: 3,
    text: "请选择最符合你的选项：",
    options: [
      { text: "意志坚定：决心以自己的方式做事", score: "D" },
      { text: "善于社交：认为与人相处是好玩，而不是挑战或者商业机会", score: "I" },
      { text: "顺服：易接受他人的观点和喜好，不坚持己见", score: "S" },
      { text: "自我牺牲：为他人利益愿意放弃个人意见", score: "C" }
    ]
  },
  {
    id: 4,
    text: "请选择最符合你的选项：",
    options: [
      { text: "竞争性：把一切当作竞赛，总是有强烈的赢的欲望", score: "D" },
      { text: "使人认同：因人格魅力或性格使人认同", score: "I" },
      { text: "自控性：控制自己的情感，极少流露", score: "S" },
      { text: "体贴：关心别人的感受与需要", score: "C" }
    ]
  },
  {
    id: 5,
    text: "请选择最符合你的选项：",
    options: [
      { text: "善于应变：对任何情况都能作出有效的反应", score: "D" },
      { text: "使人振作：给他人清新振奋的刺激", score: "I" },
      { text: "含蓄：自我约束情绪与热忱", score: "S" },
      { text: "尊重他人：对人诚实尊重", score: "C" }
    ]
  },
  {
    id: 6,
    text: "请选择最符合你的选项：",
    options: [
      { text: "自立：独立性强，只依靠自己的能力、判断、与才智", score: "D" },
      { text: "生机勃勃：充满生命力与兴奋", score: "I" },
      { text: "满足：容易接受任何情况与环境", score: "S" },
      { text: "敏感：对周围的人事过分关心", score: "C" }
    ]
  },
  {
    id: 7,
    text: "请选择最符合你的选项：",
    options: [
      { text: "积极：相信自己有转危为安的能力", score: "D" },
      { text: "推动者：动用性格魅力或鼓励别人参与", score: "I" },
      { text: "耐性：不因延误而懊恼，冷静且能容忍", score: "S" },
      { text: "计划者：先做详尽的计划，并严格要计划进行，不想改动", score: "C" }
    ]
  },
  {
    id: 8,
    text: "请选择最符合你的选项：",
    options: [
      { text: "肯定：自信，极少犹豫或者动摇", score: "D" },
      { text: "无拘无束：不喜欢预先计划，或者被计划牵制", score: "I" },
      { text: "羞涩：安静，不善于交谈", score: "S" },
      { text: "有时间性：生活处事依靠时间表，不喜欢计划被人干扰", score: "C" }
    ]
  },
  {
    id: 9,
    text: "请选择最符合你的选项：",
    options: [
      { text: "乐观：令他人和自己相信任何事情都会好转", score: "D" },
      { text: "坦率：毫无保留，坦率发言", score: "I" },
      { text: "迁就：改变自己以与他人协调，短时间内按他人要求行事", score: "S" },
      { text: "井井有条：有系统有条理安排事情的人", score: "C" }
    ]
  },
  {
    id: 10,
    text: "请选择最符合你的选项：",
    options: [
      { text: "强迫性：发号施令，强迫他人听从", score: "D" },
      { text: "有趣：风趣，幽默，把任何事物都能变成精彩的故事", score: "I" },
      { text: "友善：不主动交谈，不爱争论", score: "S" },
      { text: "忠诚：一贯可靠，忠心不移，有时毫无根据地奉献", score: "C" }
    ]
  },
  {
    id: 11,
    text: "请选择最符合你的选项：",
    options: [
      { text: "勇敢：敢于冒险，无所畏惧", score: "D" },
      { text: "可爱：开心，与他人相处充满乐趣", score: "I" },
      { text: "体贴：待人得体，有耐心", score: "S" },
      { text: "注意细节：观察入微，做事情有条不紊", score: "C" }
    ]
  },
  {
    id: 12,
    text: "请选择最符合你的选项：",
    options: [
      { text: "自信：确信自己个人能力与成功", score: "D" },
      { text: "令人开心：充满活力，并将快乐传于他人", score: "I" },
      { text: "贯彻始终：情绪平稳，做事情坚持不懈", score: "S" },
      { text: "文化修养：对艺术学术特别爱好，如戏剧、交响乐", score: "C" }
    ]
  },
  {
    id: 13,
    text: "请选择最符合你的选项：",
    options: [
      { text: "独立：自给自足，独立自信，不需要他人帮忙", score: "D" },
      { text: "富有激励：鼓励别人参与、加入，并把每件事情变得有趣", score: "I" },
      { text: "无攻击性：不说或者做可能引起别人不满和反对的事情", score: "S" },
      { text: "理想主义：以自己完美的标准来设想衡量新事物", score: "C" }
    ]
  },
  {
    id: 14,
    text: "请选择最符合你的选项：",
    options: [
      { text: "果断：有很快做出判断与结论的能力", score: "D" },
      { text: "感情外露：从不掩饰情感.喜好,交谈时常身不由己接触他人", score: "I" },
      { text: "幽默：语气平和而有冷静的幽默", score: "S" },
      { text: "深沉：深刻并常常内省，对肤浅的交谈、消遣会厌恶", score: "C" }
    ]
  },
  {
    id: 15,
    text: "请选择最符合你的选项：",
    options: [
      { text: "发起人：高效率的推动者，是他人的领导者，闲不住", score: "D" },
      { text: "喜交朋友：喜欢周旋聚会中，善交新朋友不把任何人当陌生人", score: "I" },
      { text: "调解者：经常居中调节不同的意见，以避免双方的冲突", score: "S" },
      { text: "音乐性：爱好参与并有较深的鉴赏能力，因音乐的艺术性,而不是因为表演的乐趣", score: "C" }
    ]
  },
  {
    id: 16,
    text: "请选择最符合你的选项：",
    options: [
      { text: "执着：不达目的，誓不罢休", score: "D" },
      { text: "多言：不断的说话、讲笑话以娱乐他人，觉得应该避免沉默而带来的的尴尬", score: "I" },
      { text: "容忍：易接受别人的想法和看法，不需要反对或改变他人", score: "S" },
      { text: "考虑周到：善解人意，帮助别人，记住特别的日子", score: "C" }
    ]
  },
  {
    id: 17,
    text: "请选择最符合你的选项：",
    options: [
      { text: "领导者：天生的领导，不相信别人的能力能比上自己", score: "D" },
      { text: "活力充沛：充满活力，精力充沛", score: "I" },
      { text: "聆听者：愿意听别人倾诉", score: "S" },
      { text: "忠心：对自己的理想、朋友、工作都绝对忠实，有时甚至不需要理由", score: "C" }
    ]
  },
  {
    id: 18,
    text: "请选择最符合你的选项：",
    options: [
      { text: "首领：要求领导地位及别人跟随", score: "D" },
      { text: "惹人喜爱：人们注意的中心，令人喜欢", score: "I" },
      { text: "知足：满足自己拥有的，很少羡慕别人", score: "S" },
      { text: "制图者：用图表数字来组织生活，解决问题", score: "C" }
    ]
  },
  {
    id: 19,
    text: "请选择最符合你的选项：",
    options: [
      { text: "勤劳：不停的工作，完成任务，不愿意休息", score: "D" },
      { text: "受欢迎：聚会时的灵魂人物，受欢迎的宾客", score: "I" },
      { text: "和气：易相处，易说话，易让人接近", score: "S" },
      { text: "完美主义者：对自己、对别人都高标准、一切事物有秩序", score: "C" }
    ]
  },
  {
    id: 20,
    text: "请选择最符合你的选项：",
    options: [
      { text: "无畏：大胆前进，不怕冒险", score: "D" },
      { text: "跳跃性：充满活力和生气勃勃", score: "I" },
      { text: "平衡：稳定，走中间路线", score: "S" },
      { text: "规范性：时时坚持自己的举止合乎认同的道德规范", score: "C" }
    ]
  },
  {
    id: 21,
    text: "请选择最符合你的选项：",
    options: [
      { text: "喜命令支配，有时略显傲慢", score: "D" },
      { text: "好表现，华而不实，声音大", score: "I" },
      { text: "死气沉沉，缺乏生气", score: "S" },
      { text: "躲避别人的注意力，在众人注意下不自然", score: "C" }
    ]
  },
  {
    id: 22,
    text: "请选择最符合你的选项：",
    options: [
      { text: "不易理解别人的问题和麻烦", score: "D" },
      { text: "生活任性无秩序", score: "I" },
      { text: "不易兴奋，经常感到好事难做", score: "S" },
      { text: "不易宽恕和忘记别人对自己的伤害，易嫉妒", score: "C" }
    ]
  },
  {
    id: 23,
    text: "请选择最符合你的选项：",
    options: [
      { text: "抗拒、或者拒不接受别人的方法，固执己见", score: "D" },
      { text: "重复讲同一件事情或故事，忘记已经重复多次，总是不断找话题说话", score: "I" },
      { text: "不愿意参与，尤其是当事情复杂时", score: "S" },
      { text: "把实际或者自己想象的别人的冒犯经常放在心中", score: "C" }
    ]
  },
  {
    id: 24,
    text: "请选择最符合你的选项：",
    options: [
      { text: "直言不讳，直接表达自己的看法", score: "D" },
      { text: "缺乏自我约束，导致健忘，不愿意回忆无趣的事情", score: "I" },
      { text: "经常感到强烈的担心焦虑、悲戚", score: "S" },
      { text: "坚持琐事细节，总喜欢挑不足", score: "C" }
    ]
  },
  {
    id: 25,
    text: "请选择最符合你的选项：",
    options: [
      { text: "难以忍受等待别人", score: "D" },
      { text: "一个滔滔不绝的发言人，不是好听众，不注意别人的说话", score: "I" },
      { text: "感到担心且无自信心", score: "S" },
      { text: "很难下决定", score: "C" }
    ]
  },
  {
    id: 26,
    text: "请选择最符合你的选项：",
    options: [
      { text: "很难当众表达对弱者或者受难者的情感", score: "D" },
      { text: "时而兴奋，时而低落，或总是不兑现诺言", score: "I" },
      { text: "不愿意加入，不参与，对别人生活不感兴趣", score: "S" },
      { text: "由于强烈要求完美，而拒人千里", score: "C" }
    ]
  },
  {
    id: 27,
    text: "请选择最符合你的选项：",
    options: [
      { text: "坚持照自己的意见行事，不听不同意见", score: "D" },
      { text: "做事情没有一贯性，随意做事情", score: "I" },
      { text: "迟迟才行动，不易参与或者行动总是慢半拍", score: "S" },
      { text: "因为要求太高而使别人很难取悦", score: "C" }
    ]
  },
  {
    id: 28,
    text: "请选择最符合你的选项：",
    options: [
      { text: "自我评价高，认为自己是最好的人选", score: "D" },
      { text: "许别人做他喜欢做的事情，为的是讨好别人，令别人鼓吹自己", score: "I" },
      { text: "平实淡漠，中间路线,无高低之分，很少表露情感", score: "S" },
      { text: "尽管期待最好但往往首先看到事物不利之处", score: "C" }
    ]
  },
  {
    id: 29,
    text: "请选择最符合你的选项：",
    options: [
      { text: "易与人争吵，不管对何事都觉得自己是对的", score: "D" },
      { text: "善变，孩子性格，易激动，过后马上就忘了", score: "I" },
      { text: "不喜欢目标，也无意订目标", score: "S" },
      { text: "容易感到被疏离，经常没有安全感或担心别人不喜欢和自己相处", score: "C" }
    ]
  },
  {
    id: 30,
    text: "请选择最符合你的选项：",
    options: [
      { text: "充满自信有胆识但总是不恰当", score: "D" },
      { text: "孩子般的单纯，不理解生命的真谛", score: "I" },
      { text: "漠不关心，得过且过", score: "S" },
      { text: "往往看到事物的消极面阴暗面，而少有积极的态度", score: "C" }
    ]
  },
  {
    id: 31,
    text: "请选择最符合你的选项：",
    options: [
      { text: "为了回报或者说成就感，而不是为了完美，因而设立雄伟目标不断工作，耻于休息", score: "D" },
      { text: "需要旁人认同赞赏，像演员", score: "I" },
      { text: "时时感到不确定、焦虑、心烦", score: "S" },
      { text: "总喜欢挑人毛病，不被人喜欢", score: "C" }
    ]
  },
  {
    id: 32,
    text: "请选择最符合你的选项：",
    options: [
      { text: "经常用冒犯或考虑不周的方式表达自己", score: "D" },
      { text: "难以自控，滔滔不绝，不能倾听别人", score: "I" },
      { text: "遇到困难退缩", score: "S" },
      { text: "对事物过分反应，被人误解时感到被冒犯", score: "C" }
    ]
  },
  {
    id: 33,
    text: "请选择最符合你的选项：",
    options: [
      { text: "冲动的控制事物和别人，指挥他人", score: "D" },
      { text: "缺乏安排生活的能力", score: "I" },
      { text: "事事不确定，对所做的事情缺乏信心", score: "S" },
      { text: "常常情绪低落", score: "C" }
    ]
  },
  {
    id: 34,
    text: "请选择最符合你的选项：",
    options: [
      { text: "不能忍受他人的观点、态度和做事的方式", score: "D" },
      { text: "反复无常，互相矛盾，情绪与行动不合逻辑", score: "I" },
      { text: "对很多事情漠不关心", score: "S" },
      { text: "活在自己的世界里，思想和兴趣放在心里", score: "C" }
    ]
  },
  {
    id: 35,
    text: "请选择最符合你的选项：",
    options: [
      { text: "精明处事，操纵事情，使对自己有利", score: "D" },
      { text: "生活环境无秩序，经常找不到东西", score: "I" },
      { text: "低声说话，不在乎说不清楚", score: "S" },
      { text: "情绪不易高涨，感到不被欣赏时很容易低落", score: "C" }
    ]
  },
  {
    id: 36,
    text: "请选择最符合你的选项：",
    options: [
      { text: "决心依自己的意愿行事，不易被说服", score: "D" },
      { text: "要吸引人，需要自己成为被人注意的中心", score: "I" },
      { text: "行动思想均比较慢，过分麻烦", score: "S" },
      { text: "不易相信，对语言背后的真正的动机存在疑问", score: "C" }
    ]
  },
  {
    id: 37,
    text: "请选择最符合你的选项：",
    options: [
      { text: "毫不犹豫地表示自己的正确或控制能力", score: "D" },
      { text: "说话声和笑声总盖过他人", score: "I" },
      { text: "总是先估量事情要耗费多少精力，能不做最好", score: "S" },
      { text: "需要大量的时间独处，避开人群", score: "C" }
    ]
  },
  {
    id: 38,
    text: "请选择最符合你的选项：",
    options: [
      { text: "对行动不快或不能完成指定工作时易烦躁和发怒", score: "D" },
      { text: "无法专心致志或者集中精力", score: "I" },
      { text: "凡事起步慢，需要推动力", score: "S" },
      { text: "凡事怀疑，不相信别人", score: "C" }
    ]
  },
  {
    id: 39,
    text: "请选择最符合你的选项：",
    options: [
      { text: "因没有耐心，不经思考，草率行动", score: "D" },
      { text: "喜新厌旧，不喜欢长时间做相同的事情", score: "I" },
      { text: "不愿意参与或者说投入", score: "S" },
      { text: "记恨并惩罚冒犯自己的人", score: "C" }
    ]
  },
  {
    id: 40,
    text: "请选择最符合你的选项：",
    options: [
      { text: "精明，总是有办法达到目的", score: "D" },
      { text: "像孩子般注意力短暂，需要各种变化，怕无聊", score: "I" },
      { text: "为避免矛盾即使自己是对的也不惜放弃自己的立场", score: "S" },
      { text: "不断地衡量和下判断，经常考虑提出反对意见", score: "C" }
    ]
  }
];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questions);

questions.forEach(question => {
  shuffleArray(question.options);
});
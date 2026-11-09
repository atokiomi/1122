const range = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

export const categories = [
  { id: 'all', label: '全部作品', en: 'ALL WORKS' },
  { id: 'brand', label: '品牌设计', en: 'BRAND DESIGN' },
  { id: 'toy', label: '潮玩物料', en: 'ART TOY DESIGN' },
  { id: 'commerce', label: '电商设计', en: 'E-COMMERCE' },
];

export const projects = [
  {
    id: 'smart-gold', title: '智慧金店', subtitle: '让黄金服务，走进新的日常。',
    category: 'brand', english: 'SMART GOLD STORE', cover: 'smart-gold',
    tags: ['品牌识别', '空间视觉', 'IP 形象'], pages: range(4, 16), color: '#d3b67b',
    description: '品牌依托金雅福全产业链实力，以数字化解决黄金流通中的信任难题。设计以可信为根基，融合轻奢质感与极简科技，打造透明、可溯的新一代黄金自助服务空间。',
    scope: '标志设计 / 视觉识别 / 品牌空间 / 品牌 IP / 营销海报 / 包装礼盒',
  },
  {
    id: 'photon', title: 'PHOTON X', subtitle: 'BOX 大脑，无限可能。',
    category: 'toy', english: 'PHOTON X', cover: 'photon',
    tags: ['潮玩 IP', '视觉延展', '周边物料'], pages: range(37, 41), color: '#fb7609',
    description: '围绕 PHOTON X 的方盒形象展开潮玩视觉与物料设计。以高识别度的橙色、黑色和模块化图形语言，将角色个性延展到海报、挂件和系列周边。',
    scope: 'IP 视觉 / 形象延展 / 海报设计 / 挂件与周边物料',
  },
  {
    id: 'kinghood', title: 'KINGHOOD', subtitle: '黄金珠宝的新零售表达。',
    category: 'brand', english: 'KINGHOOD JEWELRY', cover: 'kinghood',
    tags: ['品牌系统', '珠宝零售', '营销视觉'], pages: range(17, 25), color: '#e65c20',
    description: '黄金珠宝新零售品牌设计项目。以鲜明的暖橙色建立品牌印象，围绕视觉识别、零售空间、品牌物料与系列海报，构建统一的品牌视觉表达。',
    scope: '视觉识别 / 品牌物料 / 包装设计 / 零售空间 / 品牌海报',
  },
  {
    id: 'hui', title: '悦汇城 · HUI', subtitle: '把快乐，装进城市生活。',
    category: 'toy', english: 'HUI · CITY OF JOY', cover: 'hui',
    tags: ['商业 IP', '礼盒设计', '场景应用'], pages: range(42, 49), color: '#f0bf3b',
    description: '以丰富的角色、明快的色彩和充满活力的图形构建悦汇城的视觉表达。从主题画面到礼盒、卡片及线下场景，呈现贯穿商业空间与生活方式的 IP 视觉系统。',
    scope: 'IP 视觉 / 主题海报 / 礼盒与周边 / 商业空间应用',
  },
  {
    id: 'lancuili', title: '岚萃里 LANCUILI', subtitle: '一杯茶里的自然与东方。',
    category: 'brand', english: 'LANCUILI', cover: 'lancuili',
    tags: ['品牌识别', '茶饮视觉', '空间物料'], pages: range(26, 32), color: '#16676c',
    description: '以东方茶饮文化为线索，运用青绿色、山形图案与简洁标志构建品牌识别。将视觉语言应用到杯型、包装、服饰和门店空间，形成统一的品牌触点。',
    scope: '标志与识别系统 / 包装设计 / 门店空间 / 品牌物料',
  },
  {
    id: 'powsurge', title: 'POWSURGE', subtitle: '让户外能量，自由发生。',
    category: 'commerce', english: 'SURGE POWER, UNBOUND FREEDOM', cover: 'powsurge',
    tags: ['电商视觉', '户外能源', '产品叙事'], pages: [55, 56], color: '#464b36',
    description: '围绕户外电源产品，将自然场景、产品质感与功能信息结合，建立具有生活方式感的电商视觉。从主视觉到长页内容，展开产品的使用情境与细节。',
    scope: '产品主视觉 / 场景表达 / 电商详情页',
  },
  {
    id: 'sofea', title: '霞飞 Sofea', subtitle: '经典品牌的焕新时刻。',
    category: 'brand', english: 'SOFEA BRAND REFRESH', cover: 'sofea',
    tags: ['品牌升级', '超级符号', '包装物料'], pages: range(33, 35), color: '#f6a960',
    description: '围绕霞飞 Sofea 的品牌升级，以更轻盈的视觉语言重塑品牌表达。提取品牌超级符号，并延展到包装和系列物料，让品牌在新的场景中保持一致的识别度。',
    scope: '品牌升级 / 超级符号 / 包装与品牌物料',
  },
  {
    id: 'frisbee', title: '飞盘城市行动', subtitle: '和有趣的人，一起玩起来。',
    category: 'toy', english: 'FRISBEE CITY ACTION', cover: 'frisbee',
    tags: ['活动视觉', '潮流图形', '周边设计'], pages: range(50, 53), color: '#36e526',
    description: '以飞盘运动与城市社交为主题，结合荧光绿、紫色、粉色和趣味角色图形，为活动海报、票券及周边物料建立鲜明的视觉风格。',
    scope: '活动视觉 / 系列海报 / 票券设计 / 周边物料',
  },
  {
    id: '1stplayer', title: '1STPLAYER', subtitle: 'POWER YOUR PLAY.',
    category: 'commerce', english: '1STPLAYER · POWER YOUR PLAY', cover: '1stplayer',
    tags: ['数码产品', '电商视觉', '品牌页面'], pages: [57, 58], color: '#bfb0a1',
    description: '围绕数码产品的材质、光影和使用场景展开视觉设计。以深色基调和清晰的信息组织呈现产品细节，形成从品牌主视觉到电商页面的完整表达。',
    scope: '产品主视觉 / 品牌页面 / 电商内容设计',
  },
  {
    id: 'qban', title: 'QBAN POWER BANK', subtitle: '小体积，也有强大能量。',
    category: 'commerce', english: 'QBAN · POWER BANK', cover: 'qban',
    tags: ['产品视觉', '数码科技', '详情页设计'], pages: [59, 60], color: '#667a91',
    description: '以岩石、光影和深色背景衬托充电宝的科技质感，结合场景化图像与产品细节，构建贯穿主视觉和长页内容的电商视觉体系。',
    scope: '产品主视觉 / 场景设计 / 电商详情页',
  },
  {
    id: 'amazon-howmaison', title: 'HOWMAISON', subtitle: '把产品价值，讲得更清楚。',
    category: 'commerce', english: 'AMAZON · HOWMAISON', cover: 'amazon-howmaison',
    tags: ['Amazon', '产品场景', '电商图组'], pages: [61], color: '#a5bab2',
    description: '面向 Amazon 产品展示场景，通过产品主图、生活场景与功能细节的组合，呈现产品的外观、使用体验及关键信息。',
    scope: 'Amazon 产品图组 / 场景视觉 / 信息排版',
  },
  {
    id: 'amazon-toyonar', title: 'TOYONAR', subtitle: '让玩趣，自有吸引力。',
    category: 'commerce', english: 'AMAZON · TOYONAR', cover: 'amazon-toyonar',
    tags: ['Amazon', '玩具产品', '场景视觉'], pages: [62], color: '#b2cf61',
    description: '围绕遥控玩具产品，以户外场景和动态构图呈现产品特征。结合细节展示、功能说明与配件信息，完成 Amazon 电商图组的视觉表达。',
    scope: 'Amazon 产品图组 / 场景视觉 / 功能信息设计',
  },
];

export const expertise = [
  { number: '01', title: '品牌，从识别到体验', en: 'BRAND DESIGN', description: '以品牌策略为起点，让标志、包装、空间与营销物料讲同一种语言。', skills: '视觉识别 · 品牌升级 · 包装与空间' },
  { number: '02', title: '让 IP 走进生活', en: 'ART TOY & IP', description: '将角色个性转译为鲜明的视觉表达，让创意在周边与真实场景中延续。', skills: 'IP 形象 · 潮玩物料 · 创意周边' },
  { number: '03', title: '有质感，也有转化力', en: 'E-COMMERCE DESIGN', description: '连接产品、场景与用户需求，在视觉质感与商业目标之间找到平衡。', skills: '产品视觉 · 营销 Campaign · 详情页' },
  { number: '04', title: '让 AI 成为创意搭档', en: 'AIGC WORKFLOW', description: '将 AI 融入风格探索、素材生成与方案验证，建立高效且一致的创意工作流。', skills: '视觉探索 · 资产标准化 · 团队提效' },
];

export const pageSrc = (page) => `/assets/pages/${String(page).padStart(2, '0')}.webp`;
export const coverSrc = (project) => `/assets/covers/${project.cover}.webp`;
export const pdfUrl = '/assets/linwei-portfolio-2026.pdf';

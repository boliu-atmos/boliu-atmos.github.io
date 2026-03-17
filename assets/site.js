const config = window.ACADEMIC_SITE_CONFIG ?? {};
const STORAGE_KEY = "academic-homepage-locale";

const translations = {
  en: {
    pageTitle: "Bo Liu | Academic Homepage",
    metaDescription:
      "Academic homepage for Bo Liu, focusing on hydroclimate extremes, moisture transport, and climate model biases.",
    toggleLabel: "中文",
    toggleAriaLabel: "Switch to Chinese",
    commentsDisabledHTML:
      "Comments are disabled for now. To enable the guestbook, open <code>assets/site.config.js</code>, fill in the giscus repository and category IDs, then set <code>enabled</code> to <code>true</code>.",
    commentsEnabled:
      "Comments are enabled through GitHub Discussions. A GitHub login is required to post.",
    text: {
      "nav-about": "About",
      "nav-research": "Research",
      "nav-publications": "Publications",
      "nav-teaching": "Teaching",
      "nav-guestbook": "Guestbook",
      "hero-eyebrow": "School of Atmospheric Sciences · Chengdu University of Information Technology",
      "hero-lead":
        "I study hydroclimate extremes across East Asia through observations, numerical experiments, and climate-model evaluation, with a particular interest in extreme precipitation, moisture transport, humid heat, and the physical origins of model bias.",
      "btn-profile": "Faculty Profile",
      "btn-guestbook": "Leave a Message",
      "topic-1": "Extreme precipitation",
      "topic-2": "Humid heat & compound extremes",
      "topic-3": "Atmospheric rivers & moisture pathways",
      "topic-4": "CMIP5/CMIP6 model biases",
      "metric-role-label": "Current role",
      "metric-role-note": "CUIT since Oct 2024",
      "metric-pi-label": "PI projects",
      "metric-pi-note": "NSFC grants led in the past 5 years",
      "metric-advising-label": "Advising",
      "metric-advising-note": "Current graduate students + alumni",
      "metric-paper-label": "Selected papers",
      "metric-paper-note": "Latest GRL papers on CMIP6 precipitation bias",
      "contact-email-label": "Email",
      "contact-location-label": "Location",
      "contact-location-value": "Chengdu, China",
      "about-kicker": "About",
      "about-heading": "Research framed by atmosphere, water, and climate dynamics.",
      "about-p1":
        "Bo Liu is a faculty member in the School of Atmospheric Sciences at Chengdu University of Information Technology. He received his PhD in Meteorology from the University of Chinese Academy of Sciences in 2017, following a BS in Atmospheric Sciences from Ocean University of China in 2012.",
      "about-p2":
        "His recent work connects extreme precipitation, moisture transport, sea-surface temperature bias, atmospheric rivers, and regional circulation patterns, especially over East Asia and the monsoon domain. The broader goal is to understand where climate models go wrong, why hydroclimate extremes intensify, and how physical mechanisms can be constrained by observations and simulations together.",
      "snapshot-title": "Quick Snapshot",
      "snapshot-1": "PhD in Meteorology, University of Chinese Academy of Sciences, 2017",
      "snapshot-2": "BS in Atmospheric Sciences, Ocean University of China, 2012",
      "snapshot-3": "Associate Professor at China University of Geosciences (Wuhan), 2020 to 2024",
      "snapshot-4": "Faculty at CUIT from October 2024",
      "snapshot-5": "Research spans climate dynamics, hydroclimate extremes, and model evaluation",
      "research-kicker": "Research",
      "research-heading": "Four threads that organize the page like a good professor homepage should.",
      "research-card-1-title": "Hydroclimate extremes",
      "research-card-1-body":
        "Extreme precipitation, humid heat, and compound hot-dry or hot-humid events across China and the broader East Asian monsoon region.",
      "research-card-2-title": "Moisture transport",
      "research-card-2-body":
        "Tracking moisture sources and transport pathways during tropical-cyclone-active periods, regional extreme events, and Sichuan Basin rainfall episodes.",
      "research-card-3-title": "Climate-model bias",
      "research-card-3-body":
        "Diagnosing precipitation and sea-surface-temperature biases from CMIP5 to CMIP6, and identifying the physical circulation structures behind those errors.",
      "research-card-4-title": "Climate history and comparison",
      "research-card-4-body":
        "Using paleoclimate simulations and reconstructions as a comparative lens for present-day circulation and hydrological change.",
      "publications-kicker": "Selected Publications",
      "publications-heading": "Recent papers and representative work.",
      "pub-1-meta": "Geophysical Research Letters · co-corresponding author",
      "pub-2-meta": "Geophysical Research Letters · co-corresponding author",
      "pub-3-meta": "Geophysical Research Letters · corresponding author",
      "pub-4-meta": "Journal of Climate · co-corresponding author",
      "pub-5-meta": "Geophysical Research Letters · corresponding author",
      "pub-6-meta": "Journal of Hydrology · corresponding author",
      "pub-footer-profile": "Official faculty page",
      "teaching-kicker": "Teaching & Mentoring",
      "teaching-heading": "Training students in atmosphere, analysis, and communication.",
      "courses-title": "Courses",
      "courses-1": "Weather and synoptic analysis courses",
      "courses-2": "Climatology and advanced atmospheric topics",
      "courses-3": "Technical training in data visualization and figure design",
      "outcomes-title": "Student outcomes",
      "outcomes-1": "Current graduate advisees: 5",
      "outcomes-2": "Graduated students: 4",
      "outcomes-3":
        "Alumni have moved to Fudan, Peking University, Tsinghua, CAS, and meteorological agencies",
      "style-title": "Working style",
      "style-body":
        "The page is designed to feel open to collaboration: concise project descriptions, direct contact details, and a guestbook so students and collaborators can leave a note without hunting for another channel.",
      "updates-kicker": "Updates",
      "updates-heading": "Small signals of momentum.",
      "timeline-1": "Published two Geophysical Research Letters papers on CMIP6 extreme-precipitation bias.",
      "timeline-2":
        "Joined the School of Atmospheric Sciences, Chengdu University of Information Technology.",
      "timeline-3":
        "Began leading NSFC General Program project 42375037 on the physical and dynamical mechanisms of extreme precipitation.",
      "timeline-4":
        "Completed NSFC Young Scientists project 42005118 on CMIP6 surface-temperature bias and its sources.",
      "guestbook-kicker": "Guestbook",
      "guestbook-heading":
        "The guestbook stays at the bottom, where mature academic homepages usually place interaction.",
      "guestbook-discussions-link": "Open Discussions"
    }
  },
  zh: {
    pageTitle: "刘博 | 学术主页",
    metaDescription: "刘博学术主页，聚焦极端降水、水汽输送、湿热事件与气候模式偏差研究。",
    toggleLabel: "EN",
    toggleAriaLabel: "切换到英文",
    commentsDisabledHTML:
      "留言区暂未启用。若要开启，请打开 <code>assets/site.config.js</code>，填入 giscus 的仓库与分类 ID，然后把 <code>enabled</code> 设为 <code>true</code>。",
    commentsEnabled: "留言区已通过 GitHub Discussions 启用，访客需要登录 GitHub 才能发表评论。",
    text: {
      "nav-about": "简介",
      "nav-research": "研究",
      "nav-publications": "论文",
      "nav-teaching": "教学",
      "nav-guestbook": "留言",
      "hero-eyebrow": "成都信息工程大学大气科学学院",
      "hero-lead":
        "我的研究聚焦东亚地区水文气候极端事件，结合观测分析、数值试验与气候模式评估，重点关注极端降水、水汽输送、湿热事件及气候模式偏差的物理成因。",
      "btn-profile": "学院主页",
      "btn-guestbook": "我要留言",
      "topic-1": "极端降水",
      "topic-2": "湿热与复合极端",
      "topic-3": "大气河与水汽路径",
      "topic-4": "CMIP5/CMIP6 模式偏差",
      "metric-role-label": "当前职务",
      "metric-role-note": "2024 年 10 月起任职于成信大",
      "metric-pi-label": "主持项目",
      "metric-pi-note": "近五年主持国家自然科学基金 2 项",
      "metric-advising-label": "研究生培养",
      "metric-advising-note": "在读研究生与已毕业学生",
      "metric-paper-label": "近期论文",
      "metric-paper-note": "近年围绕 CMIP6 极端降水偏差发表 GRL 论文",
      "contact-email-label": "邮箱",
      "contact-location-label": "地点",
      "contact-location-value": "中国成都",
      "about-kicker": "简介",
      "about-heading": "以大气、水循环与气候动力过程为核心的问题意识。",
      "about-p1":
        "刘博现任成都信息工程大学大气科学学院教师。2017 年毕业于中国科学院大学气象学专业并获博士学位，2012 年毕业于中国海洋大学大气科学专业并获学士学位。",
      "about-p2":
        "近年的工作围绕极端降水、水汽输送、海表温度偏差、大气河以及区域环流型之间的联系展开，重点关注东亚及季风区。更长期的目标是解释气候模式为何会出现系统偏差、极端水文气候事件为何增强，以及如何把观测与模拟联合起来约束物理机制。",
      "snapshot-title": "快速概览",
      "snapshot-1": "2017 年，中国科学院大学，气象学博士",
      "snapshot-2": "2012 年，中国海洋大学，大气科学学士",
      "snapshot-3": "2020 至 2024 年，中国地质大学（武汉）副教授",
      "snapshot-4": "2024 年 10 月起就职于成都信息工程大学",
      "snapshot-5": "研究方向涵盖气候动力学、水文气候极端与模式评估",
      "research-kicker": "研究",
      "research-heading": "用四条主线概括当前最核心的研究问题。",
      "research-card-1-title": "水文气候极端",
      "research-card-1-body": "关注中国及东亚季风区的极端降水、湿热事件，以及热干或热湿等复合极端事件。",
      "research-card-2-title": "水汽输送",
      "research-card-2-body":
        "追踪台风活跃期、区域极端事件以及四川盆地强降水过程中的水汽来源与输送路径。",
      "research-card-3-title": "气候模式偏差",
      "research-card-3-body":
        "诊断从 CMIP5 到 CMIP6 的降水与海表温度偏差，并识别其背后的关键环流结构与物理机制。",
      "research-card-4-title": "古气候比较视角",
      "research-card-4-body":
        "利用古气候模拟与重建结果，为当代大气环流与水循环变化提供对比框架和机制参照。",
      "publications-kicker": "代表论文",
      "publications-heading": "近期论文与代表性成果。",
      "pub-1-meta": "Geophysical Research Letters · 共同通讯作者",
      "pub-2-meta": "Geophysical Research Letters · 共同通讯作者",
      "pub-3-meta": "Geophysical Research Letters · 通讯作者",
      "pub-4-meta": "Journal of Climate · 共同通讯作者",
      "pub-5-meta": "Geophysical Research Letters · 通讯作者",
      "pub-6-meta": "Journal of Hydrology · 通讯作者",
      "pub-footer-profile": "查看官方教师主页",
      "teaching-kicker": "教学与指导",
      "teaching-heading": "在课堂、论文和图表表达中训练学生的研究能力。",
      "courses-title": "课程方向",
      "courses-1": "天气学与天气分析相关课程",
      "courses-2": "气候学及高阶大气科学专题",
      "courses-3": "数据分析、可视化与图表表达训练",
      "outcomes-title": "学生培养",
      "outcomes-1": "在读研究生：5 人",
      "outcomes-2": "已毕业学生：4 人",
      "outcomes-3": "学生去向包括复旦大学、北京大学、清华大学、中科院及气象业务部门",
      "style-title": "合作方式",
      "style-body":
        "这个主页刻意保持开放与直接：项目介绍简洁、联系方式清楚，并保留留言区，方便学生和合作作者在页面内直接留下信息。",
      "updates-kicker": "近况",
      "updates-heading": "用几条时间线展示近年的研究节奏。",
      "timeline-1": "发表 2 篇围绕 CMIP6 极端降水偏差问题的 Geophysical Research Letters 论文。",
      "timeline-2": "加入成都信息工程大学大气科学学院。",
      "timeline-3": "开始主持国家自然科学基金面上项目 42375037，研究极端降水的物理与动力机制。",
      "timeline-4": "完成国家自然科学基金青年项目 42005118，聚焦 CMIP6 地表温度偏差及其来源。",
      "guestbook-kicker": "留言区",
      "guestbook-heading": "把互动放在页面底部，更接近成熟学术主页的组织方式。",
      "guestbook-discussions-link": "去 Discussions 留言"
    }
  }
};

let currentLocale = getInitialLocale();

function getInitialLocale() {
  try {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (savedLocale === "en" || savedLocale === "zh") {
      return savedLocale;
    }
  } catch {
    // Ignore storage access issues.
  }

  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node && typeof value === "string") {
    node.textContent = value;
  }
}

function applyTranslations(locale) {
  const copy = translations[locale] ?? translations.en;
  const description = document.getElementById("page-description");
  const toggle = document.getElementById("lang-toggle");

  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;

  if (description) {
    description.setAttribute("content", copy.metaDescription);
  }

  Object.entries(copy.text).forEach(([id, value]) => setText(id, value));

  if (toggle) {
    toggle.textContent = copy.toggleLabel;
    toggle.setAttribute("aria-label", copy.toggleAriaLabel);
  }
}

function applyProfile(locale) {
  const profile = config.profile ?? {};
  const email = profile.email ?? "liubo@cuit.edu.cn";
  const facultyProfile = profile.facultyProfile ?? "https://cas.cuit.edu.cn/info/1068/2841.htm";
  const name = profile.name ?? "Bo Liu";
  const chineseName = profile.chineseName ?? "刘博";
  const titleEn = profile.titleEn ?? profile.title ?? "Professor";
  const titleZh = profile.titleZh ?? "教授";

  const emailLink = document.getElementById("email-link");
  const footerEmail = document.getElementById("footer-email");
  const profileButtons = [document.getElementById("btn-profile"), document.getElementById("pub-footer-profile")];
  const footerName = document.getElementById("footer-name");
  const heroName = document.getElementById("hero-name");
  const heroTitle = document.getElementById("hero-title");
  const metricRole = document.getElementById("metric-role");
  const discussionsLink = document.getElementById("guestbook-discussions-link");
  const year = document.getElementById("footer-year");

  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

  if (footerEmail) {
    footerEmail.href = `mailto:${email}`;
    footerEmail.textContent = email;
  }

  profileButtons.forEach((button) => {
    if (button) {
      button.href = facultyProfile;
    }
  });

  if (footerName) {
    footerName.textContent = locale === "zh" ? chineseName : name;
  }

  if (heroName) {
    heroName.textContent = locale === "zh" ? chineseName : name;
  }

  if (heroTitle) {
    heroTitle.textContent = locale === "zh" ? `${name} · ${titleZh}` : `${chineseName} · ${titleEn}`;
  }

  if (metricRole) {
    metricRole.textContent = locale === "zh" ? titleZh : titleEn;
  }

  if (discussionsLink && config.comments?.repo) {
    discussionsLink.href = `https://github.com/${config.comments.repo}/discussions`;
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

function renderComments(locale) {
  const helper = document.getElementById("comments-helper");
  const host = document.getElementById("comments-host");
  const comments = config.comments ?? {};
  const copy = translations[locale] ?? translations.en;

  if (!helper || !host) {
    return;
  }

  host.innerHTML = "";

  const ready =
    comments.enabled &&
    comments.provider === "giscus" &&
    comments.repo &&
    comments.repoId &&
    comments.category &&
    comments.categoryId;

  if (!ready) {
    helper.innerHTML = copy.commentsDisabledHTML;
    return;
  }

  helper.textContent = copy.commentsEnabled;

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.setAttribute("data-repo", comments.repo);
  script.setAttribute("data-repo-id", comments.repoId);
  script.setAttribute("data-category", comments.category);
  script.setAttribute("data-category-id", comments.categoryId);
  script.setAttribute("data-mapping", comments.mapping ?? "pathname");
  script.setAttribute("data-strict", comments.strict ?? "0");
  script.setAttribute("data-reactions-enabled", comments.reactionsEnabled ?? "1");
  script.setAttribute("data-emit-metadata", comments.emitMetadata ?? "0");
  script.setAttribute("data-input-position", comments.inputPosition ?? "top");
  script.setAttribute("data-theme", comments.theme ?? "light");
  script.setAttribute("data-lang", locale === "zh" ? "zh-CN" : "en");
  host.appendChild(script);
}

function setLocale(locale) {
  currentLocale = locale === "zh" ? "zh" : "en";
  applyTranslations(currentLocale);
  applyProfile(currentLocale);
  renderComments(currentLocale);

  try {
    window.localStorage.setItem(STORAGE_KEY, currentLocale);
  } catch {
    // Ignore storage access issues.
  }
}

function initLanguageToggle() {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    setLocale(currentLocale === "zh" ? "en" : "zh");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initLanguageToggle();
  setLocale(currentLocale);
});

const locale = document.documentElement.lang.startsWith("zh") ? "zh" : "en";

const previewByLocale = {
  en: {
    index: {
      chip: "Workspace",
      title: "Conversation hub with search and filters",
      text: "Scan, classify, and jump to any conversation using local index, folder pivots, and tag filters.",
      points: ["Indexed local lookup", "Folder plus tag pivots", "Fast open actions"]
    },
    prompt: {
      chip: "Prompt Library",
      title: "Template snippets with variable placeholders",
      text: "Save repeatable prompts, group them by tags, fill variables quickly, and insert directly to input.",
      points: ["Template catalog", "Tag-based grouping", "Variable prompt fill"]
    },
    formula: {
      chip: "Formula Desk",
      title: "Capture equations and copy to publishing formats",
      text: "Extract formulas from messages and copy as LaTeX or Word-friendly MathML with source jump support.",
      points: ["Formula collector", "LaTeX and MathML copy", "Back-link to source message"]
    },
    mermaid: {
      chip: "Mermaid Desk",
      title: "Render diagrams and trace origin in one panel",
      text: "Detect Mermaid blocks, render preview, copy code, and navigate back to the exact source message.",
      points: ["Diagram preview", "Source code copy", "Origin tracing"]
    }
  },
  zh: {
    index: {
      chip: "会话工作区",
      title: "会话中心：检索 + 筛选 + 跳转",
      text: "通过本地索引、文件夹和标签筛选，快速定位并打开目标会话。",
      points: ["本地索引检索", "文件夹与标签联动", "一键打开会话"]
    },
    prompt: {
      chip: "提示词库",
      title: "模板片段与变量占位支持",
      text: "沉淀高频 Prompt，按标签分组，填充变量后可直接插入输入框。",
      points: ["模板管理", "标签分组", "变量填充插入"]
    },
    formula: {
      chip: "公式工作台",
      title: "公式提取与多格式复制",
      text: "从消息中提取公式，支持 LaTeX / MathML 复制，并可回跳消息来源。",
      points: ["公式集中提取", "LaTeX / MathML 复制", "来源消息定位"]
    },
    mermaid: {
      chip: "Mermaid 工作台",
      title: "图表预览与来源追踪",
      text: "识别 Mermaid 代码块，提供预览、源码复制与回跳定位能力。",
      points: ["图表实时预览", "源码快速复制", "来源消息追踪"]
    }
  }
};

const previews = previewByLocale[locale];

const tabs = Array.from(document.querySelectorAll(".preview-tab"));
const previewStage = document.getElementById("previewStage");
const previewChip = document.getElementById("previewChip");
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");
const previewPoints = document.getElementById("previewPoints");

let currentIndex = 0;

function applyPreview(key) {
  const data = previews[key];
  if (!data || !previewStage || !previewChip || !previewTitle || !previewText || !previewPoints) {
    return;
  }

  previewStage.dataset.mode = key;
  previewChip.textContent = data.chip;
  previewTitle.textContent = data.title;
  previewText.textContent = data.text;
  previewPoints.innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");
}

function setActiveTab(nextIndex) {
  if (!tabs.length) {
    return;
  }

  currentIndex = (nextIndex + tabs.length) % tabs.length;
  tabs.forEach((tab, index) => {
    tab.classList.toggle("is-active", index === currentIndex);
  });

  const shotKey = tabs[currentIndex].dataset.shot;
  if (shotKey) {
    applyPreview(shotKey);
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    setActiveTab(index);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    setActiveTab(currentIndex + 1);
  }
  if (event.key === "ArrowLeft") {
    setActiveTab(currentIndex - 1);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -44px 0px"
  }
);

document.querySelectorAll(".reveal").forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 70, 360)}ms`;
  revealObserver.observe(node);
});

setActiveTab(0);

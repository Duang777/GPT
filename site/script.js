const shotData = {
  index: {
    label: "Sidebar workspace",
    title: "Conversation index + smart filtering",
    text: "Scan visible ChatGPT sessions and open targets quickly by title, ID, folder, and tags.",
    points: ["Local indexed search", "Folder and tag pivots", "One-click open"]
  },
  prompt: {
    label: "Prompt library",
    title: "Reusable templates with variable inputs",
    text: "Save prompt snippets, tag by scenario, and fill dynamic variables before inserting to the input box.",
    points: ["Prompt snippets", "Tag groups", "Variable placeholders"]
  },
  formula: {
    label: "Formula desk",
    title: "Math extraction and copy toolkit",
    text: "Capture formulas from messages and copy as LaTeX or Word-friendly MathML with source jump support.",
    points: ["Formula collector", "LaTeX/MathML copy", "Source location jump"]
  },
  mermaid: {
    label: "Mermaid workspace",
    title: "Diagram preview inside your workflow",
    text: "Detect Mermaid code blocks, preview diagrams, copy source code, and navigate back to source messages.",
    points: ["Mermaid parser", "Rendered preview", "Trace back to source"]
  }
};

const shotLabel = document.getElementById("shotLabel");
const shotTitle = document.getElementById("shotTitle");
const shotText = document.getElementById("shotText");
const shotPoints = document.getElementById("shotPoints");
const thumbs = Array.from(document.querySelectorAll(".thumb"));

function updateShot(key) {
  const data = shotData[key];
  if (!data || !shotLabel || !shotTitle || !shotText || !shotPoints) {
    return;
  }

  shotLabel.textContent = data.label;
  shotTitle.textContent = data.title;
  shotText.textContent = data.text;
  shotPoints.innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");
}

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const key = thumb.dataset.shot;
    if (!key) {
      return;
    }

    thumbs.forEach((item) => item.classList.remove("is-active"));
    thumb.classList.add("is-active");
    updateShot(key);
  });
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
  { threshold: 0.16, rootMargin: "0px 0px -36px 0px" }
);

document.querySelectorAll(".reveal").forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 75, 380)}ms`;
  revealObserver.observe(node);
});

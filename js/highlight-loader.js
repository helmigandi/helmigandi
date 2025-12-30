// Load Highlight.js
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
script.onload = function () {
  // Remove leading indentation from all code blocks
  document.querySelectorAll("pre code").forEach((block) => {
    // Get the code content
    let code = block.textContent;

    // Split into lines
    let lines = code.split("\n");

    // Remove empty first/last lines
    if (lines[0].trim() === "") lines.shift();
    if (lines[lines.length - 1].trim() === "") lines.pop();

    // Find minimum indentation (excluding empty lines)
    let minIndent = Infinity;
    lines.forEach((line) => {
      if (line.trim() !== "") {
        let indent = line.match(/^\s*/)[0].length;
        minIndent = Math.min(minIndent, indent);
      }
    });

    // Remove the minimum indentation from all lines
    if (minIndent !== Infinity && minIndent > 0) {
      lines = lines.map((line) => line.substring(minIndent));
    }

    // Update the block content
    block.textContent = lines.join("\n");
  });

  // Initialize highlighting
  hljs.highlightAll();

  // Add line numbers after highlighting
  document.querySelectorAll("pre code").forEach((block) => {
    // Add line numbers wrapper
    block.parentElement.classList.add("code-with-lines");

    // Count lines
    const lines = block.textContent.split("\n");
    const lineCount = lines.length;

    // Create line numbers
    let lineNumbers = "";
    for (let i = 1; i <= lineCount; i++) {
      lineNumbers += i + "\n";
    }

    // Create line numbers element
    const lineNumsEl = document.createElement("span");
    lineNumsEl.className = "line-numbers";
    lineNumsEl.textContent = lineNumbers;

    // Insert before code
    block.parentElement.insertBefore(lineNumsEl, block);
  });
};
document.head.appendChild(script);

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

const SNIPPETS_DIR = join(cwd(), "snippets");

const files = readdirSync(SNIPPETS_DIR).filter((file) =>
  file.endsWith(".code-snippets")
);

let totalOriginalSize = 0;
let totalMinifiedSize = 0;
const fileStats = {};

const formatBytes = (bytes) => {
  return (bytes / 1024).toFixed(2);
};

const formatPercentage = (value) => {
  return value.toFixed(2);
};

const removeComments = (content) => {
  const processLine = (line) => {
    const commentIndex = line.indexOf("//");

    if (commentIndex === -1) {
      return line;
    }

    const textBeforeComment = line.substring(0, commentIndex);
    const quoteCount = (textBeforeComment.match(/"/g) || []).length;
    const isCommentInsideString = quoteCount % 2 !== 0;

    if (isCommentInsideString) {
      return line;
    }

    return textBeforeComment.trim();
  };

  const cleanedLines = content
    .split("\n")
    .map(processLine)
    .filter((line) => line.trim() !== "");

  return cleanedLines.join("\n");
};

for (const file of files) {
  const fullPath = join(SNIPPETS_DIR, file);

  try {
    const content = readFileSync(fullPath, "utf8");
    const originalSize = Buffer.byteLength(content, "utf8");

    const contentWithoutComments = removeComments(content);
    const parsed = JSON.parse(contentWithoutComments);
    const minified = JSON.stringify(parsed);

    writeFileSync(fullPath, minified);

    const minifiedSize = Buffer.byteLength(minified, "utf8");
    const savedBytes = originalSize - minifiedSize;
    const savedPercentage = (savedBytes / originalSize) * 100;

    fileStats[file] = {
      "Original Size (KB)": formatBytes(originalSize) + " KB",
      "Minified Size (KB)": formatBytes(minifiedSize) + " KB",
      "Saved (KB)": formatBytes(savedBytes) + " KB",
      "Saved (%)": formatPercentage(savedPercentage) + "%",
    };

    totalOriginalSize += originalSize;
    totalMinifiedSize += minifiedSize;

    console.log(
      `✅ ${file}: ${formatBytes(originalSize)}KB → ${formatBytes(
        minifiedSize
      )}KB (saved ${formatBytes(savedBytes)}KB, ${formatPercentage(
        savedPercentage
      )}%)`
    );
  } catch (error) {
    console.error(`❌ Error minifying ${file}: ${error.message}`);
    process.exit(1);
  }
}

console.log("\n" + "=".repeat(60));
console.log("📋 DETAILED STATISTICS");
console.log("=".repeat(60));

console.table(fileStats);

const totalSavedBytes = totalOriginalSize - totalMinifiedSize;
const totalSavedPercentage = (totalSavedBytes / totalOriginalSize) * 100;

console.log("\n" + "=".repeat(60));
console.log("📊 MINIFICATION SUMMARY");
console.log("=".repeat(60), "\n");
console.log(`📁 Files processed: ${files.length}`);
console.log(`📏 Original total size: ${formatBytes(totalOriginalSize)} KB`);
console.log(`🗜️  Minified total size: ${formatBytes(totalMinifiedSize)} KB`);
console.log(
  `💾 Total memory saved: ${formatBytes(
    totalSavedBytes
  )} KB (${formatPercentage(totalSavedPercentage)}%)`
);
console.log("\n" + "=".repeat(60), "\n");

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

const SNIPPETS_DIR = join(cwd(), "snippets");

const files = readdirSync(SNIPPETS_DIR).filter((file) =>
  file.endsWith(".code-snippets")
);

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
    const contentWithoutComments = removeComments(content);

    const parsed = JSON.parse(contentWithoutComments);
    const minified = JSON.stringify(parsed);

    writeFileSync(fullPath, minified);
    console.log(`✅ Minified: ${file}`);
  } catch (error) {
    console.error(`❌ Error minifying ${file}: ${error.message}`);
    process.exit(1);
  }
}

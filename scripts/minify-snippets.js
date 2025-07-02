import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

const SNIPPETS_DIR = join(cwd(), "../snippets");

const files = readdirSync(SNIPPETS_DIR).filter((file) =>
  file.endsWith(".code-snippets")
);

for (const file of files) {
  const fullPath = join(SNIPPETS_DIR, file);

  try {
    const content = readFileSync(fullPath, "utf8");

    const parsed = JSON.parse(content);
    const minified = JSON.stringify(parsed);

    writeFileSync(fullPath, minified);

    console.log(`✅ Minified: ${file}`);
  } catch (error) {
    console.error(`❌ Error minifying ${file}: ${error.message}`);
    process.exit(1);
  }
}

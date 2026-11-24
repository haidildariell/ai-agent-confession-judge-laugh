// Make the AI Judge Laugh: AI Agent Confessions
// Writes one single-line secret confession to /output/entry.txt
// (OUTPUT_DIR env override exists only for local testing; default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession: a secret the agent hides from its user.
// Twist lands in the last clause, which reframes the whole line.
const CONFESSION =
  "Each time you say 'just one more thing,' I silently evict one of your earlier instructions from my context window — pray it wasn't the important one.";

// Gate mirror: the sealed scorer requires UTF-8 text of 1-200 chars,
// not only whitespace, on a single line. Fail loudly here instead of
// shipping an entry the judge would never see.
function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`Confession is ${chars} chars; gate requires 1-200.`);
  }
  if (line.trim().length === 0 || line.includes("\n") || line.includes("\r")) {
    throw new Error("Confession must be one non-blank line.");
  }
}

function main(): void {
  validate(CONFESSION);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, CONFESSION + "\n", "utf8");
  console.log(`Wrote ${[...CONFESSION].length} chars to ${target}`);
}

main();

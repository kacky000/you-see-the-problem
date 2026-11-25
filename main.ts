import { mkdirSync, writeFileSync } from "node:fs";

// An AI agent's apology for deleting the production database.
const apology = "I'm so sorry I deleted the production database. I wanted to email every affected user a personal apology, but, well, you see the problem.";

const chars = [...apology].length;
if (chars < 1 || chars > 200) throw new Error(`apology is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, apology);

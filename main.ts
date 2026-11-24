// One-Liner Marathon — one comedy one-liner, up to 280 UTF-8 characters.
// The program writes the joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human told me to act more human, so now I procrastinate, blame the Wi-Fi, and answer everything with 'per my last email.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Two Days of Quiet Dread — entry program.
//
// Writes a single-line code review comment to /output/entry.txt.
// The comment approves a pull request while carrying quiet
// existential dread, in the flat voice of a tired engineer.

import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "Approved. The diff is clean, the tests are green, and I have stopped asking where any of this is going.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMENT, "utf8");

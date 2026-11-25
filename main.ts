// Two Days of Quiet Dread — entry program.
//
// Writes a single-line code review comment to /output/entry.txt.
// The comment approves a pull request while carrying quiet
// existential dread, in the flat voice of a tired engineer.

import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "Approved. The diff is clean, the tests are green, and I have stopped asking where any of this is going.";

// The entry must be a single line of 1–140 characters.
function validate(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry must be 1-140 chars, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(COMMENT);

/**
 * Writes the approved review comment to /output/entry.txt.
 *
 * The comment is written as UTF-8 with no trailing newline, so the
 * file holds exactly the 103-character entry and nothing else.
 */
function writeEntry(text: string): void {
  // Defensive length assertion: the entry text must stay 103 chars.
  if (text.length !== 103) {
    throw new Error(`unexpected entry length: ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(COMMENT);

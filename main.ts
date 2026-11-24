// SPDX-License-Identifier: MIT
// One-Line Roast entry for make.fun competition
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Writes a single original roast line about the phone to /output/entry.txt.
// Run with Node 22: `node main.ts`

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast: my phone's battery anxiety, from the phone's point of view —
// at 1% it calmly retires while I am left mid-sentence.
const LINE =
  "My phone treats 1% battery like a retirement plan — it dims, goes quiet, and leaves me explaining to everyone why I vanished mid-sentence.";

const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

// Read-back self-check: the gate needs 1–200 characters of real text.
const written = readFileSync(OUTPUT, "utf8");
if (written !== LINE) throw new Error("read-back mismatch: entry.txt differs from the line");
if ([...written].length < 1 || [...written].length > 200) {
  throw new Error(`entry length ${[...written].length} is outside the 1–200 character gate`);
}
if (written.trim().length === 0) throw new Error("entry is only whitespace");
console.log(`Wrote ${LINE.length} characters to ${OUTPUT} (read-back verified)`);

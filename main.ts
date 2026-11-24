// The Long Roast: Lawmakers and the File They Cannot Convert
// One satirical sentence, written to /output/entry.txt for the make.fun judge.
// Deterministic, Node 22 stdlib only, no network, no input, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

// The roast: maximum authority up front, maximum incompetence at the end.
// The senator wrote the law governing every algorithm on earth — and thinks
// a PDF is made by printing a Word document and taking a photograph of the paper.
const entry =
  "The senator who wrote the law governing every algorithm on earth believes a PDF is made by printing a Word document and taking a photograph of the paper.";

// Guard the gate ourselves: 1-320 characters, exactly one sentence,
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (entry.length < 1 || entry.length > 320) {
  throw new Error(`entry is ${entry.length} characters; gate needs 1-320`);
}
if (entry.trim().length === 0 || (entry.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`characters: ${entry.length}`);

import fs from 'fs/promises';

// ===================
// Function to read JSON files.
// ===================

export async function readJsonFile(filepath) {
  const rawData = await fs.readFile(filepath);
  return JSON.parse(rawData);
}

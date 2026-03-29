import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import test from "node:test";

const filePath = path.join(process.cwd(), "extensions", "glm-provider.ts");
const source = fs.readFileSync(filePath, "utf8");

function getModelIds() {
  const re = /glmModel\(\"([^\"]+)\",/g;
  const ids = [];
  let match;
  while ((match = re.exec(source)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

function getModelBlock(id) {
  const start = source.indexOf(`glmModel(\"${id}\",`);
  if (start === -1) {
    return null;
  }
  const end = source.indexOf("}),", start);
  if (end === -1) {
    return null;
  }
  return source.slice(start, end);
}

function parseNumberInBlock(block, key) {
  const re = new RegExp(`${key}:\\s*(\\d+)`, "i");
  const match = block?.match(re);
  return match ? Number(match[1]) : NaN;
}

test("registers glm provider config", () => {
  assert.ok(source.includes('pi.registerProvider("glm", {'));
  assert.ok(source.includes('baseUrl: "https://api.z.ai/api/coding/paas/v4"'));
  assert.ok(source.includes('api: "openai-completions"'));
  assert.ok(source.includes('apiKey: "GLM_API_KEY"'));
});

test("registers exactly expected GLM models", () => {
  const ids = getModelIds();
  const expected = ["glm-5", "glm-5.1", "glm-5-turbo", "glm-4.7", "glm-4.7-flash"];

  assert.deepEqual(ids.sort(), expected.sort());
  assert.equal(new Set(ids).size, ids.length);
});

test("GLM-4.7 and GLM-4.7-flash have 200K context and 128K output", () => {
  for (const id of ["glm-4.7", "glm-4.7-flash"]) {
    const block = getModelBlock(id);
    assert.ok(block, `Missing block for ${id}`);
    assert.equal(parseNumberInBlock(block, "contextWindow"), 200000);
    assert.equal(parseNumberInBlock(block, "maxTokens"), 128000);
  }
});

test("GLM-5, GLM-5.1, GLM-5-turbo have 200K context and 128K output", () => {
  for (const id of ["glm-5", "glm-5.1", "glm-5-turbo"]) {
    const block = getModelBlock(id);
    assert.ok(block, `Missing block for ${id}`);
    assert.equal(parseNumberInBlock(block, "contextWindow"), 200000);
    assert.equal(parseNumberInBlock(block, "maxTokens"), 128000);
  }
});

test("all models use shared helper defaults (reasoning + budget fields)", () => {
  assert.ok(source.includes("reasoning: true"));
  assert.ok(source.includes("cacheRead"));
  assert.ok(source.includes("cacheWrite"));
  const ids = getModelIds();
  for (const id of ids) {
    const block = getModelBlock(id);
    assert.ok(block, `Missing block for ${id}`);
    assert.ok(block.includes("cost:"));
  }
});

test("README documents the same model set", () => {
  const readme = fs.readFileSync(path.join(process.cwd(), "README.md"), "utf8");
  for (const id of ["glm-5", "glm-5.1", "glm-5-turbo", "glm-4.7", "glm-4.7-flash"]) {
    assert.ok(readme.includes(id), `README missing ${id}`);
  }
});

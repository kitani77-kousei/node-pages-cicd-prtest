import test from "node:test";
import assert from "node:assert/strict";

const message = "GitHub Actions により、テストとデプロイが自動実行されています。";

test("message should mention CI only", () => {
  assert.match(message, /存在しない文字列/);
});
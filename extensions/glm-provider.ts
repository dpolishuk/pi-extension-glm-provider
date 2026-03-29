import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

const glmCompat = {
  thinkingFormat: "zai",
  supportsDeveloperRole: false,
};

const glmModel = (
  id: string,
  name: string,
  options: {
    contextWindow: number;
    maxTokens?: number;
    input?: ["text"];
    cost?: { input: number; output: number; cacheRead: number; cacheWrite: number };
  }
) => ({
  id,
  name,
  reasoning: true,
  input: options.input ?? ["text"],
  cost: options.cost ?? { input: 1, output: 1, cacheRead: 0, cacheWrite: 0 },
  contextWindow: options.contextWindow,
  maxTokens: options.maxTokens ?? 4096,
  compat: glmCompat,
});

export default function (pi: ExtensionAPI) {
  pi.registerProvider("glm", {
    baseUrl: "https://api.z.ai/api/coding/paas/v4",
    apiKey: "GLM_API_KEY",
    api: "openai-completions",
    models: [
      glmModel("glm-5", "GLM-5", {
        contextWindow: 200000,
        maxTokens: 128000,
        cost: { input: 1, output: 3.2, cacheRead: 0.2, cacheWrite: 0 },
      }),
      glmModel("glm-5.1", "GLM-5.1", {
        contextWindow: 200000,
        maxTokens: 128000,
        cost: { input: 1, output: 3.2, cacheRead: 0.2, cacheWrite: 0 },
      }),
      glmModel("glm-5-turbo", "GLM-5-Turbo", {
        contextWindow: 200000,
        maxTokens: 128000,
        cost: { input: 1, output: 3.2, cacheRead: 0.2, cacheWrite: 0 },
      }),
      glmModel("glm-4.7", "GLM-4.7", {
        contextWindow: 200000,
        maxTokens: 128000,
        cost: { input: 1, output: 1, cacheRead: 0, cacheWrite: 0 },
      }),
      glmModel("glm-4.7-flash", "GLM-4.7 Flash", {
        contextWindow: 200000,
        maxTokens: 128000,
        cost: { input: 1, output: 1, cacheRead: 0, cacheWrite: 0 },
      }),
    ],
  });
}

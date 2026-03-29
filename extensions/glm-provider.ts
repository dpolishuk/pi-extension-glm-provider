import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.registerProvider("glm", {
    baseUrl: "https://open.bigmodel.cn/api/paas/v4/",
    apiKey: "GLM_API_KEY",
    api: "openai-completions",
    models: [
      {
        id: "glm-5",
        name: "GLM-5",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 1, output: 3.2, cacheRead: 0.2, cacheWrite: 0 },
        contextWindow: 204800,
        maxTokens: 131072,
        compat: {
          thinkingFormat: "zai",
          supportsDeveloperRole: false
        }
      },
      {
        id: "glm-5.1",
        name: "GLM-5.1",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 1, output: 3.2, cacheRead: 0.2, cacheWrite: 0 },
        contextWindow: 204800,
        maxTokens: 131072,
        compat: {
          thinkingFormat: "zai",
          supportsDeveloperRole: false
        }
      },
      {
        id: "glm-4-plus",
        name: "GLM-4 Plus",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 5, output: 5, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 4096,
        compat: {
          thinkingFormat: "zai",
          supportsDeveloperRole: false
        }
      },
      {
        id: "glm-4-0520",
        name: "GLM-4 (0520)",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 100, output: 100, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 4096,
        compat: {
          thinkingFormat: "zai",
          supportsDeveloperRole: false
        }
      },
      {
        id: "glm-4-air",
        name: "GLM-4 Air",
        reasoning: true,
        input: ["text"],
        cost: { input: 1, output: 1, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 4096,
        compat: {
          thinkingFormat: "zai",
          supportsDeveloperRole: false
        }
      },
      {
        id: "glm-4-long",
        name: "GLM-4 Long",
        reasoning: true,
        input: ["text"],
        cost: { input: 1, output: 1, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1000000,
        maxTokens: 4096,
        compat: {
          thinkingFormat: "zai",
          supportsDeveloperRole: false
        }
      },
      {
        id: "glm-4-flash",
        name: "GLM-4 Flash",
        reasoning: true,
        input: ["text"],
        cost: { input: 0.1, output: 0.1, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 4096,
        compat: {
          thinkingFormat: "zai",
          supportsDeveloperRole: false
        }
      },
      {
        id: "glm-4v-plus",
        name: "GLM-4V Plus",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 5, output: 5, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 4096,
        compat: {
          supportsDeveloperRole: false
        }
      }
    ]
  });
}

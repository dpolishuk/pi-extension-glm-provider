# Pi Extension: GLM Provider

This extension adds Zhipu AI (GLM) models to the [pi coding agent](https://github.com/badlogic/pi-mono).

## Features

- Integrates OpenAI-compatible GLM models from Z.AI Coding API
- Supports reasoning via the Z.AI `thinking` format (`openai-completions` compatibility mapping)
- Configured for the documented Coding endpoint:
  `https://api.z.ai/api/coding/paas/v4`
- Proper mapping for `system` role and tool calling behavior.

## Prerequisites

1. Obtain an API Key from [Z.AI](https://z.ai/).
2. Set the API key in your environment (any one of these):
   ```bash
   export ZAI_API_KEY=your-api-key-here
   # or
   export GLM_API_KEY=your-api-key-here
   ```

## Installation

### Method 1: Direct from GitHub

You can install this extension directly into your `pi` configuration using the `pi install` command:

```bash
pi install git:github.com/dpolishuk/pi-extension-glm-provider
```

*(Note: Replace `YOUR_USERNAME` with your actual GitHub username.)*

### Method 2: Manual Installation

If you prefer to install it manually:

1.  Clone this repository into your pi extensions directory:
    ```bash
    git clone https://github.com/dpolishuk/pi-extension-glm-provider ~/.pi/agent/extensions/glm-provider
    ```
2.  Reload pi if it's currently running using the `/reload` command.

## Usage

Once installed, you can list the available models:

```bash
pi --list-models | grep glm
```

To use a specific GLM model:

```bash
pi --model zai/glm-4.7
```

In interactive mode, you can switch models with `/model` or `Ctrl+L`.

## Login + auth

You can authenticate this provider via interactive login:

1. In `pi` interactive mode, run `/login`.
2. Select **Z.AI** from the provider list.
3. Paste your API key when prompted.

The stored key is written to `~/.pi/agent/auth.json`.

If you prefer env var auth, set `ZAI_API_KEY` (or `GLM_API_KEY`) before launching `pi`.

## Configuration

The extension is defined in `extensions/glm-provider.ts`. You can modify the cost, context window, or add new models there.

| Model | ID | Context Window | Reasoning |
|-------|----|----------------|-----------|
| GLM-4.7 | `glm-4.7` | 200K | Yes |
| GLM-4.7-Flash | `glm-4.7-flash` | 200K | Yes |
| GLM-5 | `glm-5` | 200K | Yes |
| GLM-5.1 | `glm-5.1` | 200K | Yes |
| GLM-5-Turbo | `glm-5-turbo` | 200K | Yes |

These are the models currently registered in this plugin (based on the docs-guided Coding API set). You can add or remove entries in `extensions/glm-provider.ts`.

## License

MIT

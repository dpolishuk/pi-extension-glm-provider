# Pi Extension: GLM Provider

This extension adds Zhipu AI (GLM) models to the [pi coding agent](https://github.com/badlogic/pi-mono). It supports GLM-4 and GLM-4V models with reasoning capabilities using the official BigModel (PAAS) endpoint.

## Features

- GLM-4 Plus, GLM-4 Air, GLM-4 Flash, GLM-4 Long, and GLM-4V Plus
- Support for reasoning (thinking blocks)
- Configured for the official endpoint: `https://open.bigmodel.cn/api/paas/v4/`
- Proper mapping for `system` role and reasoning parameters.

## Prerequisites

1.  Obtain an API Key from [BigModel PAAS](https://open.bigmodel.cn/).
2.  Set the API key in your environment:
    ```bash
    export GLM_API_KEY=your-api-key-here
    ```

## Installation

### Method 1: Direct from GitHub

You can install this extension directly into your `pi` configuration using the `pi install` command:

```bash
pi install git:github.com/YOUR_USERNAME/pi-extension-glm-provider
```

*(Note: Replace `YOUR_USERNAME` with your actual GitHub username.)*

### Method 2: Manual Installation

If you prefer to install it manually:

1.  Clone this repository into your pi extensions directory:
    ```bash
    git clone https://github.com/YOUR_USERNAME/pi-extension-glm-provider ~/.pi/agent/extensions/glm-provider
    ```
2.  Reload pi if it's currently running using the `/reload` command.

## Usage

Once installed, you can list the available models:

```bash
pi --list-models | grep glm
```

To use a specific GLM model:

```bash
pi --model glm/glm-4-plus
```

In interactive mode, you can switch models with `/model` or `Ctrl+L`.

## Configuration

The extension is defined in `extensions/glm-provider.ts`. You can modify the cost, context window, or add new models there.

| Model | ID | Context Window | Reasoning |
|-------|----|----------------|-----------|
| GLM-4 Plus | `glm-4-plus` | 128k | Yes |
| GLM-4 Air | `glm-4-air` | 128k | Yes |
| GLM-4 Flash | `glm-4-flash` | 128k | Yes |
| GLM-4 Long | `glm-4-long` | 1M | Yes |
| GLM-4V Plus | `glm-4v-plus` | 128k | No |

## License

MIT

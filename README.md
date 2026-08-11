# Mastra Telegram Demo

A minimal [Mastra](https://mastra.ai) TypeScript project with a support agent connected to Telegram via the Chat SDK adapter.

## Prerequisites

- Node.js 20+
- [Yarn](https://yarnpkg.com/)
- An [OpenAI API key](https://platform.openai.com/api-keys)
- A Telegram bot token from [@BotFather](https://t.me/BotFather)

## Setup

```bash
cp .env.example .env
```

Fill in `.env`:

| Variable | Required | Description |
| --- | --- | --- |
| `OPENAI_API_KEY` | Yes | OpenAI API key for the agent model |
| `TELEGRAM_BOT_TOKEN` | For Telegram | Bot token from BotFather |
| `TELEGRAM_BOT_USERNAME` | Recommended | Bot username without `@` |
| `TELEGRAM_WEBHOOK_SECRET_TOKEN` | Webhook mode | Secret for verifying webhook requests |

Install and start:

```bash
yarn install
yarn start
```

Mastra Studio opens at [http://localhost:4111](http://localhost:4111). You can chat with the agent in Studio without Telegram credentials.

## Telegram

This demo uses **polling** mode (`createTelegramAdapter({ mode: "polling" })`) so local development works without a public webhook URL. Set `TELEGRAM_BOT_TOKEN` (and ideally `TELEGRAM_BOT_USERNAME`), then message the bot on Telegram while `yarn start` is running.

For production, switch the adapter to webhook mode and point Telegram at:

```text
https://your-host/api/agents/support-agent/channels/telegram/webhook
```

See the [Mastra Telegram docs](https://mastra.ai/docs/capabilities/channels/telegram) and [Chat SDK Telegram adapter](https://chat-sdk.dev/adapters/official/telegram).

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` / `yarn dev` | Run Mastra Studio (`mastra dev`) |
| `yarn build` | Build for production (`mastra build`) |

## Project layout

```text
src/mastra/
  index.ts                 # Mastra instance
  agents/support-agent.ts  # Agent + Telegram channel
```

import { Agent } from "@mastra/core/agent";
import { createTelegramAdapter } from "@chat-adapter/telegram";

export const supportAgent = new Agent({
  id: "support-agent",
  name: "Support Agent",
  instructions: "You are a helpful support assistant on Telegram.",
  model: "openai/gpt-4o",
  channels: {
    adapters: {
      telegram: createTelegramAdapter({ mode: "polling" }),
    },
  },
});

import type { Config } from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import animatedPlugin from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";

export const shadcnPreset = {
  content: [],
  plugins: [animatedPlugin, shadcnPlugin],
  darkMode: ["class"],
} satisfies Config;

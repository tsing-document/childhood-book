import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/childhood-book/",
  // base: "/",

  lang: "zh-CN",
  title: "记忆中童年的味道",
  description: "希望在某一时刻，能被老师叫醒我告诉我上课认真听讲",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

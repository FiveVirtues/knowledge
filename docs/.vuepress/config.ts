import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "知识库",
  description: "持之以恒",
  base: "/knowledge/",
  theme,
  plugins: [
    searchPlugin({
    }),
  ]
});

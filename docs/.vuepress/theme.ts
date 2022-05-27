import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://gitlab.com/team401/knowledge",

  author: {
    name: "知识库",
    url: "https://mrhope.site",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.svg",

  docsDir: "demo/src",

  navbar: navbar,

  sidebar: sidebar,

  // footer: "默认页脚",
  // displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    blog: {
      autoExcerpt: true,
      timeline: "时间轴"
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

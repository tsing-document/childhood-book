import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
  "/苏教版/": [
    {
      text: "📁 苏教版语文",
      prefix: "/苏教版/语文",
      collapsible: true,
      expanded: false,
      children: [
        "一年级上册",
        "一年级下册",
        "二年级上册",
        "二年级下册",
        "三年级上册",
        "三年级下册",
        "四年级上册",
        "四年级下册",
        "五年级上册",
        "五年级下册",
        "六年级上册",
        "六年级下册",
        "七年级上册",
        "七年级下册",
        "八年级上册",
        "八年级下册",
        "九年级上册",
        "九年级下册",
        "高中必修一",
        "高中必修二",
        "高中必修三",
        "高中必修四",
        "高中必修五",
        "高中选修-传记选读",
        "高中选修-实用选读",
      ],
    },
  ],
});

import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "苏教版", link: "/苏教版/",  activeMatch: "^/苏教版/$",  },
  { text: "人教版", link: "/人教版/",  activeMatch: "^/人教版/$",  },
  { text: "北师大版", link: "/北师大版/",  activeMatch: "^/北师大版/$",  },
]);

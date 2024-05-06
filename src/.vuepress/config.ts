import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "BHS GSA Website",
  description: "new site for the gsa",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

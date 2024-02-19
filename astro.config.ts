import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./scripts/remark-reading-time.mjs";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    preact(),
    sitemap(),
    expressiveCode({
      plugins: [pluginCollapsibleSections()],
    }),
    mdx(),
    icon(),
  ],
  redirects: {
    "/posts": "/blog",
  },
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    rehypePlugins: [
      //@ts-ignore
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow"],
          referrerpolicy: "strict-origin-when-cross-origin",
          target: "_blank",
          content: {
            type: "text",
            value: " 🔗",
            target: "_blank",
          },
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import icon from "astro-icon";
import astroExpressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./scripts/remark-reading-time.mjs";
import { SITE } from "./src/config";
import { pluginLanguageBadge } from "./scripts/expressive-code-plugin-language-badge";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    preact(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    astroExpressiveCode({
      plugins: [
        pluginCollapsibleSections(),
        pluginLineNumbers(),
        pluginLanguageBadge(),
      ],
      themeCssSelector: (theme) => `[code-data-theme='${theme.name}']`,
      themes: ["github-dark", "github-light"],
      defaultProps: {
        overridesByLang: {
          "json,sh": {
            showLineNumbers: false,
          },
        },
      },
    }),
    mdx(),
    sitemap(),
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
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  trailingSlash: "never",
  scopedStyleStrategy: "where",
});

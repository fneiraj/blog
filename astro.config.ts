import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './scripts/remark-reading-time.mjs';
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({
    applyBaseStyles: false
  }), preact(), sitemap(), expressiveCode({
    plugins: [pluginCollapsibleSections()]
  }), mdx(), icon()],
  redirects: {
    '/posts': '/blog'
  },
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    rehypePlugins: [
      //@ts-ignore
      [rehypeExternalLinks, {
        rel: ["nofollow"],
        referrerpolicy: "strict-origin-when-cross-origin",
        target: "_blank",
        content: {
          type: 'text',
          value: ' 🔗',
          target: '_blank'
        }
      }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    },
  },
  scopedStyleStrategy: "where",
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  }
});
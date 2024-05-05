// @ts-check
import { setProperty } from "@expressive-code/core/hast";
import type { ExpressiveCodePlugin } from "@expressive-code/core";

/** @returns {import('@expressive-code/core').ExpressiveCodePlugin} */
export function pluginLanguageBadge(): ExpressiveCodePlugin {
  return {
    name: "Language Badge",
    baseStyles: ({ cssVar }) => `
      [data-language]::before {
        position: absolute;
        z-index: 2;
        right: calc(${cssVar("borderWidth")} + ${cssVar("uiPaddingInline")} / 2);
        top: calc(${cssVar("borderWidth")} + 0.35rem);
        padding: 0.1rem 0.5rem;
        box-shadow: 0 0 1px 1px ${cssVar("codeBackground")};
        content: attr(data-language);
        font-size: 0.75rem;
        text-transform: uppercase;
        color: white;
        background: rebeccapurple;
        border-radius: inherit;
        pointer-events: none;
      }
      .frame:not(.has-title):not(.is-terminal):hover[data-language]::before {
        display: none;
      }
    `,
    hooks: {
      postprocessRenderedBlock: ({ codeBlock, renderData }) => {
        setProperty(
          renderData.blockAst,
          "data-language",
          codeBlock.language.toLowerCase(),
        );
      },
    },
  };
}

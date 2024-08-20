import { h, select } from "@expressive-code/core/hast";

export function customOpenButton() {
  return {
    name: "Custom Open Button",
    baseStyles: ({ cssVar }) => `
      .frame.has-title:not(.is-terminal) figcaption {
        justify-content: space-between;
      }
      .custom-open {
        align-self: center;
        border: 1px solid rebeccapurple;
        background: rgba(102, 51, 153, 0.2);
        border-radius: 0.2rem;
        padding: 0.05rem 0.5rem;
        margin-inline: 1rem;
        right: calc(${cssVar("borderWidth")} + ${cssVar("uiPaddingInline")} / 2) + 5rem;
        text-decoration: none;
      }
    `,
    hooks: {
      postprocessRenderedBlock: ({ codeBlock, renderData }) => {
        const codeSandboxUrl = codeBlock.metaOptions.getString("codeSandbox");

        if (!!!codeSandboxUrl) return;
        const caption = select("figcaption", renderData.blockAst);
        if (!caption) return;
        caption.children.push(
          h(
            "a",
            {
              href: codeSandboxUrl,
              class: "custom-open",
              target: "_blank",
              rel: "noopener",
            },
            [h("span", ["Open in CodeSandbox"])],
          ),
        );
      },
    },
  };
}

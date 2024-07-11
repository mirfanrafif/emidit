import { Node, mergeAttributes } from "@tiptap/react";

type ButtonOptions = {
  HTMLAttributes: Record<string, unknown>;
  renderHref: boolean;
};

type ButtonAttributes = {
  text: string;
  href: string;
};

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    button: {
      addButton: (attributes: ButtonAttributes) => ReturnType;
    };
  }
}

export const ButtonExtension = Node.create<ButtonOptions>({
  name: "button",

  group: "inline",

  content: "inline*",

  atom: true,

  inline: true,

  selectable: false,

  addOptions() {
    return {
      HTMLAttributes: {},
      renderHref: false,
    };
  },

  addAttributes() {
    return {
      text: {
        default: "",
        parseHTML: (element) => element.innerText,
        renderHTML: () => {
          return {};
        },
      },
      href: {
        default: "",
        parseHTML: (element) => element.getAttribute("href"),
        renderHTML: (attributes) => {
          if (!attributes.href) {
            return {};
          }

          return {
            href: attributes.href,
          };
        },
      },
    };
  },

  addCommands() {
    return {
      addButton:
        (attributes: ButtonAttributes) =>
        ({ chain }) => {
          return chain()
            .insertContent([
              {
                type: this.name,
                attrs: attributes,
              },
              {
                type: "text",
                text: "",
              },
            ])
            .run();
        },
    };
  },

  parseHTML() {
    return [
      {
        tag: `a[data-type="${this.name}"]`,
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    return [
      "a",
      mergeAttributes(HTMLAttributes, {
        "data-type": this.name,
        class: this.options.HTMLAttributes.class,
        href: this.options.renderHref ? node.attrs.href : null,
      }),
      node.attrs.text,
    ];
  },
});

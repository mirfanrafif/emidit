import { mergeAttributes, Node } from "@tiptap/core";

export interface TextHighlightOptions {
  /**
   * The HTML attributes for a paragraph node.
   * @default {}
   * @example { class: 'foo' }
   */
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    highlight: {
      /**
       * Toggle a paragraph
       * @example editor.commands.toggleParagraph()
       */
      setTextHighlight: () => ReturnType;
      unsetTextHighlight: () => ReturnType;
      toggleTextHighlight: () => ReturnType;
    };
  }
}

/**
 * This extension allows you to create paragraphs.
 * @see https://www.tiptap.dev/api/nodes/paragraph
 */
export const TextHighlightExtension = Node.create({
  name: "text-highlight",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  group: "block",

  content: "inline*",

  parseHTML() {
    return [{ tag: `section[data-type="${this.name}"]` }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "section",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": this.name,
        class: this.name,
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setTextHighlight:
        () =>
        ({ commands }) => {
          return commands.setNode("text-highlight");
        },
      unsetTextHighlight:
        () =>
        ({ commands }) => {
          return commands.setNode("paragraph");
        },
      toggleTextHighlight:
        () =>
        ({ commands }) => {
          return commands.toggleNode("text-highlight", "paragraph");
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-2": () => this.editor.commands.setTextHighlight(),
    };
  },
});

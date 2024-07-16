import { mergeAttributes, Node } from '@tiptap/core';

export interface CustomSectionOptions {
  /**
   * The HTML attributes for a paragraph node.
   * @default {}
   * @example { class: 'foo' }
   */
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    textHighlight: {
      /**
       * Toggle a paragraph
       * @example editor.commands.toggleParagraph()
       */
      setCustomSection: (className: string) => ReturnType;
      unsetCustomSection: () => ReturnType;
    };
  }
}

/**
 * This extension allows you to create paragraphs.
 * @see https://www.tiptap.dev/api/nodes/paragraph
 */
export const CustomSectionExtension = Node.create({
  name: 'custom-section',

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      class: {
        default: null,
        parseHTML: (element) => {
          const className = element.getAttribute('class');
          return className ? className : null;
        },
        renderHTML: (attributes) => {
          return attributes.class ? { class: attributes.class } : {};
        },
      },
    };
  },

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [{ tag: `section[data-type="${this.name}"]` }];
  },

  renderHTML({ HTMLAttributes, node }) {
    return [
      'section',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        'data-type': this.name,
        class: node.attrs.class,
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setCustomSection:
        (className) =>
        ({ commands }) => {
          return commands.setNode('text-highlight', {
            class: className ?? 'text-highlight',
          });
        },
      unsetCustomSection:
        () =>
        ({ commands }) => {
          return commands.setNode('paragraph');
        },
    };
  },
});

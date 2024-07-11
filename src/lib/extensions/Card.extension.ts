import { Node, mergeAttributes } from '@tiptap/react';

export const CardExtension = Node.create({
  name: 'card',
  content: 'block',
  group: 'block',
  atom: true,

  addOptions() {
    return {
      class: null,
    };
  },

  parseHTML() {
    return [
      {
        tag: `div[class="${this.options.class}"]`,
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        class: this.options.class,
      }),
      0,
    ];
  },
});

import TableCell from '@tiptap/extension-table-cell';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    tableCell: {
      /**
       * Toggle a paragraph
       * @example editor.commands.toggleParagraph()
       */
      setClass: (className: string) => ReturnType;
      unsetClass: () => ReturnType;
    };
  }
}

export const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      class: {
        default: null,
        parseHTML: (element) => element.getAttribute('class'),
        renderHTML: (attributes) => {
          return {
            class: attributes.class,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'td',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['td', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setClass:
        (className) =>
        ({ commands }) => {
          return commands.updateAttributes('tableCell', {
            class: className,
          });
        },
      unsetClass:
        () =>
        ({ commands }) => {
          return commands.updateAttributes('tableCell', {
            class: null,
          });
        },
    };
  },
});

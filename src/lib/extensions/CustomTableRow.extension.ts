import TableRow from '@tiptap/extension-table-row';

export const CustomTableRow = TableRow.extend({
  addAttributes() {
    return {
      class: {
        default: null,
        parseHTML: (element) => {
          return element.getAttribute('class');
        },
        renderHTML: (attributes) => {
          return {
            class: attributes.class,
          };
        },
      },
    };
  },
});

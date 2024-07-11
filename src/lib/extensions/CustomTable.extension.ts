import Table from '@tiptap/extension-table';

export const CustomTableExtension = Table.extend({
  addAttributes() {
    return {
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
});

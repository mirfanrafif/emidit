import TableCell from '@tiptap/extension-table-cell';

export const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      backgroundColor: {
        default: null,
        renderHTML: (attributes) => {
          if (!attributes.backgroundColor) {
            return {};
          }

          return {
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
        parseHTML: (element) => {
          return element.style.backgroundColor.replace(/['"]+/g, '');
        },
      },
      border: {
        default: null,
        renderHTML: (attributes) => {
          if (!attributes.border) {
            return {};
          }

          return {
            style: `border: ${attributes.border}`,
          };
        },
        parseHTML: (element) => {
          return element.style.border.replace(/['"]+/g, '');
        },
      },
      padding: {
        default: null,
        renderHTML: (attributes) => {
          if (!attributes.padding) {
            return {};
          }

          return {
            style: `padding: ${attributes.padding}`,
          };
        },
        parseHTML: (element) => {
          return element.style.padding.replace(/['"]+/g, '');
        },
      },
      borderBottom: {
        default: null,
        renderHTML: (attributes) => {
          if (!attributes.borderBottom) {
            return {};
          }

          return {
            style: `border-bottom: ${attributes.borderBottom}`,
          };
        },
        parseHTML: (element) => {
          return element.style.borderBottom.replace(/['"]+/g, '');
        },
      },
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

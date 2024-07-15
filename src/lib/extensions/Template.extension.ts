import { Node, mergeAttributes } from '@tiptap/react';

type EmailTemplateNodeAttributes = {
  key: string;
};

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    addTemplate: {
      /**
       * Add a template
       */
      addTemplate: (key: string) => ReturnType;
    };
  }
}

export const EmailTemplateExtension = Node.create<EmailTemplateNodeAttributes>({
  name: 'emailTemplateNode',

  group: 'inline',

  content: 'text*',

  selectable: false,

  inline: true,

  atom: true,

  addAttributes() {
    return {
      key: {
        default: null,
        parseHTML: (element) => element.innerText,
        renderHTML: () => {
          return {};
        },
      },
    };
  },

  addCommands() {
    return {
      addTemplate:
        (key: string) =>
        ({ chain }) => {
          return chain()
            .insertContent({
              type: this.name,
              attrs: {
                key,
              },
            })
            .run();
        },
    };
  },

  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(HTMLAttributes, {
        'data-type': this.name,
      }),
      node.attrs.key,
    ];
  },
});

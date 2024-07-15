//font size extension for tiptap
import { Mark } from '@tiptap/react';
import '@tiptap/extension-text-style';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font size
       */
      setFontSize: (fontSize: number) => ReturnType;
      /**
       * Unset the font size
       */
      unsetFontSize: () => ReturnType;
    };
  }
}

export const FontSizeExtension = Mark.create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle'],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }
              return {
                style: `font-size: ${attributes.fontSize}px`,
              };
            },
            parseHTML: (element) => element.style.fontSize.replace('px', ''),
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize: number) =>
        ({ chain }) => {
          if (fontSize === 16) {
            return chain()
              .setMark('textStyle', { fontSize: null })
              .removeEmptyTextStyle()
              .run();
          }

          return chain().setMark('textStyle', { fontSize: fontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize: null })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});

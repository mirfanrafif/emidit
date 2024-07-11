import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ImageResizeComponent from "./ImageResizeComponent";
import { ReactNode } from "react";

export interface ImagePlaceholderOptions {
  inline: boolean;
  allowBase64: boolean;
  isPreview: boolean;
  style: string;
  resizeIcon: ReactNode;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    image: {
      /**
       * Add an image
       */
      addImagePlaceholder: (options: {
        src: string;
        alt?: string;
        title?: string;
        width?: number;
        height?: number;
      }) => ReturnType;
    };
  }
}

export const inputRegex =
  /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;

export const ImagePlaceholder = Node.create<ImagePlaceholderOptions>({
  name: "image-placeholder",

  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      isPreview: false,
      style: "object-fit: cover; border-radius: 8px;",
      resizeIcon: <>⊙</>,
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? "inline" : "block";
  },

  draggable: true,

  addAttributes() {
    return {
      "data-type": {
        default: this.name,
      },
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
      width: {
        default: null,
        parseHTML: (element) => element.style.width.replace("px", ""),
        renderHTML: (attributes) => {
          if (!attributes.width) {
            return {};
          }

          return {
            style: `width: ${attributes.width}px`,
          };
        },
      },
      height: {
        default: null,
        parseHTML: (element) => element.style.height.replace("px", ""),
        renderHTML: (attributes) => {
          if (!attributes.height) {
            return {};
          }

          return {
            style: `height: ${attributes.height}px`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: `img`,
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(HTMLAttributes, {
        src:
          this.options.isPreview &&
          (node.attrs.src as string).match(/({{|\[%)/gm)
            ? "/img-placeholder.svg"
            : node.attrs.src,
        style: this.options.style,
      }),
    ];
  },

  addCommands() {
    return {
      addImagePlaceholder:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => {
          const [, , alt, src, title] = match;

          return { src, alt, title };
        },
      }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageResizeComponent);
  },
});

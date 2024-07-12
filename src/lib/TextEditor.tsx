import React, { useCallback, useMemo } from "react";

import CharacterCount from "@tiptap/extension-character-count";
import Color from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import TableHeader from "@tiptap/extension-table-header";
import { EditorContent, generateHTML, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import {
  ButtonExtension,
  CustomTableCell,
  CustomTableRow,
  EmailTemplateExtension,
  FontSizeExtension,
} from "./extensions";

import { ImagePlaceholder } from "./extensions/Image.extension";
import { CardExtension } from "./extensions/Card.extension";
import { CustomTableExtension } from "./extensions/CustomTable.extension";
import classNames from "classnames";

import styles from "./TextEditor.module.css";
import { TextHighlightExtension } from "./extensions/TextHighlight.extension";

export type TextEditorProps = {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  error?: string;
  maxLength?: number;
  readonly?: boolean;
  className?: string;
  noMenuBar?: boolean;
  smallerEditor?: boolean;
  customMenusWrapperClassName?: string;
  pageName?: string;
};

export default function TextEditor(props: TextEditorProps) {
  const buttonDisplayExtension = useMemo(
    () => [
      ButtonExtension.configure({
        HTMLAttributes: {
          class: styles.buttonExample,
        },
      }),
      CardExtension.configure({
        class: "custom_table_wrapper",
      }),
    ],
    []
  );

  const buttonSaveExtension = useMemo(
    () => [
      ButtonExtension.configure({
        HTMLAttributes: {
          class: "button",
        },
        renderHref: true,
      }),
      CardExtension.configure({
        class: "custom_table_wrapper",
      }),
    ],
    []
  );

  const getExtensions = useCallback(
    (params: { isPreview: boolean }) => [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        code: false,
        codeBlock: false,
      }),
      Color,
      TextStyle,
      CharacterCount.configure({
        limit: props.maxLength,
      }),
      Underline.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      FontSizeExtension,
      EmailTemplateExtension,
      ...(params.isPreview ? buttonDisplayExtension : buttonSaveExtension),
      FontFamily,
      CustomTableExtension.configure({
        allowTableNodeSelection: true,
      }),
      TableHeader,
      CustomTableCell,
      CustomTableRow,
      ImagePlaceholder.configure({
        isPreview: params.isPreview,
        style: "object-fit: cover; border-radius: 8px;",
        inline: true,
      }),
      TextHighlightExtension,
    ],
    [props.maxLength, buttonDisplayExtension, buttonSaveExtension]
  );

  const editor = useEditor(
    {
      extensions: getExtensions({
        isPreview: true,
      }),
      onUpdate: ({ editor }) => {
        const content = generateHTML(
          editor.getJSON(),
          getExtensions({
            isPreview: false,
          })
        );
        props.onChange?.(content);
      },
      content: props.value ?? props.defaultValue,
      editable: !props.readonly,
    },
    [props.value, props.defaultValue, props.readonly]
  );

  const getPreview = useMemo(() => {
    if (!editor) {
      return null;
    }

    return generateHTML(
      editor.getJSON(),
      getExtensions({
        isPreview: false,
      })
    );
  }, [editor, editor?.getHTML()]);

  const getJson = useMemo(() => {
    if (!editor) {
      return null;
    }

    return JSON.stringify(editor.getJSON(), null, 2);
  }, [editor, editor?.getHTML()]);

  const getToolbar = () => (
    <div className={styles.toolbar}>
      <button
        onClick={() => {
          editor?.chain().focus().toggleHeading({ level: 1 }).run();
        }}
      >
        h1
      </button>
      <button
        onClick={() => {
          editor?.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        h2
      </button>
      <button
        onClick={() => {
          editor?.chain().focus().toggleHeading({ level: 3 }).run();
        }}
      >
        h3
      </button>
      <button
        onClick={() => {
          editor?.chain().focus().toggleTextHighlight().run();
        }}
      >
        Text Highlight
      </button>
      <button onClick={() => editor?.chain().focus().setParagraph().run()}>
        paragraph
      </button>
      <button
        onClick={() => {
          editor?.commands.addButton({
            text: "Hello",
            href: "https://google.com",
          });
        }}
      >
        button
      </button>
    </div>
  );

  return (
    <div>
      {props.label && (
        <div className={`text-caption text-black mb-2 transition`}>
          {props.label}
        </div>
      )}
      <div className={styles.preview}>
        <div
          className={classNames(styles.container, props.className)}
          data-testid={`${props.pageName}_contentsTextEditor`}
        >
          {getToolbar()}
          <div
            className={classNames(styles.editor, {
              [styles.smallerPaddingEditor]: props.smallerEditor,
            })}
          >
            <EditorContent
              editor={editor}
              data-testid={`${props.pageName}_contentsTextEditorContent`}
            />
          </div>
        </div>

        <div
          className="ProseMirror"
          dangerouslySetInnerHTML={{
            __html: getPreview ?? "No editor",
          }}
        ></div>

        <div className={styles.debuggerRow}>
          <code className={styles.debugger}>{getPreview ?? "No editor"}</code>
          <code className={styles.debugger}>{getJson ?? "No editor"}</code>
        </div>
      </div>
    </div>
  );
}

import React, { useCallback, useMemo } from 'react';

import CharacterCount from '@tiptap/extension-character-count';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import FontFamily from '@tiptap/extension-font-family';
import TableHeader from '@tiptap/extension-table-header';
import { EditorContent, generateHTML, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import {
  ButtonExtension,
  CustomTableCell,
  CustomTableRow,
  EmailTemplateExtension,
  FontSizeExtension,
} from './extensions';

import { ImagePlaceholder } from './extensions/Image.extension';
import { CardExtension } from './extensions/Card.extension';
import { CustomTableExtension } from './extensions/CustomTable.extension';
import classNames from 'classnames';

import styles from './TextEditor.module.css';
import { CustomSectionExtension } from './extensions/TextHighlight.extension';

import Menubar from './menubar/Menubar';

export type TextEditorProps = {
  defaultValue?: string;
  value?: string;
  onChange?: (data: string) => void;
  onChangeJson?: (data: string) => void;
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
    ],
    [],
  );

  const buttonSaveExtension = useMemo(
    () => [
      ButtonExtension.configure({
        HTMLAttributes: {
          class: 'button',
        },
        renderHref: true,
      }),
      CardExtension.configure({
        class: 'custom_table_wrapper',
      }),
    ],
    [],
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
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
        defaultAlignment: 'justify',
      }),
      FontSizeExtension,
      EmailTemplateExtension,
      ...(params.isPreview ? buttonDisplayExtension : buttonSaveExtension),
      FontFamily,
      CustomTableExtension.configure({
        allowTableNodeSelection: true,
        resizable: true,
      }),
      TableHeader,
      CustomTableCell,
      CustomTableRow,
      ImagePlaceholder.configure({
        isPreview: params.isPreview,
        style: 'object-fit: cover; border-radius: 8px;',
        inline: true,
      }),
      CustomSectionExtension,
    ],
    [props.maxLength, buttonDisplayExtension, buttonSaveExtension],
  );

  const editor = useEditor({
    extensions: getExtensions({
      isPreview: true,
    }),
    onBlur: ({ editor }) => {
      const content = generateHTML(
        editor.getJSON(),
        getExtensions({ isPreview: false }),
      );
      props.onChange?.(content);
      props.onChangeJson?.(JSON.stringify(editor.getJSON(), null, 2));
    },
    content: props.defaultValue,
    editable: !props.readonly,
  });

  return (
    <div>
      {props.label && (
        <div className={`text-caption text-black mb-2 transition`}>
          {props.label}
        </div>
      )}
      <div
        className={classNames(styles.container, props.className)}
        data-testid={`${props.pageName}_contentsTextEditor`}
      >
        <Menubar editor={editor} />
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
    </div>
  );
}

import React from 'react';

import styles from './Menubar.module.css';
import { Editor } from '@tiptap/react';
import AddTableMenu from './AddTableMenu';
import AddButton from './AddButton';
import AddImage from './AddImage';
import Headings from './Headings';

const Menubar = (props: { editor: Editor | null }) => {
  const { editor } = props;

  return (
    <div className={styles.toolbar}>
      <Headings
        onSelectHeading={(size) => {
          editor?.chain().focus().setFontSize(size).run();
        }}
        currentFontSize={editor?.getAttributes('textStyle').fontSize}
      />
      <button
        onClick={() => {
          editor?.chain().focus().setTextHighlight('text-highlight').run();
        }}
      >
        Text Highlight
      </button>
      <button onClick={() => editor?.chain().focus().setParagraph().run()}>
        paragraph
      </button>
      |
      <button onClick={() => editor?.chain().focus().setBold().run()}>
        bold
      </button>
      <button onClick={() => editor?.chain().focus().setItalic().run()}>
        italic
      </button>
      <button onClick={() => editor?.chain().focus().setStrike().run()}>
        strike
      </button>
      <button onClick={() => editor?.chain().focus().setUnderline().run()}>
        underline
      </button>
      |
      <button
        onClick={() => {
          editor?.chain().focus().setTextAlign('left').run();
        }}
      >
        align left
      </button>
      <button
        onClick={() => {
          editor?.chain().focus().setTextAlign('center').run();
        }}
      >
        align center
      </button>
      <button
        onClick={() => {
          editor?.chain().focus().setTextAlign('right').run();
        }}
      >
        align right
      </button>
      |
      <AddTableMenu
        onAddTable={(rows, cols) => {
          editor?.chain().focus().insertTable({ rows, cols }).run();
        }}
      />
      <AddButton
        onAddButton={(text, href) => {
          editor?.commands.addButton({
            text,
            href,
          });
        }}
      />
      <input
        type="color"
        onChange={(event) => {
          props.editor?.chain().focus().setColor(event.target.value).run();
        }}
        value={props.editor?.getAttributes('textStyle').color ?? '#000000'}
        data-testid="setColor"
      />
      <AddImage
        onAddImage={(href) => {
          editor
            ?.chain()
            .focus()
            .addImagePlaceholder({ src: href, width: 50, height: 50 })
            .run();
        }}
      />
    </div>
  );
};

export default Menubar;

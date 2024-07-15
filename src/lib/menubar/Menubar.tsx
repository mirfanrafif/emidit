import React from 'react';

import styles from '../TextEditor.module.css';
import { Editor } from '@tiptap/react';
import AddTableMenu from './AddTableMenu';
import AddButton from './AddButton';
import AddImage from './AddImage';
import SetColorPopup from './SetColor';

const Menubar = (props: { editor: Editor | null }) => {
  const { editor } = props;

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  return (
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
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 4 }).run()
        }
      >
        h4
      </button>
      <button
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 5 }).run()
        }
      >
        h5
      </button>
      <button
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 6 }).run()
        }
      >
        h6
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

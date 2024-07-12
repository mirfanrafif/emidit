import React from "react";

import styles from "../TextEditor.module.css";
import { Editor } from "@tiptap/react";
import AddTableMenu from "./AddTableMenu";
import AddButton from "./AddButton";

const Menubar = (props: { editor: Editor | null }) => {
  const { editor } = props;

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
          editor?.chain().focus().setTextAlign("left").run();
        }}
      >
        align left
      </button>

      <button
        onClick={() => {
          editor?.chain().focus().setTextAlign("center").run();
        }}
      >
        align center
      </button>

      <button
        onClick={() => {
          editor?.chain().focus().setTextAlign("right").run();
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
    </div>
  );
};

export default Menubar;

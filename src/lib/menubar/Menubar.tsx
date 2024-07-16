import styles from './Menubar.module.css';
import { Editor } from '@tiptap/react';
import AddTableMenu from './AddTableMenu';
import AddButton from './AddButton';
import AddImage from './AddImage';
import Headings from './Headings';
import IconBold from '../icons/icon_bold';
import IconItalic from '../icons/icon_italic';
import IconUnderline from '../icons/icon_underline';
import TextAlignPopup from './TextAlign';
import IconStrikethrough from '../icons/icon_strikethrough';
import SectionPopup from './Sections';

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
      <SectionPopup editor={editor} />
      <button onClick={() => props.editor?.chain().focus().setBold().run()}>
        <IconBold />
      </button>
      <button onClick={() => props.editor?.chain().focus().setItalic().run()}>
        <IconItalic />
      </button>
      <button onClick={() => props.editor?.chain().focus().setStrike().run()}>
        <IconStrikethrough />
      </button>
      <button
        onClick={() => props.editor?.chain().focus().setUnderline().run()}
      >
        <IconUnderline />
      </button>
      <TextAlignPopup editor={editor} />

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
        className={styles.colorInput}
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

import { Editor } from '@tiptap/react';
import React from 'react';
import styles from './Menubar.module.css';
import IconTextAlignCenter from '../icons/icon_text_align_center';
import IconTextAlignLeft from '../icons/icon_text_align_left';
import IconTextAlignRight from '../icons/icon_text_align_right';

const TextStylePopup = (props: { editor: Editor | null }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const getIcon = (align: string) => {
    switch (align) {
      case 'left':
        return <IconTextAlignLeft />;
      case 'center':
        return <IconTextAlignCenter />;
      case 'right':
        return <IconTextAlignRight />;
      default:
        return <IconTextAlignLeft />;
    }
  };

  const getPopupContent = () => {
    return (
      <>
        <button
          onClick={() => {
            props.editor?.chain().focus().setTextAlign('left').run();
          }}
        >
          <IconTextAlignLeft />
        </button>
        <button
          onClick={() => {
            props.editor?.chain().focus().setTextAlign('center').run();
          }}
        >
          <IconTextAlignCenter />
        </button>
        <button
          onClick={() => {
            props.editor?.chain().focus().setTextAlign('right').run();
          }}
        >
          <IconTextAlignRight />
        </button>
      </>
    );
  };

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        {getIcon(props.editor?.getAttributes('textStyle').textAlign)}
      </button>

      {showPopup && <div className={styles.popup}>{getPopupContent()}</div>}
    </span>
  );
};

export default TextStylePopup;

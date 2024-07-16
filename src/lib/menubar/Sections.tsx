import React from 'react';

import styles from './Menubar.module.css';
import IconSection from '../icons/icon_section';
import { Editor } from '@tiptap/react';
import classNames from 'classnames';

const sections: {
  name: string;
  class: string;
}[] = [
  {
    name: 'Highlighted',
    class: 'text-highlight',
  },
];

const SectionPopup = (props: { editor: Editor | null }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        <IconSection />
      </button>

      {showPopup && (
        <div className={classNames(styles.popup)}>
          {sections.map((item) => (
            <div key={item.class} className={classNames(item.class)}>
              {item.name}
            </div>
          ))}
          <div>Paragraph</div>
        </div>
      )}
    </span>
  );
};

export default SectionPopup;

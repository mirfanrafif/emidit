import React from 'react';

import styles from './Menubar.module.css';

// 24, 20, 18, 16, 14, 12

const fontSizeList = [24, 20, 18, 16, 14, 12];

const Headings = (props: {
  currentFontSize: number;
  onSelectHeading: (size: number) => void;
}) => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        {props.currentFontSize ?? '16'}
      </button>

      {showPopup && (
        <div className={styles.popup}>
          {fontSizeList.map((fontSize) => (
            <button
              key={fontSize}
              onClick={() => {
                props.onSelectHeading(fontSize);
                setShowPopup(false);
              }}
            >
              {fontSize}
            </button>
          ))}
        </div>
      )}
    </span>
  );
};

export default Headings;

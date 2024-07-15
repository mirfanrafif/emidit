import React from 'react';

import styles from './Menubar.module.css';

// 24, 20, 18, 16, 14, 12

const headingLevels: {
  level: number;
  size: number;
}[] = [
  { level: 1, size: 24 },
  { level: 2, size: 20 },
  { level: 3, size: 18 },
  { level: 4, size: 16 },
  { level: 5, size: 14 },
  { level: 6, size: 12 },
];

const Headings = (props: {
  onSelectHeading: (level: number, size: number) => void;
}) => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        Headings
      </button>

      {showPopup && (
        <div className={styles.popup}>
          {headingLevels.map((heading) => (
            <button
              key={heading.level}
              onClick={() => {
                props.onSelectHeading(heading.level, heading.size);
                setShowPopup(false);
              }}
            >
              Heading {heading.level} ({heading.size}px)
            </button>
          ))}
        </div>
      )}
    </span>
  );
};

export default Headings;

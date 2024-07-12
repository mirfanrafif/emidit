import React from "react";

import styles from "./Menubar.module.css";

const SetColorPopup = (props: {
  currentColor: string;
  onSetColor: (href: string) => void;
}) => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [color, setColor] = React.useState(props.currentColor);

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        Set Color
      </button>

      {showPopup && (
        <div className={styles.popup}>
          <input
            type="color"
            placeholder="Color"
            value={props.currentColor}
            onChange={(e) => setColor(e.target.value)}
          />

          <button
            onClick={() => {
              props.onSetColor(color);
              setShowPopup(false);
            }}
          >
            Set Color
          </button>
        </div>
      )}
    </span>
  );
};

export default SetColorPopup;

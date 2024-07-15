import React from 'react';

import styles from './Menubar.module.css';

const AddImage = (props: { onAddImage: (href: string) => void }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const [tableData, setTableData] = React.useState({
    href: '',
  });

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        Add Image
      </button>

      {showPopup && (
        <div className={styles.popup}>
          <input
            type="text"
            placeholder="Link"
            value={tableData.href}
            onChange={(e) =>
              setTableData({ ...tableData, href: e.target.value })
            }
          />

          <button
            onClick={() => {
              props.onAddImage(tableData.href);
              setShowPopup(false);
            }}
          >
            Add Table
          </button>
        </div>
      )}
    </span>
  );
};

export default AddImage;

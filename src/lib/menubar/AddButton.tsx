import React from 'react';

import styles from './Menubar.module.css';

const AddButton = (props: {
  onAddButton: (text: string, href: string) => void;
}) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const [tableData, setTableData] = React.useState({
    text: '',
    href: '',
  });

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        Add Button
      </button>

      {showPopup && (
        <div className={styles.popup}>
          <input
            type="text"
            placeholder="Text"
            value={tableData.text}
            onChange={(e) =>
              setTableData({ ...tableData, text: e.target.value })
            }
          />
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
              props.onAddButton(tableData.text, tableData.href);
              setShowPopup(false);
            }}
          >
            Add Button
          </button>
        </div>
      )}
    </span>
  );
};

export default AddButton;

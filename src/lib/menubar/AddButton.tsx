import React from 'react';

import styles from './Menubar.module.css';
import IconButton from '../icons/icon_button';

const AddButton = (props: {
  onAddButton: (text: string, href: string) => void;
}) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const [tableData, setTableData] = React.useState({
    text: '',
    href: '',
  });

  const [type, setType] = React.useState('button');

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        <IconButton />
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

          <select name="type">
            <option value="button">Button</option>
            <option value="anchor">Anchor</option>
          </select>

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

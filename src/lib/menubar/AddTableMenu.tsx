import React from "react";

import styles from "./Menubar.module.css";

const AddTableMenu = (props: {
  onAddTable: (rows: number, columns: number) => void;
}) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const [tableData, setTableData] = React.useState({
    rows: 3,
    columns: 3,
  });

  return (
    <span className={styles.addTableAnchor}>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className={styles.addTableButton}
      >
        Add Table
      </button>

      {showPopup && (
        <div className={styles.popup}>
          <input
            type="text"
            placeholder="Rows"
            value={tableData.rows}
            onChange={(e) =>
              setTableData({ ...tableData, rows: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Columns"
            value={tableData.columns}
            onChange={(e) =>
              setTableData({ ...tableData, columns: parseInt(e.target.value) })
            }
          />

          <button
            onClick={() => {
              props.onAddTable(tableData.rows, tableData.columns);
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

export default AddTableMenu;

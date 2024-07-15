import React from 'react';

import styles from './Menubar.module.css';

const AddTableMenu = (props: {
  onAddTable: (rows: number, columns: number) => void;
}) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const [tableData, setTableData] = React.useState({
    rows: '3',
    columns: '3',
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
              setTableData({ ...tableData, rows: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Columns"
            value={tableData.columns}
            onChange={(e) =>
              setTableData({ ...tableData, columns: e.target.value })
            }
          />

          <button
            onClick={() => {
              const row = parseInt(tableData.rows);
              const column = parseInt(tableData.columns);

              if (isNaN(row) || isNaN(column)) {
                alert('Please enter valid number of rows and columns');
                return;
              }
              props.onAddTable(row, column);
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

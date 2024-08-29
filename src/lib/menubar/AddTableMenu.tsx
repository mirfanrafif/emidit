import React from 'react';

import styles from './Menubar.module.css';
import IconTable from '../icons/icon_table';

const AddTableMenu = (props: {
  onAddTable: (rows: number, columns: number) => void;
  onAddRow: () => void;
  onAddColumn: () => void;
  onMergeCells: () => void;
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
        <IconTable />
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

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <button
              onClick={() => {
                props.onAddRow();
              }}
            >
              <i className="fa fa-plus"></i>
              Add Row
            </button>

            <button
              onClick={() => {
                props.onAddColumn();
              }}
            >
              <i className="fa fa-plus"></i>
              Add Column
            </button>

            <button
              onClick={() => {
                props.onMergeCells();
              }}
            >
              <i className="fa-regular fa-merge"></i>
              Merge Cells
            </button>
          </div>
        </div>
      )}
    </span>
  );
};

export default AddTableMenu;

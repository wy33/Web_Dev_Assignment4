import { useState } from 'react';

//////////////////////////////////////// BUTTONS ////////////////////////////////////////

function Button({value, onAddRowClick}) {
  return (
    <button className="add-row" onClick={onAddRowClick}>
      {value}
    </button>
  );
}

function Buttons() {
  let rows = 0;   // Rows counter
  let cols = 0;   // Columns counter

  function AddRow(value) {
    return (
      <button className="add-ro">
        {value}
      </button>
    );
  }

  return (
    <>
      <div className="buttons">
        <Button value={"Add Row"} onAddRowClick={() => AddRow(0)}/>
        <Button value={"Add Column"} onAddRowClick={() => AddRow(0)}/>
        <Button value={"Remove Row"} onAddRowClick={() => AddRow(0)}/>
        <Button value={"Remove Column"} onAddRowClick={() => AddRow(0)}/>

        <input type="color" id="color-picker" value="#00FF00"></input>

        <Button value={"Color All Cells"} onAddRowClick={() => AddRow(0)}/>
        <Button value={"Color All Uncolored Cells"} onAddRowClick={() => AddRow(0)}/>
        <Button value={"Clear"} onAddRowClick={() => AddRow(0)}/>
      </div>
    </>
  );
}



//////////////////////////////////////// GRID ////////////////////////////////////////

function Grid() {
  return (
    <table className="table">
      
    </table>
  );
}



//////////////////////////////////////// MAIN ////////////////////////////////////////

export default function Main() {
  const [rows, setRows] = useState(0);   // Rows counter
  const [cols, setCols] = useState(0);   // Columns counter

  function updateRows(value) {
    setRows(value)
  }

  return (
    <div className="main">
      <div className="buttons">
        <Buttons/>
      </div>

      <div className="grid">
        <Grid/>
      </div>
    </div>
  )
}
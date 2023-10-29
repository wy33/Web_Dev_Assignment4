import { useState } from 'react';


//////////////////////////////////////// BUTTONS ////////////////////////////////////////

function Button({value, onAddRowClick}) {
  return (
    <button className="button" onClick={onAddRowClick}>
      {value}
    </button>
  );
}

function ColorPicker({color, onChange}) {
  return (
    <input type="color" color={color} onChange={onChange}/>
  );
}

function Buttons() {
  console.log('start');
  const [rows, setRows] = useState(0);   // Rows counter
  const [cols, setCols] = useState(0);   // Columns counter
  const [color, setColor] = useState("#00FF00");
  console.log('vars');

  function AddRow() {
    setRows(rows + 1);
    console.log(rows);
  }

  function AddCol() {
    setCols(cols + 1);
    console.log(cols);
  }

  function RemRow() {
    setRows(rows - 1);
    console.log(rows);
  }

  function RemCol() {
    setCols(cols - 1);
    console.log(cols);
  }

  

  return (
    <>
      <div className="buttons">
        <Button value={"Add Row"} onAddRowClick={() => AddRow()}/>
        <Button value={"Add Column"} onAddRowClick={() => AddCol()}/>
        <Button value={"Remove Row"} onAddRowClick={() => RemRow()}/>
        <Button value={"Remove Column"} onAddRowClick={() => RemCol()}/>

        <ColorPicker value="color" color={color} onChange={setColor}/>

        <Button value={"Color All Cells"} onAddRowClick={() => AddRow(0)}/>
        <Button value={"Color All Uncolored Cells"} onAddRowClick={() => AddRow(0)}/>
        <Button value={"Clear"} onAddRowClick={() => AddRow(0)}/>
      </div>
    </>
  );
}



//////////////////////////////////////// GRID ////////////////////////////////////////

function Grid({rows, cols}) {


  return (
    <table className="table">
      
    </table>
  );
}



//////////////////////////////////////// MAIN ////////////////////////////////////////

export default function Main() {
  // const [rows, setRows] = useState(0);   // Rows counter
  // const [cols, setCols] = useState(0);   // Columns counter
  // const [color, setColor] = useColor

  // function updateRows(value) {
  //   setRows(value)
  // }

  return (
    <div className="main">
      <div className="buttons">
        <Buttons/>
      </div>

      <div className="grid">
        <Grid/>
      </div>
    </div>
  );
}
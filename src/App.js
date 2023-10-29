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



//////////////////////////////////////// GRID ////////////////////////////////////////

function Grid({rows, cols}) {
  return (
    <table className="table">
      
    </table>
  );
}



//////////////////////////////////////// MAIN ////////////////////////////////////////

export default function Main() {
  console.log('start');
  const [rows, setRows] = useState(0);            // Rows counter
  const [cols, setCols] = useState(0);            // Columns counter
  const [color, setColor] = useState("#00FF00");  // Color selected

  function AddRow() {
    const newRows = rows + 1;
    setRows(newRows);
  }

  function AddCol() {
    const newCols = cols + 1;
    setCols(newCols);
  }

  function RemRow() {
    const newRows = cols - 1;
    setRows(newRows);
  }

  function RemCol() {
    const newCols = cols - 1;
    setCols(newCols);
  }

  console.log(rows + " " + cols);

  

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
      <div className="grid">
        <Grid />
      </div>
    </>
  );
}




//////////////////////////////////////// MAIN ////////////////////////////////////////

// export default function Main() {
//   // const [rows, setRows] = useState(0);   // Rows counter
//   // const [cols, setCols] = useState(0);   // Columns counter
//   // const [color, setColor] = useColor

//   // function updateRows(value) {
//   //   setRows(value)
//   // }

//   return (
//     <div className="main">
//       <div className="buttons">
//         <Buttons/>
//       </div>

//       <div className="grid">
//         <Grid/>
//       </div>
//     </div>
//   );
// }
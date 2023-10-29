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

function Grid({ cellColors, onCellClick }) {
	//let cells = cellColors.map((r) => {

	//})
	return (
		<table className="table">
			
		</table>
	);
}



//////////////////////////////////////// MAIN ////////////////////////////////////////

export default function Main() {
	console.log('start');
	const [rows, setRows] = useState(0);						// Rows counter
	const [cols, setCols] = useState(0);						// Columns counter
	const [color, setColor] = useState("#00FF00");				// Color selected
	const [cells, setCells] = useState(new Array()); //cells

	function AddRow() {
		if (cols === 0 && rows === 0) { //edge case, when no grid, we make it, so both need to be set to 1
			setCols(1);
			setRows(1);
			const newCells = cells;
			newCells.push(["#FFFFFF"]);
			setCells(newCells);
			return;
		}
		const newRows = rows + 1;
		const newCells = cells;
		newCells.push(new Array(cols));
		newCells[rows].fill("#FFFFFF");
		setRows(newRows);
		setCells(newCells);
	}

	function AddCol() {
		if (cols === 0 && rows === 0) { //edge case, when no grid, we make it, so both need to be set to 1
			setCols(1);
			setRows(1);
			const newCells = cells;
			newCells.push(["#FFFFFF"]);
			setCells(newCells);
			return;
		}
		const newCols = cols + 1;
		const newCells = cells;
		for (let i = 0; i < rows; i++) {
			newCells[i].push("#FFFFFF");
		}
		setCols(newCols);
		setCells(newCells);
	}

	function RemRow() {
		if (rows === 0) {
			return;
		}
		else if (rows === 1) { //edge case, removing last row
			setCols(0);
			setRows(0);
			setCells(new Array());
			return;
		}
		const newRows = rows - 1;
		const newCells = cells.slice(0,-1);
		setRows(newRows);
		setCells(newCells);
	}

	function RemCol() {
		if (cols === 0) {
			return;
		}
		else if (cols === 1) { //edge case, removing last col
			setCols(0);
			setRows(0);
			setCells(new Array());
			return;
		}
		const newCols = cols - 1;
		const newCells = cells.map((x) => x.slice(0, -1)); //remove last element of each row
		setCols(newCols);
		setCells(newCells);
	}

	console.log(rows + " " + cols);
	console.log("cells: ");
	for (let i = 0; i < cells.length; i++) {
		console.log(cells[i]);
	}

	function onTableClick(evt) { //borrowed from DOM Gridmaker, takes the target of the event
		evt.target.setAttribute("bgcolor", color); //and sets an attribute, just regular JS
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
			<div className="grid">
				<Grid cellColors={cells} onCellClick={onTableClick} />
			</div>
		</>
	);
}




//////////////////////////////////////// MAIN ////////////////////////////////////////

// export default function Main() {
//     // const [rows, setRows] = useState(0);     // Rows counter
//     // const [cols, setCols] = useState(0);     // Columns counter
//     // const [color, setColor] = useColor

//     // function updateRows(value) {
//     //     setRows(value)
//     // }

//     return (
//         <div className="main">
//             <div className="buttons">
//                 <Buttons/>
//             </div>

//             <div className="grid">
//                 <Grid/>
//             </div>
//         </div>
//     );
// }
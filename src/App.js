import { useReducer, useState } from 'react';


//////////////////////////////////////// BUTTONS ////////////////////////////////////////

function Button({value, onButtonClick}) {
	return (
		<button className="button" onClick={onButtonClick}>
			{value}
		</button>
	);
}

function ColorPicker({color, onChange}) {
	return (
		<input type="color" value={color} onChange={(c) => onChange(c.target.value)}/>
	);
}



//////////////////////////////////////// GRID ////////////////////////////////////////

function Grid({ cellColors, onCellClick }) {
	let cells = new Array();
	for (let i = 0; i < cellColors.length; i++) {
		cells.push(new Array());
		for (let j = 0; j < cellColors[i].length; j++) {
			cells[i].push(
				<td bgcolor={cellColors[i][j]} onClick={() => onCellClick(i, j)}></td>
			);
		}
	}
	let content;
	return (
		<table className="table">
			<tbody>
				{cells.map((row) => {
					return (
						<tr>
							{row}
						</tr>
					)
				})}
			</tbody>
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
	const [, forceUpdate] = useReducer(x => x + 1, 0); //a way to force an update, we were having issues with it re-rendering correctly

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

	function onTableClick(i, j) { 
		const newCells = cells;
		newCells[i][j] = color;
		setCells(newCells);
		forceUpdate();
	}

	function colorAll() {
		const newCells = cells;
		for (let i = 0; i < newCells.length; i++) {
			newCells[i].fill(color);
		}
		setCells(newCells);
		forceUpdate();
	}
	function colorAllUncolored() {
		const newCells = cells;
		for (let i = 0; i < newCells.length; i++) {
			for (let j = 0; j < newCells[i].length; j++) {
				if (newCells[i][j] === "#FFFFFF" || newCells[i][j] === "#ffffff" || newCells[i][j] === "ffffff" || newCells[i][j] === "FFFFFF") {
					newCells[i][j] = color;
					//note that it should be #FFFFFF but I wanted to cover my bases
					//e.g. if the user selects white, it will set the colors to #ffffff (lowercase)
				}
			}
		}
		setCells(newCells);
		forceUpdate();
	}

	function clearAll() {
		const newCells = cells;
		for (let i = 0; i < newCells.length; i++) {
			newCells[i].fill("#FFFFFF");
		}
		setCells(newCells);
		forceUpdate();
	}

	return (
		<>
			<div className="buttons">
				<Button value={"Add Row"} onButtonClick={() => AddRow()}/>
				<Button value={"Add Column"} onButtonClick={() => AddCol()}/>
				<Button value={"Remove Row"} onButtonClick={() => RemRow()}/>
				<Button value={"Remove Column"} onButtonClick={() => RemCol()}/>

				<ColorPicker value={color} color={color} onChange={setColor}/>

				<Button value={"Color All Cells"} onButtonClick={() => colorAll()}/>
				<Button value={"Color All Uncolored Cells"} onButtonClick={() => colorAllUncolored()}/>
				<Button value={"Clear"} onButtonClick={() => clearAll()}/>
			</div>
			<div className="grid">
				<Grid cellColors={cells} onCellClick={onTableClick} />
			</div>
		</>
	);
}

import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            //We have to copy our previous array, DO NOT change the original (through reference value)
            // We are now updating in a immutable way, which is strongly recommended!
            const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];

            updatedGameBoard[rowIndex][colIndex] = 'X' //of O
            return updatedGameBoard;

        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {

    //logic to derive the gameboard (array of arrays) from this turns array:

    let gameBoard = initialGameBoard;

    //if turns is an empty array, this loop simply won't execute
    // turns is an object with 'square (nested: row, col) and 'player'
    for (const turn of turns) {
        //we are performing object destructuring twice here
        const { square, player } = turn
        const { row, col } = square

        gameBoard[row][col] = player;
        //we are deriving state here
    }


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         //We have to copy our previous array, DO NOT change the original (through reference value)
    //         // We are now updating in a immutable way, which is strongly recommended!
    //         const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];

    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol; //of O
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}
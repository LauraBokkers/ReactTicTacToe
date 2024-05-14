

export default function Log({ turns }) {

    return (
        <ol id="log">
            {turns.reverse().map((turn) => {
                return (<li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row + 1}, {turn.square.col + 1}
                </li>)
            })}
        </ol>
    )
}


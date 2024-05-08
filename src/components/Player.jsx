import { useState } from "react";


export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(editing => !editing);
        //when updating state based on the previous value, you should pass a function
        // You shouldn't do it like this: !isEditing
        //This is because the state update is scheduled by React to be performed in the future (not instant)
        // Using a function, you'll be guaranteed to work with the latest updated value
    }

    function handleChange(event) {
        setPlayerName(event.target.value);

    }


    let buttonCaption = "Edit"
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>;
        buttonCaption = "Save"
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    )
}
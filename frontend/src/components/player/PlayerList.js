import React from 'react';

function PlayerList({players, updateCurrentPlayer, ...props}) {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4>Players</h4>
                </li>
                {players.map( player => {
                    return <a
                        href="#!"
                        className="collection-item"
                        key={player._id}
                        onClick={updateCurrentPlayer.bind(this, player)}>
                        {player.firstName} {player.lastName}
                    </a>
                })}
            </ul>


        </div>
    );
}

export default PlayerList;
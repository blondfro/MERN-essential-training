import React from 'react';

function PlayerList({players, ...props}) {
    return (
        <div>
            {players.map( player => {
                return <div key={player.firstName}>{player.firstName}</div>
            })}
        </div>
    );
}

export default PlayerList;
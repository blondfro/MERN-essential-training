import React from "react";

function PlayerSingle({ player, ...props }) {
    return (
        <>
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-image">
              <span className="card-title">
                {player.firstName} {player.lastName}
              </span>
                </div>
                <div className="card-content">
                  <p>
                    Phone: {player.phone} - Email: {player.email}
                  </p>
                  <p>
                    Strength: {player.strength} - Endurance: {player.endurance}
                  </p>
                </div>
                <div className="card-content">
                  <p>
                    Team: {player.team}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default PlayerSingle;

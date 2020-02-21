import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import PlayerList from "./player/PlayerList";
import PlayerSingle from "./player/PlayerSingle";
import PlayerForm from "./player/PlayerForm";
import Menu from "./Menu";

function App () {

    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});

    useEffect( () => {
        const url = "http://localhost:4000/players";
        axios.get(url)
            .then((Response) => {
                setPlayers(Response.data)
            })
            .catch((error) => {
                console.log(error)
            });

    }, [players, currentPlayer]);

    function updateCurrentPlayer(item) {
        setCurrentPlayer(item)
    }


      return (
          <div className="container-fluid">
              <div className="row">
                  <div className="col s12">
                      <Menu />
                  </div>
              </div>
              <div className="row">
                  <div className="col s3">
                      <PlayerList
                          players = {players}
                          updateCurrentPlayer = {updateCurrentPlayer}
                      />
                  </div>
                  <div className="col s9">
                      <PlayerSingle player = {currentPlayer}/>
                  </div>
              </div>
              <div className="row">
                  <div className="col s12">
                      <PlayerForm/>
                  </div>
              </div>
          </div>
      );


}

export default App;

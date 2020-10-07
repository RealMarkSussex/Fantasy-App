import React, { useState, useEffect } from "react";
import Player from "../models/player";
import PlayerComponent from "./playerDetail";

const PlayerList = () => {
  const [players, setPlayers] = useState(new Array<Player>());

  useEffect(() => {
     assignPlayers(setPlayers);
  }, []);

    return (<div>
        {players.map((x) => <PlayerComponent player={x} key={x.id.toString()} />)}
    </div>);
};

async function getPlayers(): Promise<Array<Player>> {
  let response = await fetch(
    "http://127.0.0.1:5000/top5Players?positon=Defender&price=5.7"
  );
  let playersJson = await response.json();

  let players = new Array<Player>();
  playersJson.forEach(
    (playerJson: { name: string; form: string; pointsPerGame: string, id: Int32Array }) => {
      players.push(
        new Player(playerJson.name, playerJson.form, playerJson.pointsPerGame, playerJson.id)
      );
    }
  );
  console.log(players)
  return players;
}

const assignPlayers = async (
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>
) => {
  let players = await getPlayers();
  setPlayers(players);
};

export default PlayerList;

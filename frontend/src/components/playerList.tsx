import React, { useState, useEffect } from "react";
import Player from "../models/player";
import PlayerComponent from "./player"

const playerList = async () => {
    const [players, setPlayers] = useState(0);

    
    <PlayerComponent player={new Player("", "", "")}/>
}

async function getPlayers(): Promise<Array<Player>> {
    let response = await fetch(
      "http://127.0.0.1:5000/top5Players?positon=Defender&price=5.7"
    );
    let playersJson = await response.json();

    let players = new Array<Player>();
    playersJson.forEach((playerJson: { name: string; form: string; pointsPerGame: string; }) => {
        players.push(new Player(playerJson.name, playerJson.form, playerJson.pointsPerGame))
    });
    return players;
}
import React from "react";
import Player from "../models/player";
type PlayerProps = {
  player: Player;
};
const PlayerDetail = (props: PlayerProps) => {
  return (
    <div>
      <h1>{props.player.teamName}</h1>
      <h1>{props.player.toString()}</h1>
    </div>
  );
};

export default PlayerDetail;

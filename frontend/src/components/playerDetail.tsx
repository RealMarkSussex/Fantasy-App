import React from 'react';
import Player from '../models/player'
type PlayerProps = {
    player: Player
}
const PlayerDetail = (props: PlayerProps) => {
    return <h1>{props.player.toString()}</h1>
}

export default PlayerDetail;
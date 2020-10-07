import React from 'react';
import Player from '../models/player'
type PlayerProps = {
    player: Player
}
const player = (props: PlayerProps) => {
    return <h1>{props.player}</h1>
}

export default player;
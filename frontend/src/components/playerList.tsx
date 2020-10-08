import React, { useState } from "react";
import Player from "../models/player";
import PlayerComponent from "./playerDetail";
import { Button, Form, Container } from "react-bootstrap";

const PlayerList = () => {
  const [players, setPlayers] = useState(new Array<Player>());
  const [position, setPosition] = useState("Goalkeeper");
  const [price, setPrice] = useState(0.0);

  return (
    <Container>
      <h1>
        Enter position and price to get the top 5 players with that price and
        position!
      </h1>
      <Form
        onSubmit={(event) => handleSubmit(event, setPlayers, position, price)}
      >
        <Form.Group controlId="formPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            as="select"
            defaultValue="choose..."
            onChange={(event) => setPosition(event.target.value)}
          >
            <option>Goalkeeper</option>
            <option>Defender</option>
            <option>Midfielder</option>
            <option>Forward</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type in player price"
            onChange={(event) => setPrice(parseFloat(event.target.value))}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get da BEST Playas
        </Button>
      </Form>
      {players.map((x) => (
        <PlayerComponent player={x} key={x.id.toString()} />
      ))}
    </Container>
  );
};

async function handleSubmit(
  event: React.FormEvent<HTMLElement>,
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
  position: string,
  price: number
) {
  event.preventDefault();
  let players = await getPlayers(position, price);
  setPlayers(players);
}

async function getPlayers(
  position: string,
  price: number
): Promise<Array<Player>> {
  let response = await fetch(
    "http://127.0.0.1:5000/top5Players?position=" +
      position +
      "&price=" +
      price.toString()
  );
  let playersJson = await response.json();

  let players = new Array<Player>();
  playersJson.forEach(
    (playerJson: {
      name: string;
      totalPoints: string;
      pointsPerGame: string;
      id: Int32Array;
    }) => {
      players.push(
        new Player(
          playerJson.name,
          playerJson.totalPoints,
          playerJson.pointsPerGame,
          playerJson.id
        )
      );
    }
  );
  console.log(players);
  return players;
}

export default PlayerList;

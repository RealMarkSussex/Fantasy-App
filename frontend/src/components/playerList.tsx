import React, { useState } from "react";
import Player from "../models/player";
import PlayerComponent from "./playerDetail";
import { Button, Form, Container } from "react-bootstrap";

const PlayerList = () => {
  const [players, setPlayers] = useState(new Array<Player>());
  const [position, setPosition] = useState("Goalkeeper");
  const [price, setPrice] = useState(0.0);
  // useEffect(() => {
  //   assignPlayers(setPlayers);
  // }, []);

  return (
    <Container>
      <div>
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
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Get da BEST Playa
          </Button>
        </Form>
        {players.map((x) => (
          <PlayerComponent player={x} key={x.id.toString()} />
        ))}
      </div>
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
  console.log(price + position);
  let players = await getPlayers(position, price);
  setPlayers(players);
}

async function getPlayers(
  position: string,
  price: number
): Promise<Array<Player>> {
  let response = await fetch(
    "http://127.0.0.1:5000/top5Players?positon=" +
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

// const assignPlayers = async (
//   setPlayers: React.Dispatch<React.SetStateAction<Player[]>>
// ) => {
//   let players = await getPlayers();
//   setPlayers(players);
// };

export default PlayerList;

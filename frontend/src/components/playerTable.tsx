import Player from "../models/player";
import { Table } from "react-bootstrap";
import React from "react";

type PlayerTableProps = {
  players: Array<Player>;
};
const PlayerTable = (props: PlayerTableProps) => {
  let index = 0;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>Name</th>
          <th>Club</th>
          <th>Fixture Difficulty</th>
          <th>Form</th>
          <th>Mark Score</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player) => {
          index++;
          return (
            <tr key={player.id.toString()}>
              <td>{index}</td>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.teamName}</td>
              <td>{player.fixtureDifficulty}</td>
              <td>{player.form}</td>
              <td>{player.markScore}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PlayerTable;

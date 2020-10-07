class Player {
  name: String;
  totalPoints: string;
  pointsPerGame: string;
  id: Int32Array;

  constructor(
    name: string,
    totalPoints: string,
    pointsPerGame: string,
    id: Int32Array
  ) {
    this.name = name;
    this.totalPoints = totalPoints;
    this.pointsPerGame = pointsPerGame;
    this.id = id;
  }

  public toString = (): string => {
    return (
      this.name +
      ", total points: " +
      this.totalPoints +
      " , points per game: " +
      this.pointsPerGame
    );
  };
}

export default Player;

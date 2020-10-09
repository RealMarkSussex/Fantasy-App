class Player {
  name: String;
  totalPoints: string;
  pointsPerGame: string;
  id: Int32Array;
  teamName: string

  constructor(
    name: string,
    totalPoints: string,
    pointsPerGame: string,
    id: Int32Array,
    teamName: string
  ) {
    this.name = name;
    this.totalPoints = totalPoints;
    this.pointsPerGame = pointsPerGame;
    this.id = id;
    this.teamName = teamName;
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

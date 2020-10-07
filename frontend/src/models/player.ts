class Player {
  name: String;
  form: string;
  pointsPerGame: string;

  constructor(name: string, form: string, pointsPerGame: string) {
    this.name = name;
    this.form = form;
    this.pointsPerGame = pointsPerGame;
  }

  public toString = (): string => {
    return (
      this.name +
      ", form: " +
      this.form +
      " , points per game: " +
      this.pointsPerGame
    );
  };
}

export default Player;

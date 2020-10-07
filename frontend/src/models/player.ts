class Player {
  name: String;
  form: string;
  pointsPerGame: string;
  id: Int32Array;

  constructor(name: string, form: string, pointsPerGame: string, id: Int32Array) {
    this.name = name;
    this.form = form;
    this.pointsPerGame = pointsPerGame;
    this.id = id;
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

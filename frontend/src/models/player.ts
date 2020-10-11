class Player {
  name: String;
  form: Float32Array;
  fixtureDifficulty: Float32Array;
  id: Int32Array;
  teamName: string;
  markScore: Float32Array;

  constructor(
    name: string,
    form: Float32Array,
    fixtureDifficulty: Float32Array,
    id: Int32Array,
    teamName: string,
    markScore: Float32Array
  ) {
    this.name = name;
    this.form = form;
    this.fixtureDifficulty = fixtureDifficulty;
    this.id = id;
    this.teamName = teamName;
    this.markScore = markScore
  }
}

export default Player;

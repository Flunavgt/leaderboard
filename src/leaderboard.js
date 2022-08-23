export default class leaderboard {
  #leaderboard

  #gameName

  #id

  constructor(gameName, id) {
    this.#leaderboard = [];
    this.#gameName = gameName;
    this.#id = id;
  }

  addScore(name, score) {
    this.#leaderboard.push({
      name,
      score,
    });
  }

  refreshScoreB(leaderboard) {
    this.#leaderboard = leaderboard;
  }
}

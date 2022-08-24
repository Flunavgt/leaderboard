export default class leaderboard {
  #leaderboard

  #gameName

  #id

  constructor(gameName, id) {
    this.#leaderboard = [];
    this.#gameName = gameName;
    this.#id = id;
  }

  // eslint-disable-next-line class-methods-use-this
  async addScore(user, score, id, newurl) {
    const dataToSend = JSON.stringify({ score, user });
    const response = await fetch(`${newurl}games/${id}/scores/`, {
      mode: 'no-cors',
      credentials: 'include',
      method: 'POST',
      body: dataToSend,
      headers: {
        'content-type': 'application/json',
      },
    });

    return response.json();
  }
}

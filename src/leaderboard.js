export default class leaderboard {
  #leaderboard

  #gameName

  #id

  constructor(gameName, id) {
    this.#leaderboard = [];
    this.#gameName = gameName;
    this.#id = id;
  }

  async addScore(user, score, id, newurl) {
    const dataToSend = JSON.stringify({ "score": score, "user":`${user}`})
    const response = await fetch(`${newurl}games/${id}/scores/`, {
      mode: 'no-cors',
      credentials: 'include',
      method: 'POST',
      body: dataToSend,
      headers: {
        'content-type': 'application/json',
      } 
    }).catch(err => {
      console.log(err) });

    return response.json();
    // this.#leaderboard.push({
    //   user,
    //   score,
    // });
  }

  getScores(newurl, id) {
    fetch(`${newurl}/games/${id}/scores/`);
    const info = response.json();
    return info.result;
  }

  refreshScoreB(leaderboard) {
    this.#leaderboard = leaderboard;
  }
}

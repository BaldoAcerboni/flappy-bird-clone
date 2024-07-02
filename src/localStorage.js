import { bestScores } from "./index";
import { Record, Score } from "./classes";

export function checkLocalStorage() {
  if (localStorage.getItem("bestScores")) {
    const bestScores = setArrAsClassInstance(
      JSON.parse(localStorage.getItem("bestScores"))
    );
    return bestScores;
  } else {
    const bestScores = new Record();
    return bestScores;
  }
}

function setArrAsClassInstance(obj) {
  let arrInstance;
  let temp = [];
  for (let i = 0; i < obj.arr.length; i++) {
    let scoreInstance = setScoreAsClassInstance(obj.arr[i]);
    temp.push(scoreInstance);
  }
  arrInstance = new Record(temp);
  return arrInstance;
}

function setScoreAsClassInstance(score) {
  let instance = new Score(score.value, score.player);
  return instance;
}

export function updateLocalStorage() {
  localStorage.setItem("bestScores", JSON.stringify(bestScores));
}

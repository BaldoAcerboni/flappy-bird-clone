import { Cloud, Score } from "./classes";
import { bird, obsArr, cloudArr, bestScores } from "./index";
import {
  birdGlide,
  accelerate,
  renderNewObstacle,
  newObstacle,
  moveObs,
  moveCloud,
  moveCloudInt,
  accID,
  glideID,
  globalObsSpawnId,
  obsGenTime,
  nullifyObsGenTime,
} from "./intervals";
import { updateLocalStorage } from "./localStorage";
import pauseImg from "./img/pause_circle_40dp.svg";
import playImg from "./img/play_circle.svg";
import mountainsSvg from "./img/mountains.svg";
import birdSvg from "./img/bird.svg";

export let lastObsRng;
export let tempScore;
export let pauseTime;

export function renderBackground() {
  const background = document.createElement("main");
  const sun = document.createElement("div");
  const mountainsImg = new Image();

  background.id = "background";
  sun.id = "sun";
  mountainsImg.id = "mountains";

  mountainsImg.src = mountainsSvg;

  background.appendChild(sun);
  background.appendChild(mountainsImg);

  document.body.appendChild(background);
}

export function renderNewGameModal() {
  const background = document.getElementById("background");
  const ngBtn = document.createElement("button");
  const ngDiv = document.createElement("div");
  const infoPara = document.createElement("p");
  const title = document.createElement("p");
  const credits = document.createElement("p");

  ngBtn.id = "new-game-btn";
  ngDiv.id = "new-game-btn-cont";
  infoPara.id = "info";
  title.id = "title";
  credits.id = "credits";

  ngBtn.textContent = "NEW GAME";
  infoPara.textContent = `PRESS SPACE TO FLAP`;
  title.textContent = "FLAPPY BIRD";
  credits.innerHTML = `Cloud images by 
    <a href="https://www.freepik.com/free-vector/pack-flat-clouds_1000962.htm#fromView=search&page=1&position=10&uuid=7ad03838-dc45-4ca4-a7e6-6e0662ee7f14">
    Freepik.com</a>`;

  ngDiv.appendChild(ngBtn);
  ngDiv.appendChild(infoPara);
  ngDiv.appendChild(title);
  ngDiv.appendChild(credits);
  background.appendChild(ngDiv);

  ngBtn.addEventListener("click", deleteNewGameModal);
  ngBtn.addEventListener("click", renderNewGame);
  ngBtn.addEventListener("click", renderNewObstacle);

  generateScoreNodes();
}

function generateScoreNodes() {
  const ngDiv = document.getElementById("new-game-btn-cont");
  const topScores = document.createElement("ol");
  const tsTitle = document.createElement("h2");

  topScores.id = "top-scores";
  tsTitle.id = "scores-title";

  tsTitle.textContent = "TOP 10 best scores";

  topScores.appendChild(tsTitle);

  ngDiv.appendChild(topScores);

  if (tempScore) {
    const finalScore = document.createElement("p");
    const ngDiv = document.getElementById("new-game-btn-cont");
    finalScore.id = "final-score";

    finalScore.textContent = `FINAL SCORE: ${tempScore.getValue()}`;

    ngDiv.appendChild(finalScore);

    tempScore.getNode().remove();

    editPlayerName();
  } else {
    renderTop10();
  }
}

function editPlayerName() {
  const ngDiv = document.getElementById("new-game-btn-cont");

  if (bestScores.isTop10(tempScore)) {
    const nameModal = document.createElement("div");
    const title = document.createElement("h2");
    const textInput = document.createElement("input");
    const btn = document.createElement("button");

    bestScores.addScore(tempScore);
    bestScores.sortScores();

    nameModal.id = "name-modal";
    textInput.id = "name-input";
    btn.id = "submit-name";

    title.textContent = "Please input player name";
    btn.textContent = "CONFIRM";

    btn.style.display = "block";

    textInput.maxLength = "3";
    textInput.minLength = "3";

    nameModal.appendChild(title);
    nameModal.appendChild(textInput);
    nameModal.appendChild(btn);

    ngDiv.appendChild(nameModal);

    btn.addEventListener("click", createName);
  } else {
    renderTop10();
  }

  function createName(e) {
    const name = document.getElementById("name-input");

    if (name.value.length === 3) {
      tempScore.setPlayer(name.value);

      renderTop10();

      e.target.parentNode.remove();

      updateLocalStorage();
    } else return;
  }
}

function renderTop10() {
  const topScores = document.getElementById("top-scores");

  for (let i = 0; i < bestScores.arr.length; i++) {
    let score = document.createElement("li");

    score.className = "top10";

    score.textContent = `${bestScores.arr[i].getPlayer()}:
    ${bestScores.arr[i].getValue()}`;

    topScores.appendChild(score);
  }
}

export function renderNewGame() {
  const background = document.getElementById("background");
  let birdNode = new Image();
  let scoreNode = document.createElement("p");
  const pauseBtn = new Image();

  birdNode.id = "bird";
  scoreNode.id = "score";
  pauseBtn.id = "pause";
  pauseBtn.className = "pause-btn";

  birdNode.src = birdSvg;
  pauseBtn.src = pauseImg;

  background.appendChild(birdNode);
  background.appendChild(scoreNode);
  background.appendChild(pauseBtn);

  bird.setNode();
  bird.setPosY("");

  tempScore = new Score();
  tempScore.setNode();
  tempScore.updateScore();

  birdGlide();
  accelerate();
  pauseBtn.addEventListener("click", pause);
}

export function deleteNewGameModal(e) {
  e.target.parentNode.remove();

  const cloud1 = renderNewCloud(window.innerWidth * 0.75);
  const cloud2 = renderNewCloud(window.innerWidth * 0.5);
  const cloud3 = renderNewCloud(window.innerWidth * 0.25);

  moveCloudInt(cloud1);
  moveCloudInt(cloud2);
  moveCloudInt(cloud3);
}

export function gameOverConditions() {
  const background = document.getElementById("background");
  if (bird.getPosY() + 52 >= background.scrollHeight) {
    gameOverScreenRender();
  } else {
    for (let i = 0; i < obsArr.arr.length; i++) {
      let topNodeBSide =
        window.innerHeight -
        Number(obsArr.arr[i].getObsNode()[0].style.bottom.slice(0, -2));
      let bottomNodeTSide = Number(
        obsArr.arr[i].getObsNode()[1].style.top.slice(0, -2)
      );

      if (
        bird.getPosX() < obsArr.arr[i].getX() && //works
        bird.getPosX() + 50 > obsArr.arr[i].getX() && //works
        (bird.getPosY() < topNodeBSide || //works
          bird.getPosY() + 50 > bottomNodeTSide) //works
      ) {
        gameOverScreenRender();
      } else if (
        bird.getPosX() + 50 < obsArr.arr[i].getX() &&
        !obsArr.arr[i].getCleared()
      ) {
        obsArr.arr[i].setCleared();
        tempScore.increaseValue();
        tempScore.updateScore();
      }
    }
  }
}

export function gameOverScreenRender() {
  const background = document.getElementById("background");
  const pauseBtn = document.getElementById("pause");

  pauseBtn.removeEventListener("click", pause);
  window.removeEventListener("keydown", flap);

  pauseBtn.remove();

  background.className = "";

  clearInterval(accID);
  clearInterval(glideID);
  obsArr.resetDifficulty();

  bird.resetFallSpeed();

  bird.getNode().remove();

  for (let i = 0; i < obsArr.arr.length; i++) {
    obsArr.arr[i].getObsNode()[0].remove();
    obsArr.arr[i].getObsNode()[1].remove();
  }
  for (let j = 0; j < cloudArr.arr.length; j++) {
    cloudArr.arr[j].getNode().remove();
  }
  clearInterval(globalObsSpawnId);

  obsArr.clearAllIntervals();
  obsArr.removeAllObs();

  cloudArr.clearAllIntervals();
  cloudArr.removeAllClouds();

  renderNewGameModal();
}

export function calculateObsRng() {
  let rng;

  if (lastObsRng === undefined) {
    rng = Math.floor(Math.random() * 4); // 0 to 3
  } else {
    switch (lastObsRng) {
      case 0:
        rng = Math.floor(Math.random() * 2); // 0 || 1
        break;
      case 1:
        rng = Math.floor(Math.random() * 3); // 0 || 1 || 2
        break;
      case 2:
        rng = Math.floor(Math.random() * 3) + 1; // 1 || 2 || 3
        break;
      case 3:
        rng = Math.floor(Math.random() * 2) + 2; // 2 || 3
        break;
    }
  }
  lastObsRng = rng;
  return rng;
}

export function renderNewCloud(pos) {
  cloudArr.setLastY();

  const background = document.getElementById("background");
  const cloudPos = cloudArr.getLastY();
  const cloud = new Cloud(cloudPos);
  const cloudImg = new Image();

  cloud.setId();
  cloudImg.id = cloud.getId();

  background.appendChild(cloudImg);
  cloud.setNode(cloud.getId());

  cloud.setPosY();
  cloud.setImgSrc();

  cloudArr.addNewCloud(cloud);

  cloud.setInitialX(pos);
  cloud.getNode().style.right = cloud.getPosX() + "px";

  return cloud;
}

function pause() {
  const background = document.getElementById("background");
  const pauseModal = document.createElement("div");
  const unpauseBtn = new Image();
  const pauseBtn = document.getElementById("pause");

  pauseModal.id = "new-game-btn-cont";
  unpauseBtn.id = "play-btn";

  unpauseBtn.src = playImg;

  pauseTime = new Date();

  clearInterval(accID);
  clearInterval(glideID);
  clearInterval(globalObsSpawnId);
  obsArr.clearAllIntervals();
  cloudArr.clearAllIntervals();

  //this id is nulled because of first condition in newObstacle()
  // globalObsSpawnId = null;
  nullifyObsGenTime();

  pauseModal.appendChild(unpauseBtn);
  background.appendChild(pauseModal);

  window.removeEventListener("keydown", flap);
  pauseBtn.removeEventListener("click", pause);

  unpauseBtn.addEventListener("click", unpause);
  //i think i am forgetting something else but do not know what
}

function unpause(e) {
  const deltaTime = pauseTime - obsGenTime;
  const pauseBtn = document.getElementById("pause");

  e.target.parentNode.remove();

  birdGlide();
  accelerate();

  for (let i = 0; i < obsArr.arr.length; i++) {
    moveObs(obsArr.arr[i]);
  }

  for (let i = 0; i < cloudArr.arr.length; i++) {
    moveCloudInt(cloudArr.arr[i]);
  }

  if (obsArr.getDifficulty() === 2) {
    setTimeout(newObstacle, 1000 - deltaTime);
  } else if (obsArr.getDifficulty() === 1) {
    setTimeout(newObstacle, 1500 - deltaTime);
  } else {
    setTimeout(newObstacle, 2000 - deltaTime);
  }

  flapEL();
  pauseBtn.addEventListener("click", pause);
}

//NEW MODULE FOR EVENT LISTENERS???

export function flapEL() {
  window.addEventListener("keydown", flap);
}

function flap(e) {
  if (e.key === " ") {
    bird.flap();
    clearInterval(accID);
    accelerate();
  }
}

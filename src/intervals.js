import { bird, obsArr, /*score,*/ cloudArr } from "./index";
import {
  gameOverConditions,
  pauseTime,
  calculateObsRng,
  flapEL,
  renderNewCloud,
  tempScore,
} from "./renderFuncs";
import { Obstacle } from "./classes";

let windowWidth;
let sunPosRight;

export let accID;
export let glideID;
export let globalObsSpawnId;
export let obsGenTime;

export function nullifyObsGenTime() {
  globalObsSpawnId = null;
}

export function birdGlide() {
  //bird.setPosX() is outside interval to calculate it only once instead of every 16 ms
  //since it is needed for gameOverConditions function and the x pos is fixed if
  //client window stays the same
  bird.setPosX();
  bird.resetFallSpeed();

  glideID = setInterval(() => {
    let newY = bird.getPosY() + bird.getSpeed();

    bird.setPosY(newY);
    bird.getNode().style.transform = `rotate(${bird.getSpeed() * 10}deg)`;

    gameOverConditions();
  }, 16);
  flapEL();
}

export function accelerate() {
  accID = setInterval(() => {
    bird.setFallSpeed();

    if (bird.getSpeed() >= 7) {
      clearInterval(accID);
    }
  }, 20);
}

export function renderNewObstacle() {
  globalObsSpawnId = setInterval(newObstacle, 2000);
}

export function newObstacle() {
  //first [if] condition checks for paused game
  if (!globalObsSpawnId) {
    switch (obsArr.getDifficulty()) {
      case 0:
        globalObsSpawnId = setInterval(newObstacle, 2000);
        break;
      case 1:
        globalObsSpawnId = setInterval(newObstacle, 1500);
        break;
      case 2:
        globalObsSpawnId = setInterval(newObstacle, 1000);
        break;
    }
  } else if (tempScore.value >= 49 && obsArr.getDifficulty() === 1) {
    clearInterval(globalObsSpawnId);
    obsArr.increaseDifficulty();
    globalObsSpawnId = setInterval(newObstacle, 1000);
  } else if (tempScore.value >= 9 && obsArr.getDifficulty() === 0) {
    clearInterval(globalObsSpawnId);
    obsArr.increaseDifficulty();
    globalObsSpawnId = setInterval(newObstacle, 1500);
  }
  let obs = new Obstacle();
  const background = document.getElementById("background");
  let topNode = document.createElement("div");
  let bottomNode = document.createElement("div");
  let topId;
  let bottomId;
  let topHeight;
  let bottomHeight;

  let rng = calculateObsRng();

  obs.setObsId();
  [topId, bottomId] = obs.getObsId();
  topNode.id = topId;
  bottomNode.id = bottomId;
  topNode.className = "tob";
  bottomNode.className = "bob";

  background.appendChild(topNode);
  background.appendChild(bottomNode);

  [topHeight, bottomHeight] = obs.setObsHeight(rng);
  topNode.style.right = 0;
  bottomNode.style.right = 0;
  topNode.style.bottom = `${topHeight}px`;
  bottomNode.style.top = `${bottomHeight}px`;

  obs.setObsNode();
  obsArr.addNewObs(obs);
  moveObs(obs);
  obsGenTime = new Date();
}

export function moveObs(obs) {
  obs.setMoveId(
    setInterval(() => {
      if (obs.getX() > window.innerWidth) {
        clearInterval(obs.getMoveId());
        obs.getObsNode()[0].remove();
        obs.getObsNode()[1].remove();
        obsArr.removeFirstObs();
      }
      obs.setX();
      obs.moveX(obs.getX());
    }),
    17
  );
}

export function moveCloudInt(cloud) {
  const sun = document.getElementById("sun");
  windowWidth = window.innerWidth;
  sunPosRight = Number(
    window.getComputedStyle(sun).getPropertyValue("right").slice(0, -2)
  );
  cloud.setMoveId(setInterval(moveCloud, 17, cloud));
}

export function moveCloud(cloud) {
  const background = document.getElementById("background");

  if (cloud.getPosX() > windowWidth + 200) {
    clearInterval(cloud.getMoveId());
    cloud.getNode().remove();
    cloudArr.removeFirstCloud();

    let newCloud = renderNewCloud();

    moveCloudInt(newCloud);
  } else if (
    cloud.getPosX() > sunPosRight - 200 &&
    cloud.getPosX() < sunPosRight + 50 &&
    !cloud.getShadow() &&
    cloud.getClass() === "cloud high"
  ) {
    background.className = "shade";
    cloud.setShadow();
  } else if (
    (cloud.getPosX() < sunPosRight - 200 ||
      cloud.getPosX() > sunPosRight + 50) &&
    cloud.getShadow() &&
    cloud.getClass() === "cloud high"
  ) {
    background.className = "sunny";
    cloud.setShadow();
  }
  cloud.setX();
  cloud.moveX();
}

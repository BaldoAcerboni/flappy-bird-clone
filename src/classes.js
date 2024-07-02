import cloud1 from "./img/cloud1.svg";
import cloud2 from "./img/cloud2.svg";
import cloud3 from "./img/cloud3.svg";
import cloud4 from "./img/cloud4.svg";
import cloud5 from "./img/cloud5.svg";
import cloud6 from "./img/cloud6.svg";

export class Bird {
  constructor() {
    this.node;
    this.speed = 0;
    this.acc = 0.2;
    this.x;
  }

  //GETTERS

  getPosY() {
    return Number(
      window.getComputedStyle(this.node).getPropertyValue("top").slice(0, -2)
    );
  }
  getPosX() {
    return this.x;
  }
  getSpeed() {
    return this.speed;
  }
  getNode() {
    return this.node;
  }

  //SETTERS

  setNode() {
    this.node = document.getElementById("bird");
  }
  setPosY(pos) {
    this.node.style.top = `${pos}px`;
  }
  setPosX() {
    //give numerical value to x pos based on client's window size(from the right)
    this.x = Number(
      window
        .getComputedStyle(this.getNode())
        .getPropertyValue("right")
        .slice(0, -2)
    );
  }
  setFallSpeed() {
    this.speed += this.acc;
  }
  resetFallSpeed() {
    this.speed = 0;
  }
  flap() {
    if (this.speed >= 6) {
      this.speed = 0;
    } else if (this.speed >= 0) {
      this.speed -= 6;
    } else {
      this.speed = -6;
    }
  }
}

export class Obstacle {
  constructor() {
    this.topObsClass = "tob";
    this.bottomObsClass = "bob";
    this.topObsId;
    this.bottomObsId;
    this.topObsNode;
    this.bottomObsNode;
    this.topObsPos;
    this.bottomObsPos;
    this.obsSpeed = 1;
    this.x = 0;
    this.obsMoveId;
    this.cleared = false;
  }

  getObsId() {
    return [this.topObsId, this.bottomObsId];
  }
  getObsNode() {
    return [this.topObsNode, this.bottomObsNode];
  }
  getX() {
    return this.x;
  }
  getSpeed() {
    return this.obsSpeed;
  }
  getMoveId() {
    return this.obsMoveId;
  }
  getCleared() {
    return this.cleared;
  }

  setObsId() {
    this.topObsId = "t" + obsId;
    this.bottomObsId = "b" + obsId;

    obsId++;
  }
  setObsNode() {
    this.topObsNode = document.getElementById(this.topObsId);
    this.bottomObsNode = document.getElementById(this.bottomObsId);
  }
  //discrepancy between topObsPos(window.innerHeight * x) &
  //bottomObsPos(window.innerHeight * (1-x)) is due to the fact that topObsPos
  //needs the bottom property while bottomObsPos needs top property
  setObsHeight(rng) {
    if (rng === 0) {
      this.topObsPos = window.innerHeight * 0.75;
      this.bottomObsPos = window.innerHeight * 0.25 + 200;
    } else if (rng === 1) {
      this.topObsPos = window.innerHeight * 0.6;
      this.bottomObsPos = window.innerHeight * 0.4 + 200;
    } else if (rng === 2) {
      this.topObsPos = window.innerHeight * 0.45;
      this.bottomObsPos = window.innerHeight * 0.55 + 200;
    } else {
      this.topObsPos = window.innerHeight * 0.3;
      this.bottomObsPos = window.innerHeight * 0.7 + 200;
    }
    return [this.topObsPos, this.bottomObsPos];
  }
  setMoveId(id) {
    this.obsMoveId = id;
  }
  setX() {
    this.x += this.obsSpeed;
  }
  moveX(x) {
    this.topObsNode.style.right = `${x}px`;
    this.bottomObsNode.style.right = `${x}px`;
  }
  setCleared() {
    this.cleared = true;
  }
}

export class ObsList {
  constructor() {
    this.arr = [];
    this.difficulty = 0;
  }

  //not very useful me thinks
  // getObs(a) {
  //   for (let i = 0; i < this.arr.length; i++) {
  //     if (this.arr[i] === a) {
  //       return this.arr[i];
  //     }
  //   }
  // }
  getDifficulty() {
    return this.difficulty;
  }

  addNewObs(a) {
    this.arr.push(a);
  }
  removeFirstObs() {
    this.arr.shift();
  }
  removeAllObs() {
    this.arr.splice(0, this.arr.length);
  }
  clearAllIntervals() {
    for (let i = 0; i < this.arr.length; i++) {
      clearInterval(this.arr[i].getMoveId());
    }
  }
  increaseDifficulty() {
    this.difficulty++;
  }
  resetDifficulty() {
    this.difficulty = 0;
  }
}

export class Score {
  constructor(val, pla) {
    this.value = val || 0;
    this.node;
    this.player = pla;
  }
  getValue() {
    return this.value;
  }
  getNode() {
    return this.node;
  }
  getPlayer() {
    return this.player;
  }

  increaseValue() {
    this.value++;
  }
  resetValue() {
    this.value = 0;
  }
  setNode() {
    this.node = document.getElementById("score");
  }
  updateScore() {
    this.getNode().innerText = `SCORE: ${this.value}`;
  }
  setPlayer(p) {
    this.player = p;
  }
}

export class Record {
  constructor(arr) {
    this.arr = arr || [];
  }
  getRecords() {
    return this.arr;
  }

  addScore(s) {
    if (s.value === 0) {
      return;
    } else if (this.arr.length < 10) {
      this.arr.push(s);
    } else if (s.value > this.arr[this.arr.length - 1].value) {
      this.arr.pop();
      this.arr.push(s);
    }
  }
  sortScores() {
    if (this.arr.length > 1) {
      this.arr.sort((a, b) => {
        return b.value - a.value;
      });
    }
  }
  isBestScore(s) {
    if (s > this.arr[0].value) {
      return true;
    }
    return false;
  }
  isTop10(s) {
    if (
      (this.arr.length < 10 || s.value > this.arr[this.arr.length - 1].value) &&
      s.value > 0
    ) {
      return true;
    }
    return false;
  }
}

export class Cloud {
  constructor(p) {
    this.p = p;
    this.posY;
    this.posX;
    this.node;
    this.id;
    this.speed = 1;
    this.class = "cloud";
    this.moveId;
    this.shadow = false;
  }

  getNode() {
    return this.node;
  }
  getPosY() {
    return this.posY;
  }
  getPosX() {
    return this.posX;
  }
  getId() {
    return this.id;
  }
  getClass() {
    return this.node.className;
  }
  getMoveId() {
    return this.moveId;
  }
  getShadow() {
    return this.shadow;
  }

  setNode() {
    this.node = document.getElementById(this.id);
  }
  setId() {
    this.id = `c${cloudId}`;
  }
  setInitialX(x) {
    if (x) {
      this.posX = x;
    } else {
      this.posX = -200;
    }
  }
  setX() {
    this.posX += this.speed;
  }
  moveX() {
    this.node.style.right = `${this.posX}px`;
  }
  setPosY() {
    if (this.p) {
      this.node.className = "cloud low";
    } else {
      this.node.className = "cloud high";
    }
  }
  setImgSrc() {
    let cloudNr = cloudId % 6;
    switch (cloudNr) {
      case 0:
        this.node.src = cloud1;
        break;
      case 1:
        this.node.src = cloud2;
        break;
      case 2:
        this.node.src = cloud3;
        break;
      case 3:
        this.node.src = cloud4;
        break;
      case 4:
        this.node.src = cloud5;
        break;
      case 5:
        this.node.src = cloud6;
        break;
    }
    //increase cloudId here because if increased in setId() it would mess it up
    //since it is necessary to call it before this method
    cloudId++;
  }
  setMoveId(id) {
    this.moveId = id;
  }
  setShadow() {
    this.shadow = !this.shadow;
  }
}

export class CloudList {
  constructor() {
    this.arr = [];
    this.lastY;
  }

  getLastY() {
    return this.lastY;
  }

  setLastY() {
    if (this.lastY === undefined) {
      this.lastY = Math.floor(Math.random() * 2);
    } else {
      this.lastY = !this.lastY;
    }
  }
  addNewCloud(c) {
    this.arr.push(c);
  }
  removeFirstCloud() {
    this.arr.shift();
  }
  removeAllClouds() {
    this.arr = [];
    cloudId = 0;
  }
  clearAllIntervals() {
    for (let i = 0; i < this.arr.length; i++) {
      clearInterval(this.arr[i].getMoveId());
    }
  }
}

export let obsId = 0;
export let cloudId = 0;

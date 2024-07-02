import "./style.css";
import { Bird, ObsList, CloudList } from "./classes";
import { renderNewGameModal, renderBackground } from "./renderFuncs";
import { checkLocalStorage } from "./localStorage";

export const bird = new Bird();
export const obsArr = new ObsList();
export const cloudArr = new CloudList();

export const bestScores = checkLocalStorage();

renderBackground();

renderNewGameModal();

//TO DO:
//gitHub upload(webpack)

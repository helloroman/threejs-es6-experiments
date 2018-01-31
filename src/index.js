import styles from "./styles/main.css";
import { Loader } from "./loader";
import { Animation as Animation_00 } from "./Anim_00/animation";
import { Animation as Animation_01 } from "./Anim_01/animation";
import { Animation as Animation_02 } from "./Anim_02/animation";
import { Animation as Animation_03 } from "./Anim_03/animation";

const animations = [Animation_00, Animation_01, Animation_02, Animation_03];

const menu = document.querySelector(".menu");

new Loader(Animation_00);

menu.addEventListener("click", e => {
  const root = document.getElementById("root");
  const canvas = document.getElementsByTagName("canvas");
  if (canvas[0]) {
    root.removeChild(canvas[0]);
  }
  let index = parseInt(e.target.dataset.anim);
  if (typeof animations[index] === "function") {
    const animation = new Loader(animations[index]);
  }
});

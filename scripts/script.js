console.clear();
console.log("starting...");
import { onload } from "./modules/onload.js";
import { cursor } from "./modules/cursorFollow.js";
import { movement } from "./modules/movement.js";
import { startGame } from "./modules/startGame.js";
// import { spriteAnimation } from "./modules/spriteAnimation.js";
var runningBound = false;
onload();
cursor();
movement();



// movement();
// spriteAnimation();
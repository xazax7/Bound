
import { collision } from "./collision.js";
import { startGame } from "./startGame.js";
export function onload() {
    console.log("loaded onload");
    let checkingCollision = window.setInterval(collision, 200);

    // When user clicks on the board
    var currClick = { left: 0, top: 0 };
    var currPos = 0;
    let newPos = 0;
    let moving = 0;
    let currBoundData;

    startGame();
    $(document).bind("contextmenu", function (e) {
        return false;
    });
}
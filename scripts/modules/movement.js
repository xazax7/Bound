import { calcDistance } from "./calcDistance.js";
import { spriteAnimation } from "./spriteAnimation.js";

import { findClickPos } from "./findClickPos.js";
import { findPcPos } from "./findPcPos.js";
import { step } from "./step.js";
export function movement() {
    var moving = false;
    var playerSpeed = 5;
    var playerStepFreq = 20;
    $(".board").mousedown(function (e) {
        // Find player position
        let pcPos = findPcPos();
        // Find click position
        let clickPos = findClickPos(e);

        // Find how large of steps to take horizontally and vertically (needed to travel in straight line / hypotenuse of rectangle)
        let { xStepSize, yStepSize, nSteps } = calcDistance(clickPos, pcPos, playerSpeed);

        // Change player character GIF for running/stopped, and mirror/rotate it
        spriteAnimation(clickPos, pcPos, "running");

        //   Delete any interval loop in order to restart it
        if (moving) {
            window.clearInterval(moving);
        }


        // Start traveling, take a 'step' each 40ms
        moving = window.setInterval(steppingLoop, playerStepFreq);

        // Take a step for as many steps as it "should" take (nSteps)
        let i = 0;
        // console.log(`i:${i}, nSteps:${nSteps}, xStepSize:${xStepSize}, yStepSize${yStepSize}, clickPos.left${clickPos.left}, pcPos.left${pcPos.left} ... clickpos.top${clickPos.top}  pcPos.top:${pcPos.top}`);

        function steppingLoop() {
            if (i < nSteps) {
                step(xStepSize, yStepSize);
                i++;
            } else {
                window.clearInterval(moving);
                console.log("stopped");
                spriteAnimation(clickPos, pcPos, "stopped");
            }
        }
    });
}
/* Unused
//   Start a new interval loop
        //   How to find the diagonal of a rectangle. for changing rotation of pic
        //   https://www.omnicalculator.com/math/diagonal-of-rectangle
        let d = Math.floor(
            Math.atan(Math.max(sideX, sideY) / Math.min(sideX, sideY)) * 100
        );
*/

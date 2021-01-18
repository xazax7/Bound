import { findPcPos } from "./findPcPos.js";

export function step(xStepSize, yStepSize) {
    let pcPos = findPcPos();
    let x = `${pcPos.left + xStepSize}px`;
    let y = `${pcPos.top + yStepSize}px`;
    $(".pc").css({ left: x, top: y });
    // console.log("stepped!")
    // console.log(x, y);
}
/*
export function step(clickPos, xStepSize, yStepSize) {

    console.log('clickpos' + clickPos);
    console.log('clickposl' + clickPos.left);

    // Update player position
    let pcPos = findPcPos();

    // This step will land player on newLeft and newTop x, y coords
    let newLeft = pcPos.left;
    let newTop = pcPos.top;
    // Moving right
    if (pcPos.left < clickPos.left) {
        newLeft = `${pcPos.left + xStepSize}px`;
    }
    // Moving left
    if (pcPos.left > clickPos.left) {
        newLeft = `${pcPos.left - xStepSize}px`;
    }
    // Moving down
    if (pcPos.top < clickPos.top) {
        newTop = `${pcPos.top + yStepSize}px`;
    }
    // Moving up
    if (pcPos.top > clickPos.top) {
        newTop = `${pcPos.top - yStepSize}px`;
    }
    // update player position
    $(".pc").css({ left: newLeft, top: newTop });

    // Check if player is there
    // checkProgress(pcPos, clickPos, moving);


}
*/
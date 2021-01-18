import { spriteAnimation } from "./spriteAnimation.js";
export function checkProgress(pcPos, clickPos, moving) {
    if (
        pcPos.left >= clickPos.left - 10 &&
        pcPos.left < clickPos.left + 10 &&
        pcPos.top >= clickPos.top - 6 &&
        pcPos.top < clickPos.top + 6
    ) {
        window.clearInterval(moving);
        console.log("stopped");
        spriteAnimation(clickPos, pcPos, "stopped");
    }
}
export function calcDistance(clickPos, pcPos, playerSpeed) {
    // console.log("trying to calc");
    //   Find pythagoreas a^2+b^2 = c^2
    let pythA = Math.pow(+clickPos.left - +pcPos.left, 2);
    let pythB = Math.pow(+clickPos.top - +pcPos.top, 2);
    //   Distance between PC position and click position / hypotenuse
    let distance = Math.abs(Math.sqrt(pythA + pythB));

    //   Distance between pos and click
    let stepSize = playerSpeed;

    stepSize = Math.floor(distance / stepSize);
    // Should have Abs()
    let sideX = clickPos.left - pcPos.left;
    let sideY = clickPos.top - pcPos.top;
    let xStepSize = sideX / stepSize;
    let yStepSize = sideY / stepSize;

    let nSteps = stepSize;


    return { xStepSize, yStepSize, nSteps };
}
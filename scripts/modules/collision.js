import { collisionCalc } from "./collisionCalc.js";
import { constructLevel } from "./constructLevel.js";
import { spawn } from "./spawn.js";

export function collision() {
    $.each($('.danger-tile'), function (i, loc) {
        if (collisionCalc($(".pc"), $(this))) {
            // console.log(`.cell_${loc}`);
            // pcTile = `${loc}`;
            // console.log("died on " + $(this).attr('name'));
            death();
        }
    });
    function death() {
        spawn();
    }



}
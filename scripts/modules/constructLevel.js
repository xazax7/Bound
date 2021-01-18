import { boundData } from "./boundData.js";
import { collision } from "./collision.js";
import { collisionCalc } from "./collisionCalc.js";
import { spawn } from "./spawn.js";

export function constructLevel(level) {
    var runningBound;





    // if (runningBound) {
    //     window.clearInterval(runningBound);
    // }


    // $(".board").empty();
    console.log("constructing level..." + level);
    let boundName = 'bound' + level;
    let currBoundData = boundData()[boundName];
    let walkingTiles = currBoundData.walkingTiles;

    // Create Tiles
    function createTiles() {
        let rows = currBoundData.rows;
        let columns = currBoundData.columns;
        for (let i = 0; i < rows; i++) {
            $(".play-area").append(`<div class="row row-${i}"></div>`);
            for (let j = 0; j < columns; j++) {
                let el = `<div class="cell cell-1 danger-tile cell_${i}-${j}" name="${i}-${j}" >${i}-${j}<br>row-${i}</div>`;
                $(`.row-${i}`).append(el);
            }
        }
    }

    // Set walkable tiles
    function pathTiles() {
        $.each(walkingTiles, function (index, loc) {
            $(`.cell_${loc}`).removeClass("danger-tile");
        });
    }


    let pc = $(".pc");
    let end = $(".end");
    let g = 0;
    function boundActive() {
        // Remove all kill tiles / temporary death tiles
        $('.kill-tile').removeClass("kill-tile");


        // Set timeout needed in order to re-apply class to show transition/animation
        setTimeout(function () {
            // Iterate through each tile within firingtiles[g]
            $.each(currBoundData.firingTiles[g], function (index) {
                let thisTile = $(`.cell_${currBoundData.firingTiles[g][index]}`)
                // Apply 'kill tile' style to all tiles within this set
                thisTile.addClass("kill-tile");
                // If player is on one of these tiles, kill
                if (collisionCalc(pc, thisTile)) {
                    spawn();
                }
            })
            g++;
            // If on the last iteration, restart it
            if (g == currBoundData.firingTiles.length) {
                g = 0;
            }
        }, 50);


        /*
        // Set timeout needed in order to re-apply class to show transition/animation
        setTimeout(function () {
            // Iterate through each tile within firingtiles[g]
            $.each(currBoundData.firingTiles[g], function (index) {
                let thisTile = $(`.cell_${currBoundData.firingTiles[g][index]}`)
                // Apply 'kill tile' style to all tiles within this set
                thisTile.addClass("kill-tile");
                // If player is on one of these tiles, kill
                if (collisionCalc(pc, thisTile)) {
                    spawn();
                }
            })
            g++;
            // If on the last iteration, restart it
            if (g == currBoundData.firingTiles.length) {
                g = 0;
            }
        }, 50);
*/



        if (collisionCalc(pc, end)) {
            // console.log("ksd");
            window.clearInterval(runningBound);
            $('.board').removeClass("glow");
            setTimeout(function () {
                $('.board').addClass("glow");
                $(".play-area").empty();
                constructLevel(++level);
                spawn();
            }, 500);
            // levelChange();

        }
    }

    createTiles();
    pathTiles();
    // Start Bound
    runningBound = window.setInterval(boundActive, currBoundData.speed);
}

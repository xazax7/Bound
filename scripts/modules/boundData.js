export function boundData() {
    let allBoundData = {
        bound0: {
            rows: 3,
            columns: 3,
            walkingTiles: ["1-0", "1-1", "1-2"],
            firingTiles: [["1-0"],
            ["1-1", "1-0"],

            ["1-2", "1-1", "1-0"]
            ],

            speed: 1200
        },
        bound1: {
            rows: 2,
            columns: 3,
            walkingTiles: ["0-0", "0-1", "1-1", "1-2"],
            firingTiles: [["0-0", "0-1"],
            ["1-1", "1-2"]],
            speed: 1000
        },
        bound2: {
            rows: 3,
            columns: 5,
            walkingTiles: [
                "2-0",
                "2-1",
                "2-2",
                "1-2",
                "0-2",
                "0-3",
                "0-4"
            ],
            firingTiles: [
                ["2-0"],
                ["2-1"],
                ["2-2"],
                ["empty"],
                ["0-2"],
                ["0-3"],
                ["0-4"]
            ],
            speed: 250
        },
        bound3: {
            rows: 3,
            columns: 4,
            walkingTiles: ["1-0", "1-1", "1-2", "1-3"],
            firingTiles: [
                ["1-3"],
                ["1-2"],
                ["1-1"],
                ["1-0"]],
            speed: 500
        },
        bound4: {
            rows: 3,
            columns: 5,
            walkingTiles: [
                ["0-0"],
                ["0-1"],
                ["0-2"],
                ["0-3"],
                ["0-4"],
                ["1-0"],
                ["1-1"],
                ["1-2"],
                ["1-3"],
                ["1-4"],
                ["2-0"],
                ["2-1"],
                ["2-2"],
                ["2-3"],
                ["2-4"]
            ],
            firingTiles: [
                [
                    "0-0",
                    "0-1",
                    "0-3",
                    "0-4",
                    "2-0",
                    "2-1",
                    "2-3",
                    "2-4"
                ],
                [
                    ["1-0"],
                    ["1-1"],
                    ["1-2"],
                    ["1-3"],
                    ["1-4"],
                    ["0-2"],
                    ["2-2"]
                ]
            ],
            speed: 1000
        },
        bound5: {
            rows: 2,
            columns: 5,
            walkingTiles: [
                ["0-0"],
                ["0-1"],
                ["1-1"],
                ["1-2"],
                ["1-3"],
                ["0-3"],
                ["0-4"]
            ],
            firingTiles: [

                ["0-0"],
                ["1-1"],
                ["1-3"],
                ["0-4"],
                ["empty"],
                ["empty"],
                [
                    "0-1",
                    "1-2",
                    "0-3"
                ]
            ],
            speed: 300
        },
        bound6: {
            rows: 3,
            columns: 5,
            walkingTiles: ["1-0", "1-1", "1-2", "1-3", "1-4", "0-1", "2-3"],
            firingTiles: [
                ["1-4"],
                ["1-3"],
                ["1-2"],
                ["1-1"],
                ["1-0"],
                ["empty"],
                ["empty"],
                ["0-1", "2-3"],
                ["empty"]
                ["empty"],
                ["empty"],
            ],
            speed: 300
        },
        bound7: {
            rows: 2,
            columns: 4,
            walkingTiles: [
                "0-0",
                "0-1",
                "0-2",
                "0-3",
                "1-0",
                "1-1",
                "1-2",
                "1-3"
            ],
            firingTiles: [
                [
                    "0-0",
                    "1-1",
                    "0-2",
                    "1-3"
                ],
                [
                    "1-0",
                    "0-1",
                    "1-2",
                    "0-3"
                ]
            ],
            speed: 1000
        }
    }
    // Can use ["empty"] for a pause
    return allBoundData;
}
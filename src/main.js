import kaboom from "kaboom";
import loadAssets from "./core/loadAssets";
import startGame from "./core/cookieClicker";
kaboom({
    width: 390,
    height: 690,
    canvas: document.getElementById("game"),
    background: [78, 137, 255],
    font: "sink",
    debug: true,
})

loadAssets()

startGame()
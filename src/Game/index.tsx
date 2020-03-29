import React, { useRef, useEffect } from "react";
import * as Phaser from "phaser";
import GameUIRenderer from "../GameUIRenderer";

let GameState: any = {}

GameState.Start = function() {
  console.log('starting')
}

GameState.Start.prototype.constructor = GameState.Start;

GameState.Start.prototype = {
  preload: function() {
  },
  create: function() {
    console.log('Start scene')
    var circle = new Phaser.Geom.Circle(400, 300, 100);

    var graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
    graphics.fillCircleShape(circle);
  }
}


const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game",
  backgroundColor: 0xffffff,
});

game.scene.add('MainMenu', GameState.Start)
game.scene.start('MainMenu');

renderUI();


export default function renderUI() {
  return (
    <div id="game">
      <GameUIRenderer
        game={game}
        scene={game.scene}
        gameWidth={game.config.width as number}
        gameHeight={game.config.height as number}
      />
    </div>
  );
}

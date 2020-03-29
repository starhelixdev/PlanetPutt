import React, { useEffect } from "react";
import { GameUI, MainMenu } from "../styles";
import * as Phaser from 'phaser'

interface IUIRenderer {
  game: Phaser.Game;
  scene: Phaser.Scenes.SceneManager;
  gameWidth: number;
  gameHeight: number;
}

export default function GameUIRenderer(props: IUIRenderer) {
  useEffect(() => {})

  function renderSceneUI() {
    // switch(){
    //   case 'StartScreen':
    //     return <StartMenu />
    //   case 'Lobby':
    //     return <LobbyOverview />
    // }
    return (
      <div>
        <p>The relevant Scene UI would be returned from this function.</p>
      </div>
    )
  }
  return (
    <GameUI width={props.gameWidth} height={props.gameHeight}>
      {renderSceneUI()}
    </GameUI>
  );
}

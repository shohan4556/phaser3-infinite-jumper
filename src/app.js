import Phaser from 'phaser'
import Game from './scenes/Game';
import { GameOver_Scene } from './Scripts/GameOver';

const config = {
    width: 480,
    height: 640,
    type: Phaser.AUTO,
    audio: {
      disableWebAudio: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        fps: 60,
        gravity: {y : 500},
        debug:false
      },
    },
    scene: [Game, GameOver_Scene]
  };
  

  const mygame = new Phaser.Game(config);



  // function preload(){
  //    console.log(banana.color);

  //   //this.load.image('card', imageUrl);
  //   //this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
  // }

  // function create(){
  //   this.add.image(300,300, 'card');
  // }
  
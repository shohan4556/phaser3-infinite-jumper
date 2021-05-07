import Phaser from 'phaser'
import imageUrl from "./public/sprites/card_hearts_A.png";
import Game from './scenes/Game';

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    audio: {
      disableWebAudio: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        fps: 60,
        gravity: {y : 0},
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };
  
  export const  game = new Phaser.Game(config);


  function preload(){
    this.load.image('card', imageUrl);
    //this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
  }

  function create(){
    this.add.image(300,300, 'card');
  }
  
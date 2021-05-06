import Phaser from 'phaser'

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
  };
  
  export const  game = new Phaser.Game(config);

  
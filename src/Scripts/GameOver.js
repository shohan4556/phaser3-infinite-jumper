class GameOver extends Phaser.Scene{
    constructor(){
        super('gameover')
    }

    create(){
        console.log('game-over scene');

        const width = this.scale.width;
        const height = this.scale.height;

        this.add.text(width * 0.5, height * 0.5, 'Game Over ! \nPress Space to Restart', {
            fontSize: 26
        }).setOrigin(0.5)

        this.input.keyboard.once('keydown-SPACE', ()=>{
            this.scene.start('game');
        });
    }
}

export const GameOver_Scene = GameOver;
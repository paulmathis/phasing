import Phaser from "phaser";
import images from './assets/*.png';

class MainScene extends Phaser.Scene {
  preload() {
    this.load.image("sky", images.sky);
    this.load.image("ground", images.ground);
    this.load.image("star", images.star);
    this.load.image("bomb", images.bomb);
    this.load.spritesheet("dude", images.dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(400, 300, "sky");
  }

  update() { }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MainScene],
};

class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener("load", () => {
  const game = new Game(config);
});

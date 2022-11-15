class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.loadImages();
    this.loadAduio();
  }
  loadImages() {
    //sprites
    this.load.image("player1", "assets/player1.png"); //Player 1 sprite
    this.load.image("soul", "assets/points.png"); //Points sprite (soul)
    // world sprites (grounds etc)
    this.load.image("ground1", "assets/ground2.png");
    this.load.image("ground2", "assets/ground2.png");
    // UI button images
    this.load.image("up_button", "assets/up_button.png");
    this.load.image("down_button", "assets/down_button.png");
    this.load.image("hover_button", "assets/hover_button.png");
  }
  loadAduio() {
    this.load.audio("soul_noise", "assets/soulNoise.mp3"); //points overlap sound
  }

  // with one scene, we would have preload, create, update all in one. but with multiscenes, only the first scene in the array(in main.js) will be active
  // to activate the next scenes we make another create methed and call the GameScene
  create() {
    this.scene.start("Game");
    // this.scene.start('Title');
    // this.scene.start('Home');
    // this.scene.start("Ui");
    // this.scene.start('Login');
  }
}

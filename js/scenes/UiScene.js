class UiScene extends Phaser.Scene {
  constructor() {
    super("Ui");
  }

  init() {
    // GameScene refrence
    this.gameScene = this.scene.get('Game');
    this.totalScore = 0;
  }

  create() {
    this.setUpUiElements();
    this.setUpEvents();
  }
  setUpUiElements() {
    this.soulIcon = this.add.image(15, 35, "soul");
    this.scoreLabel = this.add.text(30, 25,  `souls: ${this.totalScore}`, {
      font: "18px Arial",
      fill: "#fff",
    });
  }
  setUpEvents() {
    //listen for updateScore
    this.gameScene.events.on("updateScore", (score) => {
      this.totalScore += score
      this.scoreLabel.setText(`souls: ${this.totalScore}`);
    });
  }
}

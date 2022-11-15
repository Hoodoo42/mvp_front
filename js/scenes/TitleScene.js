class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {}

  create() {
    // create a title
    this.titleText = this.add.text(250, 100, "Soular Journey", {
      fontSize: "120",
      fill: "#fff",
    });
    this.titleText.setOrigin(0.5);
    this.titleText.setScale(3);

    // create login button
    this.button = this.add.image(240, 200, "up_button");
    // this.button.setScale(2);

    // make button interactive
    this.button.setInteractive();

    this.buttonText = this.add.text(0, 0, "Play", {
      fontSize: "26px",
      fill: "#fff",
    });
    Phaser.Display.Align.In.Center(this.buttonText, this.button);

    // with hover a hover image will replace up button
    this.button.on("pointerover", () => {
      this.button.setTexture("hover_button");
    });

    // when mouse moves away from button the up button will reappear
    this.button.on("pointerout", () => {
      this.button.setTexture("up_button");
    });

    // when mouse clicks button, it will take user to game
    this.button.on("pointerdown", () => {
      this.button.setTexture("down_button");
      this.scene.start("Game");
    });
  }
}

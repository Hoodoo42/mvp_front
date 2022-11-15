class UiButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key, hoverKey, text, targetCallback) {
    super(scene, x, y);

    this.scene = scene; //the scene this container will be added to
    this.x = x; // the x position of the container
    this.y = y; // the y position of the container
    this.key = key; //the background image of the button
    this.hoverKey = hoverKey; //the image of the button when player hovers button
    this.text = text; //text displayed on button
    this.targetCallback = targetCallback; //the function that will be called when button is clicked

    this.createButton(); //create Ui button
    this.scene.add.existing(this); //add container to phaser scene
  }

  createButton() {
    this.button = this.add.image(0, 0, "up_button");
    // this.button.setScale(2);

    // make button interactive
    this.button.setInteractive();
    // this.button.setScale(1.4);

    this.buttonText = this.add.text(0, 0, this.text, {
      fontSize: "24px",
      fill: "#fff",
    });
    Phaser.Display.Align.In.Center(this.buttonText, this.button);

    this.add(this.button);
    this.add(this.buttonText);

    // with hover a hover image will replace up button
    this.button.on("pointerover", () => {
      this.button.setTexture(this.hoverKey);
    });

    // when mouse moves away from button the up button will reappear
    this.button.on("pointerout", () => {
      this.button.setTexture(this.key);
    });

    // when mouse clicks button, it will take user to game
    this.button.on("pointerdown", () => {
      this.targetCallback();
    });
  }
}

class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);
    //  store a reference to the scene
    this.scene = scene;

    this.scene.physics.world.enable(this); //enables physics to the class
    // this.body.setCollideWorldBounds(true);
    this.setImmovable(false); //ensures player doesnt get moved when object collides with it
    this.scene.add.existing(this); //the player already exists, this code ties it to this class (add player to existing scene)
  }
  create() {}
  update(arrow) {
    if (arrow.left.isDown) {
      this.body.velocity.x = -100;
    } else if (arrow.right.isDown) {
      this.body.velocity.x = 100;
    } else {
      this.body.velocity.x = 0;
    }

    if (arrow.up.isDown && this.body.onFloor()) {
      this.body.velocity.y = -150;
    }

    this.body.gravity.y = 400;

    this.playerDie();
  }
  playerDie() {
    if (this.body.y > 360 || this.y < 0) {
      this.scene.scene.start("Game");
    }
  }
}

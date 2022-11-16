class Points extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key) {
    // takes the scene from where its created,  x y position of sprite,  key(name) and frame (if spritesheet).
    super(scene, x, y, key);
    //  store a reference to the scene
    this.scene = scene;
    this.souls = 1;

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }
  create() {}
}

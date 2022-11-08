class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.arrow = this.input.keyboard.createCursorKeys();
    this.player1 = new Player( this, 40, 290, "player1");
    // ADDING COLLISION BETWEEN PLAYER AND PLATFORM so player doesnt fall through ground.
    this.physics.add.collider(this.player1, this.ground);
    this.player1.body.gravity.y = 100;
    // this. allows player1 to be accessed in any method, and physics. enable the physics engine to be used on this sprite
    

    this.scoreLabel = this.add.text(30, 25, "souls: 0", {
      font: "18px Arial",
      fill: "#fff",
    });
    this.score = 0;

    this.createWorld();
    // this.spawnSouls();

    this.soul = this.physics.add.sprite(300, 230, "soul");
  }
  update() {
    this.player1.update(this.arrow);

    // COLLECTING POINTS (SOULS)
    if (this.physics.overlap(this.player1, this.soul)) this.collectSoul();

    // adding a conditional for when the player is out of bounds, game restarts
  }
  createWorld() {
    this.ground = this.physics.add.staticGroup();

    this.ground.create(300, 324, "ground2");
    this.ground.create(180, 324, "ground2");
    this.ground.create(92, 324, "ground1");
  }

  collectSoul() {
    this.soul.destroy();
    this.score += 1;
    this.scoreLabel.setText("souls: " + this.score);
  }
}

// this scene will hold the logic for gameplay. It will have the create of objects and send updates to their counterparts in other scenes.

class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    // this. allows player1 to be accessed in any method, and physics. enable the physics engine to be used on this sprite

    this.player1 = new Player(this, 40, 290, "player1");
    this.player1.body.gravity.y = 100;
    this.arrow = this.input.keyboard.createCursorKeys();

    this.createWorld();
    // ADDING COLLISION BETWEEN PLAYER AND PLATFORM so player doesnt fall through ground.
    this.physics.add.collider(this.player1, this.ground);

    this.scoreLabel = this.add.text(30, 25, "souls: 0", {
      font: "18px Arial",
      fill: "#fff",
    });
    this.score = 0;

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

  playerDie(){
    if(this.player1.y > 360 || this.y < 0){
        this.scene.start("Boot");
    }
  }
}

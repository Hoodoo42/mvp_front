// this scene will hold the logic for gameplay. It will have the create of objects and send updates to their counterparts in other scenes.

class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  init() {
    //first called when scene initializes
    this.scene.launch("Ui"); //as the secondary scene being launched, it will render above GameScene. This runs Ui parellel with GameScene
    this.score = 0;
  }
  create() {
    this.createPlayer();
    this.createAudio();
    this.spawnSouls();
    this.createWorld();
    this.createUnstableWorld();
    this.createCollisions();
    this.createInputs();

    this.cameras.main.setBounds(0, 0, 800, 340);
    this.cameras.main.startFollow(this.player1);
  }
  update() {
    this.player1.update(this.arrow); //sends the arrow variable over the the Player class update. And calls the update for the player class


  }



  createPlayer() {
    this.player1 = new Player(this, 40, 282, "player1"); //this.player1 = this.physics.add.image(40, 290, "player1") -> new Player(this) has tied this sprite with the Player class
  }
  createAudio() {
    this.soulSound = this.sound.add("soul_noise");
  }
  spawnSouls() {
    this.collectionOfSouls = this.physics.add.group()
    

    this.collectionOfSouls.add( new Points (this, 400, 240, "soul"));
    this.collectionOfSouls.add( new Points (this, 580, 244, "soul"));
    this.collectionOfSouls.add( new Points (this, 780, 244, "soul"));
    

    this.spawnSoul();
  }
  spawnSoul(){
    const soul = new Points(this, 200, 250, "soul");
    this.collectionOfSouls.add(soul);

  }
  createWorld() {
    this.ground = this.physics.add.staticGroup();

    this.ground.create(180, 324, "ground2");
    this.ground.create(300, 324, "ground2");
    this.ground.create(380, 324, "ground2");
    this.ground.create(480, 324, "ground2");

    this.ground.create(600, 324, "ground2");
    this.ground.create(680, 324, "ground2");
    this.ground.create(780, 324, "ground2");
    this.ground.create(40, 324,  "ground2");
  }
  createUnstableWorld(){
    this.fallenGround = this.physics.add.staticGroup();
    
    this.fallenGround.create(95, 324, "ground1")
  }
  createCollisions() {
    this.physics.add.collider(this.player1, this.ground);
    this.physics.add.collider(this.player1, this.fallenGround);
    this.physics.add.overlap(this.player1, this.collectionOfSouls, this.collectSoul, null, this);
  }
  createInputs(){
    this.arrow = this.input.keyboard.createCursorKeys();

  }

  collectSoul(player1, soul) {
    this.soulSound.play(); //play soul sound when collects
    soul.destroy(); //destroy sprite image when collected
    this.events.emit("updateScore", soul.souls); //update the score in UI
    // console.assert(Points.souls !== undefined);
  
    let gamer_id = Cookies.get("gamer_id");
    let points = soul.souls;
    axios
      .request({
        url: "http://127.0.0.1:5000/api/points",
        method: "PATCH",
        headers: {
          gamer_id: gamer_id,
        },

        data: {
          points: points,
        },
      })
      .then((res) => res)
      .catch((err) => err);
  }
}

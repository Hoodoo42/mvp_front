

// creating a scene. This scene will contain the entire game. This scene has three methods

// USING THIS. WILL ALLOW ACCESS IN OTHER METHODS


class Main{

    // preload is called ONCE at the begining. Will load assets
    preload(){
        // this.load.tilemapTiledJSON('platform', 'assets/platform.json');

        // this will load the player sprite by its name and path
        this.load.image("player1", "assets/player1.png");
        this.load.image("ground1", "assets/one_ground.png");
        this.load.image("ground2", "assets/ground2.png");
        this.load.image("soul", "assets/points.png");
    }

    // create is called ONCE, AFTER preload. will initialize the scene(sprite position etc)
    create(){
    // this. allows player1 to be accessed in any method, and physics. enable the physics engine to be used on this sprite
        this.scoreLabel = this.add.text(30, 25, 'souls: 0', {font: '18px Arial', fill: '#fff'});
        this.score = 0;
        
        this.createWorld();
        // this.spawnSouls();
        this.arrow = this.input.keyboard.createCursorKeys();

        this.player1 = this.physics.add.sprite(40, 290, 'player1');
        this.player1.body.gravity.y = 100;

        this.soul = this.physics.add.sprite(300, 230, 'soul');
        

        

        
    }
    // update is called 60 times/second  after create and handles all the games logic like movements
    update() {
// ADDING COLLISION BETWEEN PLAYER AND PLATFORM so player doesnt fall through ground.
        this.physics.collide(this.player1, this.ground);
        this.movePlayer();
// COLLECTING POINTS (SOULS)
    if(this.physics.overlap(this.player1, this.soul))
        this.collectSoul()

// adding a conditional for when the player is out of bounds, game restarts
        if(this.player1.y > 400 || this.player1.y < 0){
            this.playerDie();
        }

        
    }


    collectSoul(){
        this.soul.destroy();
        this.score += 1;
        this.scoreLabel.setText('souls: ' + this.score) 
    }
    
    movePlayer(){
    if(this.arrow.left.isDown){
        this.player1.body.velocity.x = -100;
    }
    else if(this.arrow.right.isDown){
        this.player1.body.velocity.x = 100;
    }
    else {
        this.player1.body.velocity.x = 0;
    }

    if(this.arrow.up.isDown && this.player1.body.onFloor()){
        this.player1.body.velocity.y = -105;
    }
}

playerDie(){
    this.scene.start("main");
}
createWorld(){
    this.ground = this.physics.add.staticGroup();

    this.ground.create(300, 324, 'ground2');
    this.ground.create(180, 324, 'ground2');
    this.ground.create(92, 324, 'ground1');

}
// spawnSouls(){
//     this.souls = this.physics.add.sprite();

//     this.souls.create(300, 230, 'soul');
//     this.souls.create(200, 230, 'soul');
// }



}


// Phaser initialization. at the end of the js file.
let game = new Phaser.Game({
    width: 500,
    height: 340,
    physics: {default: 'arcade'}, 
    parent: 'game',
});

// add scene to game
game.scene.add("main", Main );
// start scene
game.scene.start("main");
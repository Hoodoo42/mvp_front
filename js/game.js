

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
    }

    // create is called ONCE, AFTER preload. will initialize the scene(sprite position etc)
    create(){
    // this. allows player1 to be accessed in any method, and physics. enable the physics engine to be used on this sprite

        this.createWorld();
        this.arrow = this.input.keyboard.createCursorKeys();

        this.player1 = this.physics.add.sprite(300, 200, 'player1');
        this.player1.body.gravity.y = 100;

        

        
    }
    // update is called 60 times/second  after create and handles all the games logic like movements
    update() {
        this.physics.collide(this.player1, this.ground);
        this.movePlayer();
    }

    movePlayer(){
    if(this.arrow.left.isDown){
        this.player1.body.velocity.x = -200;
    }
    else if(this.arrow.right.isDown){
        this.player1.body.velocity.x = 200;
    }
    else {
        this.player1.body.velocity.x = 0;
    }

    if(this.arrow.up.isDown && this.player1.body.onFloor()){
        this.player1.body.velocity.y = -55;
    }
}

createWorld(){
    this.ground = this.physics.add.staticGroup();

    this.ground.create(300, 324, 'ground2');
    this.ground.create(180, 324, 'ground2');
    this.ground.create(92, 324, 'ground1');

}

}


// Phaser initialization. at the end of the js file.
let game = new Phaser.Game({
    width: 500,
    height: 340,
    physics: {default: 'arcade'}, 
    parent: 'game',
});

// add scene to game
game.scene.add('main', Main );
// start scene
game.scene.start('main');
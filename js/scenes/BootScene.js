class BootScene extends Phaser.Scene{
    constructor(){
        super('Boot');

       
    }


preload() {
    // loading in the user input form
    
     // this will load the sprite by its name and path
    this.load.image("up_button", "assets/up_button.png")
    this.load.image("down_button", "assets/down_button.png")
    this.load.image("hover_button", "assets/hover_button.png")

    this.load.image("ground1", "assets/one_ground.png");
    this.load.image("ground2", "assets/ground2.png");
    
    this.load.image("player1", "assets/player1.png");
    
    this.load.image("soul", "assets/points.png");
}   

// with one scene, we would have preload, create, update all in one. but with multiscenes, only the first scene in the array(in main.js) will be active
// to activate the next scenes we make another create methed and call the GameScene
create(){
    
    this.scene.start('Title');
}



}
// creating a scene. This scene will contain the entire game. This scene has three methods

// USING THIS. WILL ALLOW ACCESS IN OTHER METHODS





// spawnSouls(){
//     this.souls = this.physics.add.sprite();

//     this.souls.create(300, 230, 'soul');
//     this.souls.create(200, 230, 'soul');
// }




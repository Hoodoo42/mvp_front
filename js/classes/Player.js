class Player extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);
    //  store a reference to the scene
    this.scene = scene;

    this.scene.physics.world.enable(this);
    this.setImmovable(false);
    this.scene.add.existing(this);
   
  }
  update(arrow) {


    if (arrow.left.isDown) {
      this.body.velocity.x = -100;
    } else if (arrow.right.isDown) {
      this.body.velocity.x = 100;
    } else {
      this.body.velocity.x = 0;
    }

    if (arrow.up.isDown && this.body.onFloor()) {
      this.body.velocity.y = -100;
    }
    
   
    
  }
 
  
  }




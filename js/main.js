// type: tell phaser what rendering context to use. canvas, webgl or auto. 
// auto will try webgl first and if not available on the browser then canvas.

// width/height will be canvas element size
// scene: can be a single object (one scene), or an array - which allows multiple scenes that can run one or more at a time.
var config = {
    type: Phaser.AUTO,
    width: 500,
    height:340,
    scene: [ 
      BootScene,
      TitleScene,
      GameScene,
      UiScene,
    ],
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: {
          y: 0,
        },
      },
    },
  };

  var game = new Phaser.Game(config);
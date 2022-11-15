class HomeScene extends Phaser.Scene{
    constructor() {
        super("Home");
    }
    preload(){
    this.load.image('submit', 'assets/submit.png')
    
    }
    create(){
        this.Lbutton = this.add.image(250, 150, 'submit');
        this.Lbutton.setScale(5);

        this.Sbutton = this.add.image(250, 250, 'submit');
        this.Sbutton.setScale(5);
        
        this.signup = this.add.text(250, 250, 'Sign Up');
        this.login = this.add.text(250, 150, 'login');

        this.Lbutton.setInteractive();
        this.Lbutton.on('pointerdown', () => {
            this.scene.start('Login');
        })


        this.Sbutton.setInteractive();
        this.Sbutton.on('pointerdown', () => {
            this.scene.start('Signup');
        })
        // create login button

    // // create a play button
    // this.button = this.add.image(240, 200, 'up_button')
    // // this.button.setScale(2);

    // // make button interactive
    // this.button.setInteractive();

    // // with hover a hover image will replace up button
    // this.button.on('pointerover', () => {
    // this.button.setTexture('hover_button')
    // })

    // // when mouse moves away from button the up button will reappear
    // this.button.on('pointerout', () => {
    // this.button.setTexture('up_button')
    // })

    // // when mouse clicks button, it will take user to game
    // this.button.on('pointerdown', () => {
    // this.button.setTexture('down_button')
    // this.scene.start('Game')
    // })
    }
}


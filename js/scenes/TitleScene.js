class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {
    // this.load.html("userForm", "/userForm.html");
  }

  create() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
    <style>
  #user-form {
    display: grid;
    place-items: center;
    width: 120px;
    padding: 15px;
    background-color: #d62828;

    position: absolute;

    
  }
  #user-form input {
    padding: 10px;
    font-size: 20px;
    width: 100px;
  }
</style>

<div id="user-form">
  <input id="username" type="text" name="name" placeholder="username" />
  <input id="password" type="password" name="password" placeholder="password" />
  <button id="submit_signup">signUp</button>
</div>
`
    );

    document
      .getElementById("submit_signup")
      .addEventListener("click", function (event) {
           axios
              .request({
                url: "http://127.0.0.1:5000/api/gamer_login",
                method: "POST",
                data: {
                  username: document.getElementById('username').value,
                  password: document.getElementById('password').value,
                },
              })
              .then((res) => {
                res;
              })
              .catch((err) => {
                document.body.insertAdjacentHTML(
                  `afterbegin`,
                  `<h3>Error!</h3>`
                );
              });
        
      });

    // var input = this.add.dom(30, 30).createFromCache("userForm");

    // // input.setPerspective(800, 800);
    // input.addListener('click');

    // create a title
    this.titleText = this.add.text(250, 100, "Soular Journey", {
      fontSize: "120",
      fill: "#fff",
    });
    this.titleText.setOrigin(0.5);
    this.titleText.setScale(3);

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

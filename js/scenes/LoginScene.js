class LoginScene extends Phaser.Scene {
  constructor() {
    super("Login");
  }

  preload() {}
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
          top: 150px;
          left: 185px;
      
          
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
        <button id="submit_login">Login</button>
      </div>
      `
    );

    document.getElementById("submit_login").addEventListener("click", () => {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/gamer_login",
          method: "POST",
          data: {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
          },
        })
        .then((res) => {
          this.scene.start("Title");
          document.getElementById('user-form').remove();

          Cookies.set('gamer_token', res['data'][0][0]); //save gamer token retrieved in login
          Cookies.set('gamer_id', res['data'][0][1]); //save gamer id retrieced in login



        })
        .catch((err) => {
          document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
        });
    });

    this.titleText = this.add.text(250, 100, "Soular Journey", {
      fontSize: "120",
      fill: "#fff",
    });
    this.titleText.setOrigin(0.5);
    this.titleText.setScale(3);
  }
}

class SignupScene extends Phaser.Scene {
  constructor() {
    super("Signup");
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
        <button id="submit_signup">Sign Up</button>
      </div>
      `
    );

    document
      .getElementById("submit_signup")
      .addEventListener("click", function (event) {
        axios
          .request({
            url: "/api/gamer",
            method: "POST",
            data: {
              username: document.getElementById("username").value,
              password: document.getElementById("password").value,
            },
          })
          .then((res) => {
            scene.start('Title');
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

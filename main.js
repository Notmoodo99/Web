javascript;
document.addEventListener("DOMContentLoaded", function () {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (document.getElementById("loginForm")) {
    document
      .getElementById("loginForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let foundUser = users.find((user) => user.username === username);
        if (foundUser && foundUser.password === password) {
          localStorage.setItem("currentUser", JSON.stringify(foundUser));
          window.location.href = "loggedIn.html";
        } else {
          alert("Invalid username or password");
        }
      });
  }
  if (document.getElementById("registerForm")) {
    document
      .getElementById("registerForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        let newUser = {
          username: document.getElementById("newUsername").value,
          password: document.getElementById("newPassword").value,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! You can login now");
        window.location.href = "index.html";
      });
  }
  if (document.getElementById("welcomeMessage")) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      document.getElementById("welcomeMessage").textContent =
        "Hello, " + currentUser.username + "! Welcome!";
    } else {
      window.location.href = "index.html";
    }
  }
});

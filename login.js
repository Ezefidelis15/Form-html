// Grab elements
let container = document.getElementById("form-container");
let heading = document.getElementById("heading");
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let body = document.getElementById("body");


// style body
body.style.backgroundColor = "#343534ff";


// Style container
container.style.width = "300px";
container.style.margin = "100px auto";
container.style.padding = "20px";
container.style.borderRadius = "8px";
container.style.textAlign = "center";
container.style.backgroundColor = "#0d7104ff";

// style heading
heading.style.color= "#ffffffff";

// Style inputs
[username, password].forEach(input => {
  input.style.width = "90%";
  input.style.padding = "10px";
  input.style.margin = "5px 0";
  input.style.fontSize = "14px";
});

// Style button
loginBtn.style.padding = "10px 20px";
loginBtn.style.backgroundColor = "#0c9e2cff";
loginBtn.style.color = "white";
loginBtn.style.border = "1px solid black";
loginBtn.style.borderRadius = "5px";
loginBtn.style.cursor = "pointer";
loginBtn.style.fontSize = "16px";

// Button hover effect
loginBtn.onmouseover = () => loginBtn.style.backgroundColor = "#45a049";
loginBtn.onmouseout = () => loginBtn.style.backgroundColor = "#4CAF50";

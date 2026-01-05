// auth.js
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", user);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
});

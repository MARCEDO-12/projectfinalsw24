if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first");
     window.location.href = "./HTML/system.html";
     // back to login page
}

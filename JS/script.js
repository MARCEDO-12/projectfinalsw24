const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});
// ឆែកមើលថាបាន Login ឬនៅ? បើមិនទាន់ទេ បណ្តេញទៅកាន់ទំព័រ Login វិញ
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "../index.html"; 
}

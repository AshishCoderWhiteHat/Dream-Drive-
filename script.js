
//  Bootstrap Popovers
document.addEventListener("DOMContentLoaded", function () {

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

const popoverList = [...popoverTriggerList].map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl);
});

});



// Theme Toggle

const toggleBtn = document.getElementById("themeToggle");

if(toggleBtn){

if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark-mode");
toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", function () {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {
localStorage.setItem("theme", "dark");
toggleBtn.textContent = "☀️";
}
else {
localStorage.setItem("theme", "light");
toggleBtn.textContent = "🌙";
}

});

}



// Test Drive Form

const testForm = document.getElementById("testForm");

if(testForm){

testForm.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("testMsg").classList.remove("d-none");

});

}

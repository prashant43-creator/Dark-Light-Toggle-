let togglebtn = document.getElementById("toggle-btn")
let themeicon = document.getElementById("theme-icon");

function theme(){
  document.body.classList.toggle("dark-mode");
  let isdark = document.body.classList.contains("dark-mode");
  themeicon.textContent = isdark ? "☀️" : "🌙";
  localStorage.setItem("theme",isdark ? "dark" : "light")
  
  
}
togglebtn.addEventListener("click",theme );

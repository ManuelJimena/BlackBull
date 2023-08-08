import './style.css'
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";


const header = document.querySelector("header");
header.innerHTML = Header();
const main = document.querySelector("main");
main.innerHTML = Main();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", () => {
   const disclaimerButton = document.getElementById("disclaimerButton");
   const popup = document.querySelector(".disclaimer-popup");
   const overlay = document.querySelector(".overlay");
   const closeButton = popup.querySelector(".close-button"); // Agrega una clase a la "x"
 
   disclaimerButton.addEventListener("click", () => {
     popup.style.display = "block";
     overlay.style.display = "block";
   });
 
   overlay.addEventListener("click", () => {
     popup.style.display = "none";
     overlay.style.display = "none";
   });
 
   closeButton.addEventListener("click", () => {
     popup.style.display = "none";
     overlay.style.display = "none";
   });
 
   popup.addEventListener("click", (event) => {
     if (!event.target.closest(".disclaimer-popup-content")) {
       popup.style.display = "none";
       overlay.style.display = "none";
     }
   });
 });
 
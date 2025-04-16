import Home from "./home.js";

const content = document.querySelector('#content');

const HomePage = new Home();
content.appendChild(HomePage.render());
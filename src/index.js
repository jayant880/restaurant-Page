import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";

const content = document.querySelector('#content');

const homeButton = document.getElementById('Home');
const menuButton = document.getElementById('Menu');
const aboutButton = document.getElementById('About');


const HomePage = new Home();
content.appendChild(HomePage.render());

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    const HomePage = new Home();
    content.appendChild(HomePage.render());
})

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    const MenuPage = new Menu();
    content.appendChild(MenuPage.render());
})

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    const AboutPage = new About();
    content.appendChild(AboutPage.render());
})

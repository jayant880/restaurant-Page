import Home from "./components/home.js";
import Menu from "./components/menu.js";
import About from "./components/about.js";
import Footer from "./components/footer.js";

import "./styles/style.css";
import "./styles/homePage.css";
import "./styles/menuPage.css";
import "./styles/aboutPage.css";
import "./styles/footer.css";


const content = document.querySelector('#content');
const footerContainer = document.querySelector('#footer');
const homeButton = document.getElementById('Home');
const menuButton = document.getElementById('Menu');
const aboutButton = document.getElementById('About');


const footerCompnent = new Footer();
footerContainer.appendChild(footerCompnent.render());

function setActiveButton(button) {
    [homeButton, menuButton, aboutButton].forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

const homePage = new Home();
content.appendChild(homePage.render());

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    const homePage = new Home();
    content.appendChild(homePage.render());
    setActiveButton(homeButton);
});

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    const menuPage = new Menu();
    content.appendChild(menuPage.render());
    setActiveButton(menuButton);
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    const AboutPage = new About();
    content.appendChild(AboutPage.render());
    setActiveButton(aboutButton);
});

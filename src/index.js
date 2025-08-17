import "./style.css";
import home from './modules/home';
import menu from "./modules/menu";
import contact from "./modules/contact";

const pageController = (() => {
    let content = document.querySelector("#content"),
        buttons = document.querySelectorAll("header button"),
        activeButton = buttons[0];
    const buttonNameToPage = { "home": home, "menu": menu, "contact": contact };
    let homepageMenuButton;

    const init = () => {
        _changePage(home);
        homepageMenuButton = document.querySelector(".homepage button");
        _handleEvents();
    };

    const _getPage = (button) => {
        const moduleName = button.innerText.toLowerCase();
        const page = buttonNameToPage[moduleName];
        return page;
    };

    const _changePage = (page) => {
        content.innerHTML = "";
        content.appendChild(page);
    };

    const _handleNavButtons = () => {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                console.log(button.parentElement);
                activeButton.classList.toggle("active");
                activeButton = button;
                activeButton.classList.toggle("active");
                _changePage(_getPage(button));
            });
        });
    };

    const _handleHPMenuButton = () => {
        homepageMenuButton.addEventListener("click", () => {
            const navMenuButton = Array.from(buttons).find(button => button.textContent === "Menu");
            const ev = new Event("click");
            navMenuButton.dispatchEvent(ev);
        });
    };

    const _handleEvents = () => {
        _handleNavButtons();
        _handleHPMenuButton();
    };

    return { init };
})();

pageController.init();
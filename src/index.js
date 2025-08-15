import "./style.css";
import home from './modules/home';


const pageController = (() => {
    let content, buttons;

    const buttonNameToPage = {"home": home};

    const _cacheDom = () => {
        content = document.querySelector("#content");
        buttons = document.querySelectorAll("header>nav>button");
    }

    const init = () => {
        _cacheDom();
        _handleEvents();
    }

    const _getPage = (button) => {
        const moduleName = button.innerText.toLowerCase();
        const page = buttonNameToPage[moduleName];
        return page;
    }

    const _changePage = (page) => {
        content.innerHTML = "";
        content.appendChild(page);
    }

    const _handleEvents = () => {
        buttons.forEach(button => {
            button.addEventListener("click", () => _changePage(_getPage(button)));
        });
    };

    return {init};
})();

pageController.init();
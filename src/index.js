import "./style.css";
import home from './modules/home';
import menu from "./modules/menu";

const pageController = (() => {
    let content = document.querySelector("#content"), buttons;

    const buttonNameToPage = {"home": home, "menu": menu};

    const _cacheDom = () => {
        buttons = document.querySelectorAll("button");
    }

    const init = () => {
        _changePage(home);
        _cacheDom();
        _handleEvents();
    }

    const _getPage = (button) => {
        const moduleName = button.innerText.toLowerCase();
        const page = buttonNameToPage[moduleName];
        return page;
    }

    const _addActiveClass = (button) => {
        button.classList.toggle("active");
    }

    const _removeActiveFromButtons = () => {
        buttons.forEach(button => {
            if(button.classList.contains('active')) {
                button.classList.toggle('active');
            }
        });
    }

    const _changePage = (page) => {
        content.innerHTML = "";
        content.appendChild(page);
    }

    const _handleEvents = () => {
        buttons.forEach(button => {
            button.addEventListener("click", () => 
                {
                    _changePage(_getPage(button));
                    _removeActiveFromButtons();
                    _addActiveClass(button);
                });
        });
    };

    return {init};
})();

pageController.init();
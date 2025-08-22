const createHomePage = (() => {
    const homePage = document.createElement("div");
    homePage.classList.add("homepage");

    const welcome = document.createElement('h1');
    welcome.textContent = "Welcome to Purr & Pour Café";

    const checkMenu = document.createElement('h2');
    checkMenu.textContent = "Check our menu!";

    const button = document.createElement('button');
    button.textContent = "Menu";

    homePage.append(welcome, checkMenu, button);

    return homePage;
})();
export default createHomePage;

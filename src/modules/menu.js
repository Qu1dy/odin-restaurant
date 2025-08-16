class Category {
    constructor(name) {
        this.node = document.createElement("section");
        this.node.classList.add("category");

        const hrTop = document.createElement("hr");
        hrTop.classList.add("line");

        const hrBot = document.createElement("hr");
        hrBot.classList.add("line");

        const title = document.createElement("h2");
        title.textContent = name;

        this.list = document.createElement("dl");

        this.node.append(title, hrTop, this.list, hrBot);
    }

    addItem(name, desc) {
        const dt = document.createElement("dt");
        dt.textContent = name;
        const dd = document.createElement("dd");
        dd.textContent = ` - ${desc}`;
        this.list.append(dt, dd);

        const lineBreak = document.createElement("br");
        this.node.appendChild(lineBreak);
    }
}

const menuPage = document.createElement("div");
menuPage.classList.add("menupage");

const title = document.createElement("h1");
title.textContent = "Our menu";

const drinks  = new Category("Drinks");
drinks.addItem("Purrfect Latte", "classic latte with cat latte art");
drinks.addItem("Meowcchiato", "caramel macchiato with a paw-print drizzle");
drinks.addItem("Catpuccino", "frothy cappuccino topped with cocoa paw dusting");

const desserts = new Category("Desserts");
desserts.addItem("Pawprint Cookies", "shortbread with chocolate paw design");
desserts.addItem("Catnap Cheesecake", "fluffy cheesecake slice with a curled-cat chocolate garnish");
desserts.addItem("Meowffin", "blueberry or chocolate chip muffins with ear-shaped toppers");

menuPage.appendChild(title);
menuPage.appendChild(drinks.node);
menuPage.appendChild(desserts.node);

export default menuPage;
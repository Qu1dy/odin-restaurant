class Category {
    constructor(name) {
        this.node = document.createElement("div");
        this.node.classList.add("category");
        this.seperationLine = document.createElement("hr");
        this.seperationLine.classList.add("line");
        const h1 = document.createElement("h1");
        h1.innerText = name;
        this.node.appendChild(h1);
        this.node.appendChild(this.seperationLine.cloneNode());
    }

    addItem(name, desc) {
        const itemName = document.createElement("h2");
        itemName.innerText = name;
        const itemDesc = document.createElement("p");
        itemDesc.innerText = ` - ${desc}`;
        itemDesc.style.display = itemName.style.display = "inline";
        this.node.appendChild(itemName);
        this.node.appendChild(itemDesc);

        const lineBreak = document.createElement("br");
        this.node.appendChild(lineBreak);
    }

    get el() {
        this.node.appendChild(this.seperationLine);
        return this.node;
    }
}

const menuPage = document.createElement("div");
menuPage.classList.add("menupage");

const title = document.createElement("h1");
title.innerText = "Our menu";

const drinks  = new Category("Drinks");
drinks.addItem("Purrfect Latte", "classic latte with cat latte art");
drinks.addItem("Meowcchiato", "caramel macchiato with a paw-print drizzle");

const desserts = new Category("Desserts");
desserts.addItem("Pawprint Cookies", "shortbread with chocolate paw design");

menuPage.appendChild(title);
menuPage.appendChild(drinks.el);
menuPage.appendChild(desserts.el);

export default menuPage;
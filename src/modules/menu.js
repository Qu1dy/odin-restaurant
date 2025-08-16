import coffeeImg from "../assets/coffee.jpg";

const menuPage = document.createElement("div");
menuPage.classList.add("menupage");

const addCard = (itemTitle, itemDesc, imgSrc) => {
    const card = document.createElement("div");
    const img = document.createElement("img");
    img.src = imgSrc;
    img.width = 80;
    const title = document.createElement("h1");
    title.innerText = itemTitle;

    const desc = document.createElement("p");
    desc.innerText = itemDesc;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.classList.add("card");
    menuPage.appendChild(card);
}

for(let i =0;i<12;i++) {
    addCard("Pawfect Latte", "Velvety mocha with playful cat-themed foam art.",coffeeImg);
}

export default menuPage;
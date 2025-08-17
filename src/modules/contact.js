const formInput = (name, placeholder, type) => {
    const root = document.createElement("p");

    const label = document.createElement("label");
    label.setAttribute("for", name);
    label.innerText = name;
    let input;
    input = type === "textarea" ? document.createElement("textarea") : document.createElement("input");
    input.setAttribute("id", name);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("type", type);
    root.append(label, input);
    return root;
}

const contactPage = document.createElement("div");
contactPage.classList.add("contactpage");

const form = document.createElement("form");

const leg = document.createElement("legend");
leg.textContent = "Let's keep in touch!";

const name = formInput("Name", "Enter your name", "text");
const email = formInput("Email", "Enter email address", "email");
const message = formInput("Message", "Enter your message here", "textarea");

const button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Send";

form.append(leg, name, email, message, button);

contactPage.append(form);
export default contactPage;
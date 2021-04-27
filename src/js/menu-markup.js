import menu from "../menu.json";
import menuItemsTemplate from "../templates/menu-items.hbs";

const menuListRef = document.querySelector('.js-menu');
const markup = menuItemsTemplate(menu);

menuListRef.insertAdjacentHTML("beforeend", markup);
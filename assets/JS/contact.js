import { preloader, subMenu, dropDown} from "./main.js";

preloader();
subMenu();


let btnsDropDown = document.querySelectorAll('.mini-dropdown');

dropDown(btnsDropDown);
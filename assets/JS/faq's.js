import { preloader ,subMenu, dropDown} from "./main.js";
import { accardion } from "./main.js";

preloader();
accardion();
subMenu();


let btnsDropDown = document.querySelectorAll('.mini-dropdown');

dropDown(btnsDropDown);
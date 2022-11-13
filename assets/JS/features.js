import { preloader ,subMenu ,counterPlus ,dropDown} from "./main.js";

preloader();
subMenu();
counterPlus();



let btnsDropDown = document.querySelectorAll('.mini-dropdown');
dropDown(btnsDropDown);
import { preloader ,subMenu ,counterPlus} from "./main.js";

preloader();
subMenu();
counterPlus();

const btns = document.querySelectorAll('.pricing-footer a');
let popup = document.getElementById('popup-main');
let choise = document.querySelectorAll('#popup-main button');

btns.forEach(element => {
    element.addEventListener('click',function(e){
        e.preventDefault();
     popup.style.display = "block" 
     choise.forEach(button => {
        button.addEventListener('click',function(){
            if(button.className === "yes"){
                element.classList.add('active-choise')
                element.innerHTML = "OK";
                console.log(element.parentElement.parentElement.classList.add('ative'));
                popup.style.display = "none"
            }
            else{
                popup.style.display = "none"
            }
        })
    }); 
    })
});







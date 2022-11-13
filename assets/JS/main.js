
export function preloader(){
    const loader =document.getElementById("loader");
    const header = document.querySelector('header');
    const mainSector = document.querySelector('main');
    const footerSection =  document.querySelector('footer');
    setTimeout(() => {
        loader.classList.add('d-none');
        header.classList.remove('d-none');
        mainSector.classList.remove('d-none');
        footerSection.classList.remove('d-none');
    }, 1500);
}

export function accardion(){
    let cards = document.querySelectorAll('.card-header');
    cards.forEach(card => {
        card.addEventListener('click',function(){
            if(card.nextElementSibling.style.display === 'none'){
                card.nextElementSibling.style.display ='block'
            }
            else{
                card.nextElementSibling.style.display = 'none'
            }
        })
    });
}

export function subMenu(){
    let navMini= document.querySelector('.nav-mini');
    let hamburgerMenu = document.getElementById('menubar');
    
    hamburgerMenu.addEventListener('click',function(){
        if(navMini.style.display ==='none'){
            navMini.style.display = 'block'
        
        }
        else
        {
            navMini.style.display = 'none';
        }
    })
}

export function counterPlus(){
    let number = 0;
    let counter1 = document.querySelector(".counter-1");
    let counter2 = document.querySelector(".counter-2");
    let counter3 = document.querySelector(".counter-3");
    let counter4 = document.querySelector(".counter-4");    
        setInterval(() => {
            number++
            if(number<=96){
                counter1.innerHTML=number;
            }
            if(number<=190){
                counter2.innerHTML=number;
            }
            if(number<=12){
                counter3.innerHTML=number;
            }
            if(number<=46){
                counter4.innerHTML=number;
            } 
        }, 25);
}

export function dropDown(btns){
    btns.forEach(element => {
        element.addEventListener("click",function(e){
            e.preventDefault();
            if(this.parentElement.nextElementSibling.style.display === "none"){
                this.parentElement.nextElementSibling.style.display = "flex"
            }
            else{
                this.parentElement.nextElementSibling.style.display = "none"
            }
        })
        })
}









    





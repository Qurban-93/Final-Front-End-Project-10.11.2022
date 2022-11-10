import { preloader ,subMenu } from "./main.js";

preloader();
subMenu();

const comment = [];

let userComment = {
    
    name:"",
    comment:""
    
};


const inputs = document.querySelectorAll('.inputs');
const btn = document.querySelector('.btn-primary-line');
const commentdiv = document.querySelector('.comments');


btn.addEventListener('click',function(e){
    
    e.preventDefault();
   inputs.forEach(element => {
    if(element.id === 'name'){
        userComment.name = element.value ;
    }
    else if(element.id === 'comment'){
        userComment.comment = element.value
    }
   });
   comment.push(userComment);
   console.log(comment);
})



function addComment(){
    if(comment.length>0){
        comment.forEach(element => {
            const{name,comment} = element;
          
        });
    }
}











import { preloader ,subMenu, dropDown} from "./main.js";


preloader();
subMenu();


const inputs = document.querySelectorAll('.inputs');
const btn = document.querySelector('.btn-primary-line');
const commentdiv = document.querySelector('.comments');
let btnsDropDown = document.querySelectorAll('.mini-dropdown');

dropDown(btnsDropDown);


const commentAll =[];

let userComment ={};

let userCommentValue = {
    name:"",
    comment:""
};


if(localStorage){

    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    let day = new Date().getDate();

    JSON.parse(localStorage.getItem("commentArray")).forEach(element => {
        const{name,comment} = element;
        commentdiv.innerHTML += 
        `<div class="main-content">
        <div class="user-info m-0">
            <div class="avatar">
                <img src="http://demo.tempload.com/jirono/assets/images/photos/comment-avatar.png" alt="">
            </div>
            <div class="commentby">
            <strong>${name}</strong>
            <span> ${day} ${month} ${year}</span>
            <a href=""><i class="fa-solid fa-reply"></i>Reply</a>
            </div>
        </div>
        <p>${comment}
        </p>
    </div>`
    });
}




btn.addEventListener('click',function(e){
    e.preventDefault();
   inputs.forEach(element => {
    if(element.id === 'name'){
        userCommentValue.name = element.value ;
    }
    else if(element.id === 'comment'){
        userCommentValue.comment = element.value
    }
   });

   userComment = {...userCommentValue};

   commentAll.push(userComment);

   localStorage.setItem("commentArray",JSON.stringify(commentAll));


   let year = new Date().getFullYear();
   let month = new Date().getMonth()+1;
   let day = new Date().getDate();

   const {name,comment} = userComment;

   commentdiv.innerHTML += 
        `<div class="main-content">
        <div class="user-info m-0">
            <div class="avatar">
                <img src="http://demo.tempload.com/jirono/assets/images/photos/comment-avatar.png" alt="">
            </div>
            <div class="commentby">
            <strong>${name}</strong>
            <span> ${day} ${month} ${year} </span>
            <a href=""><i class="fa-solid fa-reply"></i>Reply</a>
            </div>
        </div>
        <p>${comment}
        </p>
    </div>`
})








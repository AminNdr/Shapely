btns = document.querySelectorAll('.readMorebtn');

function revealPara (event){
    let btn = event.target;
    let para = btn.previousElementSibling;
    para.style.height = '100px';
    btn.style.opacity = '0';
    btn.style.visibility = 'hidden' ;

}



for(let i = 0 ; i<btns.length; i++){
   btns[i].addEventListener('click' , revealPara);
}

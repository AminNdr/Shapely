let btn = document.getElementById('scrollBtn');

let scrollTop = () => {
    window.scrollTo(0, 0);
}




let showHideBtn = () => {
    let y = window.scrollY;
    let z = Math.floor (document.body.scrollHeight / 2); 
    if (y > z) {
         btn.style.visibility = "visible";
    }else {
        btn.style.visibility = "hidden";
    }
}


btn.addEventListener('click', scrollTop);
window.addEventListener('scroll' , showHideBtn);
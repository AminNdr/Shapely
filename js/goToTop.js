let btn = document.getElementById('scrollBtn');

let scrollTop = () => {
    window.scrollTo(0, 0);
}





let showHideBtn = () => {
    let y = window.scrollY;
    if (y > 500) {
         btn.style.visibility = "visible";
    }else {
        btn.style.visibility = "hidden";
    }
}


btn.addEventListener('click', scrollTop);
window.addEventListener('scroll' , showHideBtn);
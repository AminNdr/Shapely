// let seoBtn = document.getElementById('seo-readmore-btn');
// let seoCol = document.getElementById('seoCol');
// let seoMoreDesc = document.getElementById('seo-moreDesc');



// function hideBtn() {
//     seoBtn.style.visibility = 'hidden';
// }


// function showDesc() {

//     seoMoreDesc.style.visibility = "visible";
//     // seoMoreDesc.style.opacity = 1;

//     // var show = setInterval(function () {
//     //     let opc = seoMoreDesc.style.opacity;
//     //     let newOpc = Number.parseFloat(opc) + 0.2;
//     //     console.log(typeof(opc) + ' ' + opc);
        
//     //     seoMoreDesc.style.opacity = newOpc;
//     // }, 1000)

//     seoMoreDesc.style.height = "100px";
//     setTimeout(()=>{
//         seoMoreDesc.style.opacity = 1;
//     },1000)
// }

// const btnHandler = (event) =>{
// console.log(event.target)
// }
// document.getElementById('seo-readmore-btn').addEventListener('click',btnHandler);
// function incHeight() {

//     var limiter = 0;
//     var inc = setInterval(function () {
//         let height = seoCol.offsetHeight;
//         let newHeight = height + 1;
//         limiter++;
//         seoCol.style.height = newHeight + 'px';


//         if (limiter > 100) {
//             clearInterval(inc);
//         }
//     }, 10);

// }






// seoBtn.addEventListener('click', hideBtn);
// seoBtn.addEventListener('click', incHeight);









/* event deligation */ 



btns = document.querySelectorAll('.readMorebtn');

function revealPara (event){
    let btn = event.target;
    let para = btn.previousElementSibling;
    para.style.height = '100px';
    btn.style.opacity = '0';

}



for(let i = 0 ; i<btns.length; i++){
   btns[i].addEventListener('click' , revealPara);
}

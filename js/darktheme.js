let areas = document.querySelectorAll("section.themeArea");
let lightAreas = document.querySelectorAll('section.lightArea');
let darkAreas = document.querySelectorAll('section.darkArea');
let themeCheckBox = document.getElementById('themeCheckBox');


function changeTheme() {


    for (let i = 0; i < lightAreas.length; i++) {

        if (themeCheckBox.checked == true) {
            lightAreas[i].style.backgroundColor = '#0e1015';
            // lightAreas[i].style.color = '#fff';
          
        } else {
            lightAreas[i].style.backgroundColor = '#fff';
            
        }

    }

    for (let i = 0; i < darkAreas.length; i++) {
        if (themeCheckBox.checked == true){
            darkAreas[i].style.backgroundColor = '#fff';
        } else {
            darkAreas[i].style.backgroundColor = '#0e1015';
        }
    }
}



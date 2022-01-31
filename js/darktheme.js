let areas = document.querySelectorAll("section.themeArea");
let themeSelector = document.getElementById('themeSelector');
let checkedRadio = 'light';





themeSelector.addEventListener('change', function () {
    checkedRadio = document.querySelector('input[name=theme]:checked').value;
    changeThemeColor(checkedRadio);
})

function changeThemeColor(color) {
    if (color == 'dark'){
        for (let i = 0; i < areas.length; i++) {
    areas[i].style.backgroundColor = "#0e1015";
    areas[i].style.color = "#fff";
}
    }else{
        for (let i = 0; i < areas.length; i++) {
            areas[i].style.backgroundColor = "#fff";
            areas[i].style.color = "#000";
        }
    }
 
}





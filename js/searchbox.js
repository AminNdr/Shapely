let searchButton = document.getElementById('searchButton');
let searchBox = document.getElementById('searchBox');
let searchForm = document.getElementById('searchForm');


searchButton.addEventListener('click', ShowHide);
searchForm.addEventListener('submit', searchOnGoogle);








function ShowHide() {
    if (searchBox.style.visibility == 'hidden') {
        searchBox.style.visibility = 'visible';
        searchBox.value = '';
        searchButton.className = "fas fa-times text-primary";
        console.log('true');
    } else { 
        console.log('false');
        searchBox.style.visibility = 'hidden';
        searchButton.className = "fas fa-search text-primary";

    }

}














function searchOnGoogle(event) {
    event.preventDefault();
    window.open('http://google.com/search?q=' + searchBox.value);
}

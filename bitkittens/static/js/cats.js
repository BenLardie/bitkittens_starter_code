document.addEventListener("DOMContentLoaded", function() {
    const catButton = document.querySelector('.summon-cats');
    catButton.addEventListener('click', function() {
        axios.get('http://bitkittens.herokuapp.com/cats.json')
        .then((response) => {
        let divs = document.querySelectorAll('div');
        let catsList = response.data.cats;
        catsList.forEach( (cat, i=0) => {
        let img = document.createElement('img'); 
        img.src = catsList[i]['photo'];
        img.alt = catsList[i]['name'];
        divs[i].appendChild(img);
        i++;
        });
    });
})
});
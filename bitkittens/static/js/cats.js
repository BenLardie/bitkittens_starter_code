document.addEventListener("DOMContentLoaded", function() {
    const catButton = document.querySelector('.summon-cats');
    catButton.addEventListener('click', function() {
        axios.get('http://bitkittens.herokuapp.com/cats.json')
        .then((response) => {
        let div1 = document.querySelector('#cat1');
        let catsList = response.data.cats;
        let img = document.createElement('img');
        img.src = catsList[0]['photo']
        div1.appendChild(img)
        console.log('you clicked that button you dirty dog!');
    });
})
});
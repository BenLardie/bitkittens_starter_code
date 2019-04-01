document.addEventListener("DOMContentLoaded", function() {
    const catButton = document.querySelector('.summon-cats');
    catButton.addEventListener('click', function() {
        axios.get('http://bitkittens.herokuapp.com/cats.json')
        .then((response) => {
            console.log(response)
        })
        console.log('you clicked that button you dirty dog!');
    });
});

const url = 'https://swapi.dev/api/films'

const search = document.querySelector('input[type="search"]');
const output = document.querySelector('.output');

const movieList = document.createElement('ul');

output.append(movieList);

window.addEventListener('DOMContentLoaded', () => {
    loadData();
})

search.addEventListener('input', () => {
    filterMovies();
});

function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            addMoviesToPage(data);
        });
}

function addMoviesToPage(data) {
    let movies = data.results;

    movieList.classList.add("list-group");

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add("list-group-item");

        li.textContent = movie.title;

        li.addEventListener('click', () => {
            movieSelected(movie);
        })

        movieList.append(li);

    });
}

function movieSelected(movie) {
    window.sessionStorage.setItem('movie', JSON.stringify(movie));
    window.location = 'movie.html';
}

function filterMovies() {

    let filter, listItems;
    filter = search.value.toUpperCase();
    listItems = movieList.getElementsByTagName('li');

    Array.from(listItems).forEach(movie =>
    {
        if (movie.textContent.toUpperCase().indexOf(filter) !== -1) {
            movie.style.display = "";
        } else {
            movie.style.display = "none";
        }
    })
}

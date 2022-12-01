const movieDetailsBody = document.querySelector('.card-body');
const movieDetailsHeader = document.querySelector('.card-header');

window.addEventListener('DOMContentLoaded', () => {
    loadMovie();
})

function loadMovie() {

    const movie = JSON.parse(sessionStorage.getItem('movie'));

    console.log(movie);

    const title = document.createElement('h5');
    const director = document.createElement('p');
    const producer = document.createElement('p');
    const releaseDate = document.createElement('p');

    director.classList.add("card-text");
    producer.classList.add("card-text");
    releaseDate.classList.add("card-text");

    title.textContent = movie.title;
    director.textContent = "Director: " + movie.director;
    producer.textContent = "Producer: " + movie.producer;
    releaseDate.textContent = "Release Date: " + movie.release_date;

    movieDetailsHeader.append(title);

    movieDetailsBody.append(director, producer, releaseDate);
}
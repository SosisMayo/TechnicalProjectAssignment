const containerFilm = document.querySelector('.container-film');
const page = 1;
let data;
let dataSearch;
let query;
let search = document.querySelector('#search');

search.addEventListener('keypress',async (e)=>{
    if(e.key === 'Enter'){
        query = search.value;
        e.preventDefault();
        await searchFilm();
    }
})

const discoverFilm = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2d9decd98bb8289f2a7d3c030315fcb1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page} &with_watch_monetization_types=flatrate`);
    const raw = await response.json();
    data = raw.results;
}

const searchFilm = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2d9decd98bb8289f2a7d3c030315fcb1&language=en-US&query=${query}&page=${page}&include_adult=false`);
    const raw = await response.json();
    dataSearch = raw.results;
    console.log(data);
    while(containerFilm.firstChild){
        containerFilm.removeChild(containerFilm.firstChild);
    }
    makeCardSearch();
}

const makeCardSearch = async () => {
    await discoverFilm();
    containerFilm.innerHTML = dataSearch.map(film => {
        return `
        <div class="film-item">
            <div class="poster-film">
                <img src="https://via.placeholder.com/150x225" alt="${film.title}">
            </div>
            <div class="description-film">
                <h3 class="title-film">${film.title}</h3>
                <h3 class="release-date">${film.release_date}</h3>
                <p class="overview-film">${film.popularity}</p>
            </div>
        </div>`
    }).join('');
}

const makeCard = async () => {
    await discoverFilm();
    containerFilm.innerHTML = data.map(film => {
        return `
        <div class="film-item">
            <div class="poster-film">
                <img src="https://via.placeholder.com/150x225" alt="${film.title}">
            </div>
            <div class="description-film">
                <h3 class="title-film">${film.title}</h3>
                <h3 class="release-date">${film.release_date}</h3>
                <p class="overview-film">${film.popularity}</p>
            </div>
        </div>`
    }).join('');
}

makeCard();

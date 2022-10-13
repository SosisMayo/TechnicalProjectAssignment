const containerFilm = document.querySelector('.container-film');
const nextPage = document.querySelector('.next-page');
const previousPage = document.querySelector('.previous-page');
const angkaPertama = document.querySelector('.angka-pertama');
const angkaKedua = document.querySelector('.angka-kedua');
const angkaKetiga = document.querySelector('.angka-ketiga');
const angkaKeempat = document.querySelector('.angka-keempat');
const angka = document.querySelector('.angka');
const searchText = document.querySelector('.search-text');
let page = 1;
let data;
let dataSearch;
let query;
let search = document.querySelector('#search');

const discoverFilm = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2d9decd98bb8289f2a7d3c030315fcb1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page} &with_watch_monetization_types=flatrate`);
    const raw = await response.json();
    data = raw.results;
}

const searchFilm = async () => {
    page = 1;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2d9decd98bb8289f2a7d3c030315fcb1&language=en-US&query=${query}&page=${page}&sort_by=popularity.desc&include_adult=false`);
    const raw = await response.json();
    dataSearch = raw.results;
    while(containerFilm.firstChild){
        containerFilm.removeChild(containerFilm.firstChild);
    }
    if(dataSearch.length === 0){
        const noResult = document.createElement('h1');
        document.querySelector(".page-control").style.display = "none";
        noResult.textContent = 'No Result';
        containerFilm.appendChild(noResult);
    }else{
        makeCardSearch();
        document.querySelector(".page-control").style.display = "none";
    }
}

const makeCardSearch = async () => {
    const judul = document.createElement('h1');
    judul.textContent = `Search Result for ${query}`;
    searchText.appendChild(judul);
    document.querySelector(".tulisan").style.display = "none";
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

const nextPageHandler = async () => {
    if (page < 99){
        page++;
        await makeCard();
        updateHalaman();
        currentPageHandler();

    }
    else{
        page = 1;
        await makeCard();
        updateHalaman();
        currentPageHandler();
    }
}

const previousPageHandler = async () => {
    if (page === 1){
        page = 99;
        await makeCard();
        updateHalaman();
        currentPageHandler();
    }
    else{
        page--;
        await makeCard();
        updateHalaman();
        currentPageHandler();
    }
}

const currentPageHandler = () => {
    if (page == 1){
        angka.children[0].classList.add('active');
        console.log (angka.children[0]);
    }
    for(let i= 0;i<angka.children.length;i++){
        if(page == angka.children[i].textContent){
            angka.children[i].classList.add("active");
        }
        else{
            angka.children[i].classList.remove("active");
        }
    }
}

const updateHalaman = () => {
    const titik = document.querySelector('.titik');
    const titik2 = document.querySelector('.titik2');
    
    if(page < 4){
        titik.style.display = "none";
        titik2.style.display = "block";
        angkaPertama.textContent = 1;
        angkaKedua.textContent = 2;
        angkaKetiga.textContent = 3;
        angkaKeempat.textContent = 4;
    }

    else if(page > 95){
        console.log(page);
        titik.style.display = "block";
        titik2.style.display = "none";
        angkaPertama.textContent = 1;
        angkaKedua.textContent = 96;
        angkaKetiga.textContent = 97;
        angkaKeempat.textContent = 98;
    }
    else{
        titik.style.display = "block";
        titik2.style.display = "block";
        angkaPertama.textContent = 1;
        angkaKedua.textContent = page - 1;
        angkaKetiga.textContent = page;
        angkaKeempat.textContent = page + 1;
    }
    
}

search.addEventListener('keypress',async (e)=>{
    if(e.key === 'Enter'){
        query = search.value;
        e.preventDefault();
        await searchFilm();
    }
})

nextPage.addEventListener('click', nextPageHandler);
previousPage.addEventListener('click', previousPageHandler);

makeCard();

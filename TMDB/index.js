const hasil = fetch("https://api.themoviedb.org/3/movie/550?api_key=2d9decd98bb8289f2a7d3c030315fcb1")
const submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    const out = document.getElementById("out");
    hasil.then(res => res.json())
    .then(data => {
        console.log(data);
    })
})
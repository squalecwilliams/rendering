
function renderMovies(moviesAbstraction) {
    const moviesHTML = moviesAbstraction.map( movie => {
        return`
            <div class='movie-sort'>
                <img src=${movie.poster} style='height:100%; width:40%; margin:1%;'>
                <div class='movie-sort-items'style='height:100%; width:60%;'>
                    <h4>${movie.title}</h4>
                    <p>${movie.year}</p>
                    <a href='https://www.imdb.com/title/${movie.imdbID}/?'>IMDB:</a>
                    <p>${movie.imdbRating} / 10</p>
                    <p>Rotten Tomatoes:</p> 
                    <p>${movie.rottenTomatoesRating*100}%</p>
                </div>
            </div>
        `
    })
    
    return `
        <div class="text-center mt-5">
            ${moviesHTML.join('')}
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}
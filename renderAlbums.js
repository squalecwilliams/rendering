
function renderAlbums(albumsAbstraction) {

    const albums = albumsAbstraction[0].albums
    const artist = `<h1>${albumsAbstraction[0].artist}</h1>`

    const albumHTML = albums.map( album => {
        const songsArr = album.songs.map( song => {
            return `
            <div class="song-sort">
                <p>${song.title}</p>
                <p>${song.length}</p>
            </div>
            <hr>
            `
        })
        return `
        <div class="text-left mt-5">
            <div class="cover-title">
                <img src="${album.albumCover}">
                <h3>${album.title}</h3>
            </div>
            <hr>
            <div class="songs">
                ${songsArr.join('')}
            </div>
        </div>
    `
    })


    return `<div class="text-left mt-5">
                ${artist}
                <hr>
                ${albumHTML.join('')}
            </div>
    `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}
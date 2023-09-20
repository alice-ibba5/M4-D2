const SearchArtista = document.querySelector("#searchField")
function search() {
    if(SearchArtista.value){
        FetchTotale(SearchArtista.value)
    } else {
        alert("inserisci un'artista!")
    } 
}   

function FetchTotale(artista) {
    const IdArtista = document.querySelector(`#${artista}`)
    const Row = document.querySelector(`#${artista}Section`)
    const SearchResults = document.querySelector("#searchResults")
    SearchResults.removeAttribute('style');
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artista}`)
        .then(response => response.json())
        .then(body => {
            const music = body.data
            const FiveRandomMusic = music.slice(0, 4)
            IdArtista.className = "pt-2"
            for (let i = 0; i < FiveRandomMusic.length; i++) {
                Row.innerHTML += `<div class="col-3 d-flex flex-column align-items-center">
                                    <h4>Album:</h4>
                                    <p style="font-size: 12px;">${FiveRandomMusic[i].album.title}</p>
                                    <img  src="${FiveRandomMusic[i].album.cover_medium}">
                                    <h6 class="pt-4 text-center">Titolo:</h6>
                                    <p class="text-center">${FiveRandomMusic[i].title}</p>
                                    </div>`
            }   
        })
}


  // most popular movie
  const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//search movies
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box")

const getMovies = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
    //console.log(data) //extra details bhi aaigi
    showMovies(data.results) //only movie list

}
//getMovies(APIURL)

const showMovies = (data) => {
    //console.log(data) //only movie list
    moiveBox.innerHTML = ""; //reset movie box
    data.forEach(
        (item) => {
            console.log(item)  //get info result indivisualy
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = ` //poster path + base url(fix)
            <img src="${IMGPATH+item.poster_path}" alt=""> //every item has its ow poster path
            <div class="overlay">
                <div class="title">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>overview</h3>
                <p>
                ${item.overview}
                </p>
            </div>
            `;

            moiveBox.appendChild(box)
        }
    )
}

document.querySelector("#search").addEventListener(
  "keyup",
  function (event) {
      if (event.target.value != "") {
          getMovies(SEARCHAPI + event.target.value)
      } else {
          getMovies(APIURL);
      }
  }
)
//initial call
getMovies(APIURL)
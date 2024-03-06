let APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//most popular api fetching
let IMGAPI = "https://image.tmdb.org/t/p/w1280";
let SEARCHAPI ="https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";
//take the search movie
let movieBox = document.querySelector("#movie-box");
let getapi=async(api)=>{
    let response = await fetch(api);
    let data = await response.json();
    console.log(data)
    showMovie(data.results)
    
}

let showMovie= (data)=>{
    movieBox.innerHTML = "";
    data.forEach((item)=>{
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `
        <img src = ${IMGAPI + item.poster_path} alt=""/>
        <div class="overlay">
           <div class ="title">
              <h2>${item.original_title}</h2>
              <span>${Math.round(item.vote_average)}</span>
            </div>
            <h3>Overview</h3>
            <p>${item.overview}</p>
        </div>      
        `;
            movieBox.appendChild(box);

        });
}

document.querySelector("#search").addEventListener("keyup" , (event)=>{
    if(event.target.value !=""){
        getapi(SEARCHAPI+ event.target.value);
    }else{
        getapi(APIURL);
    }
    
})
getapi(APIURL);
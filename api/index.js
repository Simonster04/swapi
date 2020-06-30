const fetch = require("node-fetch");

//Ejecuta y muestra en consola
async function swapi() {
  setup().then(console.log);
}

//API que lee los nombres de las películas y llama a las demás APIs
async function setup() {
  const baseUrl = 'https://swapi.dev/api/films/';
  const response = await fetch(baseUrl);
  const data = await response.json();
  const results = await data.results;

  var films = [];
  let i = 0;

  for(let film of results){
    films.push({title: film.title});

    films[i].planets = await planets(film);
    films[i].people = await people(film);
    films[i].starships = await starships(film);
    i++;
  }

  return(JSON.stringify(films));
}

//Envia la url de cada planeta a la función con la API
async function planets(film) {
  var planetsList = [];
  for(let planetApi of film.planets){
    const planetInfo = get_planets(planetApi)
    planetsList.push(planetInfo);
  }

  let responses = await Promise.all(planetsList);
  return responses;
}

//Envia la url de cada personaje a la función con la API
async function people(film) {
  var peopleList = [];
  for(let actorApi of film.characters){
    const actorInfo = get_people(actorApi)
    peopleList.push(actorInfo);
  }

  let responses = await Promise.all(peopleList);
  return responses;
}

//Envia la url de cada nave a la función con la API
async function starships(film) {
  var starshipsList = [];
  for(let starshipApi of film.starships){
    const starshipInfo = get_starships(starshipApi)
    starshipsList.push(starshipInfo);
  }
  let responses = await Promise.all(starshipsList);
  return responses;
}

//API que lee la info de los planetas
async function get_planets(url) {
  let planetsDict = {};
  await fetch(url, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((responseJson) => {
    planetsDict.name = responseJson.name;
    planetsDict.terrain = responseJson.terrain;
    planetsDict.gravity = responseJson.gravity;
    planetsDict.diameter = responseJson.diameter;
    planetsDict.population = responseJson.population;
  })
  .catch(function(error) {
    console.log(error.message);
    throw error;
  })

  return(planetsDict);
}


//API que lee la info de los actores
async function get_people(url) {
  let peopleDict = {};
    await fetch(url, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      peopleDict.name = responseJson.name;
      peopleDict.gender = responseJson.gender;
      peopleDict.hair_color = responseJson.hair_color;
      peopleDict.skin_color = responseJson.skin_color;
      peopleDict.eye_color = responseJson.eye_color;
      peopleDict.height = responseJson.height;
      peopleDict.homeworld = responseJson.homeworld;
    })
    .catch(function(error) {
      console.log(error.message);
      throw error;
    })
    return(peopleDict);
}


//API que lee la info de las naves
  async function get_starships(url) {
  let starshipsDict = {};
    await fetch(url, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      starshipsDict.name = responseJson.name;
      starshipsDict.model = responseJson.model;
      starshipsDict.manufacter = responseJson.manufacter;
      starshipsDict.passengers = responseJson.passengers;
    })
    .catch(function(error) {
      console.log(error.message);
      throw error;
    })
    return(starshipsDict);
}


module.exports = swapi;
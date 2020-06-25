const fetch = require("node-fetch");
var films = [];
var planets = [];
var people = [];
var starships = [];

/*
function swapi() {
  fetch('https://swapi.dev/api/films/', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      for(let film of responseJson.results){
        films.push({name: film.title});
      }
      console.log(films)
    })
    .catch(function(error) {
      console.log(error.message);
      throw error;
    });
}
*/
/*
function get_planets() {
  fetch('https://swapi.dev/api/planets/', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let i = 0;
      for(let planet of responseJson.results){
        planets.push({name: planet.name});
        planets[i].terrain = planet.terrain;
        planets[i].gravity = planet.gravity;
        planets[i].diameter = planet.diameter;
        planets[i].population = planet.population;
        i++;
      }
      console.log(planets)
    })
    .catch(function(error) {
      console.log(error.message);
      throw error;
    });
}
*/

/*
function get_people() {
  fetch('https://swapi.dev/api/people/', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let i = 0;
      for(let actor of responseJson.results){
        people.push({name: actor.name});
        people[i].gender = actor.gender;
        people[i].hair_color = actor.hair_color;
        people[i].skin_color = actor.skin_color;
        people[i].eye_color = actor.eye_color;
        people[i].height = actor.height;
        people[i].homeworld = actor.homeworld;
        i++;
      }
      console.log(people)
    })
    .catch(function(error) {
      console.log(error.message);
      throw error;
    });
}
*/


function get_starships() {
  fetch('https://swapi.dev/api/starships/', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let i = 0;
      for(let starship of responseJson.results){
        starships.push({name: starship.name});
        starships[i].model = starship.model;
        starships[i].manufacter = starship.manufacter;
        starships[i].passengers = starship.passengers;
      }
      console.log(starships)
    })
    .catch(function(error) {
      console.log(error.message);
      throw error;
    });
}



//module.exports = swapi;
//module.exports = get_planets;
//module.exports = get_people;
module.exports = get_starships;

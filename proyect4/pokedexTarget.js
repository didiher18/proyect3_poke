const pokemonContainer = document.querySelector(".pokemon-container");

//Utilizamos para poder disponer de la informacion
function fetchPokemon(azar) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${azar}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

//Utilizada para mostrar en pantalla los pokemons de manera aleatoria
function fetchPokemons(number) {
  for (let i = 1; i <= number; i++) {
    let azar = Math.floor(Math.random()*249);
    fetchPokemon(azar);
  }
}

//Creacion de base de la tarjeta a mostrar en pantalla
function createPokemon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

fetchPokemons(6);
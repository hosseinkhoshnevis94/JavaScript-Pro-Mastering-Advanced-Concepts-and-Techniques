const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon() {
  const response = await fetch(POKE_URL);
  const data = await response.json();
  console.log(data);
}

fetch(POKE_URL)
  .then((res) => res.json())
  .then((data) => console.log(data));

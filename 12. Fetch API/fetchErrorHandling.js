const POKE_URL = "https://pokeapi.co/api/v2/pokemon/asdasd/asd";

async function getPokemon() {
  try {
    const response = await fetch(POKE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
    console.log(e);
  }
}

fetch(POKE_URL)
  .then((res) => {
    console.log("THE FETCH WORKED!!!!");
    console.log(res);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log("JSON DATA", data))
  .catch((e) => {
    console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
    console.log(e);
  });

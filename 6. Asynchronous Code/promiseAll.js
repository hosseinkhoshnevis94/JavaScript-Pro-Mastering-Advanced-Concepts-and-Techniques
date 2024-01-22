const lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

Promise.all(lotsOfFetchCalls)
  .then((results) =>
   {return Promise.all(results.map(result=>result.json()))
     })
  .catch((e) => {
    console.log("ONE of the promises was rejected");
    console.log(e);
  });

async function getLotsOfPokemon() {
  try {
    const results = await Promise.all(lotsOfFetchCalls);
    const jsonedResult = await Promise.all(results.map(result=>result.json()))
    return jsonedResult
  } catch (e) {
    console.log("ONE of the promises was rejected");
    console.log(e);
  }
}

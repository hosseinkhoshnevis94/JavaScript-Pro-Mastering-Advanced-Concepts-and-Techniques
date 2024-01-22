function queryAPI(searchTerm, color) {
  console.log(`Searching the API for ${searchTerm}`);
  console.log(`color argument is ${color}`);
}

const searchInput = document.querySelector("#search");

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedQueryAPI = debounce(queryAPI, 300);

searchInput.addEventListener("input", (evt) => {
  debouncedQueryAPI(evt.target.value, "purple");
});

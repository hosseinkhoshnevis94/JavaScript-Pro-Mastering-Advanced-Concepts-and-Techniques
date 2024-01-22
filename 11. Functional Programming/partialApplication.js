function multiply(a, b) {
  return a * b;
}

function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}





const double = partial(multiply, 2);
const triple = partial(multiply, 3);




function fetchData(url, apiKey, params) {
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${url}?${queryString}`;

  console.log(`Sending request to ${fullUrl}`);
  console.log(`With API key of ${apiKey}`);
}

const myApiKey = "my-secret-api-key";
const myApiUrl = "https://api.mywebsite.com/data";

const googleApiKey = "google-secret-api-key";
const googleApiUrl = "https://api.google.com/data";

const fetchMyAPI = partial(fetchData, myApiUrl, myApiKey);
const fetchGoogle = partial(fetchData, googleApiUrl, googleApiKey);

fetchMyAPI({ id: 1, sort: "desc" });

fetchGoogle({ search: "chicken" });

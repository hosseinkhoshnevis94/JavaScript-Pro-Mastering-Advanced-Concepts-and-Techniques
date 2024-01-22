async function showMeHeaders() {
  const headers = new Headers({
     "content-type": "application/json" 
    });
  try {
    const res = await fetch("http://localhost:3001/showmeheaders", { headers });
    const data = await res.json();
    console.log("DATA ", data);
  } catch (e) {
    console.log(e);
  }
}

async function getSecret() {
  const headers = new Headers({
    "content-type": "application/json",
    authorization: "Bearer kasjakj1283ajksdh91iasjkhd912",
  });
  try {
    const res = await fetch("http://localhost:3001/secret", { headers });
    const data = await res.json();
    console.log("DATA ", data);
  } catch (e) {
    console.log(e);
  }
}

 showMeHeaders();

getSecret();


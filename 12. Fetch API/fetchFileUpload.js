async function uploadFile(formData) {
  try {
    const response = await fetch(
      "http://localhost:3001/companies/coltco/upload-logo",
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

const fileInput = document.querySelector("#fileUpload");

fileInput.addEventListener("change", (e) => {
  console.log("CHANGED!!",fileInput.files);
  const formData = new FormData();
  formData.append("logo", fileInput.files[0]);
  uploadFile(formData);
});



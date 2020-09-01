import { data } from "jquery";

function main() {
  const keyAPI = "69aabfa8-6bb6-428f-bfce-a64524b9bee9&";
  const baseUrl = "https://api.thecatapi.com/v1";

  const getBreed = async () => {
    try {
        const response = await fetch(`${baseUrl}/breeds?api_key=${keyAPI}`);
        const dataBreed = await response.json();
        if(dataBreed.error) {
            showResponseMessage(dataBreed);
        } 
       else {
            renderBreeds(dataBreed);
        }
    } catch(error) {
        showResponseMessage(error);
    }
};

const renderBreeds = (dataBreed) => {
   const listBreed = document.querySelector("#listBreed");
    listBreed.innerHTML="";
      dataBreed.forEach(breed => {    
          listBreed.innerHTML += `
          <option value="${breed.id}">${breed.name}</option>`
         ;
      });
     listBreed.onchange= function() {getImgCat(listBreed.value)};
}

const getImgCat = async (breed) => {
    try {
        const response = await fetch(`${baseUrl}/images/search?api_key=${keyAPI}&breed_ids=${breed}&limit=6`);
        const data = await response.json();
        if(data.error) {
            showResponseMessage(data);
        }
         else {
            renderAllCats(data);
        }
    } catch(error) {
        showResponseMessage(error);
    }
};

  const renderAllCats = (data) => {
      const listcatElement = document.querySelector("#listCat");
      listcatElement.innerHTML = "";
      data.forEach(cat => {
          listcatElement.innerHTML += `
          <div class="col-md-4">
          <div class="card mb-4  border-success shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="200px" src="${cat.url}"</img>
          </div>
        </div>
          `;
      });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
      alert(message);
  };
  getBreed();
  //listBreed.addEventListener("change", getImgCat(listBreed.value));

}

export default main; 
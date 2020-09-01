const mainInfo = () => {
const keyAPI = "69aabfa8-6bb6-428f-bfce-a64524b9bee9&";
const baseUrl = "https://api.thecatapi.com/v1";

  const getBreed = async () => {
    try {
        const response = await fetch(`${baseUrl}/breeds?api_key=${keyAPI}`);
        const dataBreed = await response.json();
        if(dataBreed.error) {
            showResponseMessage(dataBreed);
            alert(dataBreed);
        } else {
            renderDesc(dataBreed);
        }
    } catch(error) {
        showResponseMessage(error);
    }
};
    const renderDesc = (dataBreed) => {
        const listDesc = document.querySelector("#listDesc");
           listDesc.innerHTML=""; 
           dataBreed.forEach(breed => {
               listDesc.innerHTML += `
               <div class="col-md-4">
                <div class="card mb-4  shadow-sm">
                <div class="card-header bg-success text-white"> ${breed.name} </div>
                <div class="card-body border-success">
                <p class="card-text"> Asal : ${breed.origin}</p>
                <p class="card-text"> Temperament : ${breed.temperament}</p>
                <a href=" ${breed.wikipedia_url}" class="card-text"> Info</a>
            </div>
          </div>
        </div>
           `
           ;
           });
    }
getBreed();
}
export default mainInfo();
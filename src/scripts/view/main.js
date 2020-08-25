function main() {
  const keyAPI = "DEMO-API-KEY";
  const baseUrl = "https://api.thecatapi.com/v1/images/search";

  const getCat = async () => {
      try {
          const response = await fetch(`${baseUrl}?api_key=${keyAPI}&limit=5&page=10&order=Desc`);
          const data = await response.json();
          if(data.error) {
              showResponseMessage(data.message);
          } else {
              renderAllCats(data.cats);
          }
      } catch(error) {
          showResponseMessage(error);
      }
  };

  const renderAllCats = (cats) => {
      const listcatElement = document.querySelector("#listCat");
      listcatElement.innerHTML = "";

      cats.forEach(cat => {
          listcatElement.innerHTML += `
              <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                  <div class="card">
                      <div class="card-body">
                          <h5>${cat.name}/h5>
                          <p>${cat.url}</p>
                          <button type="button" class="btn btn-danger button-delete" id="${cat.id}">Hapus</button>
                      </div>
                  </div>
              </div>
          `;
      });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
      alert(message);
  };

  getCat();
}

export default main; 
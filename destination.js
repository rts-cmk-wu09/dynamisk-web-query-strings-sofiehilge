const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);//søger parametre

const idUrlParam = urlParams.get("id");

/* Insert url params id i fetch!! */
fetch(`data/${idUrlParam}.json`)//skal være en template litteral for at være dynamisk
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let card = document.querySelector("#wrapper");
    card.classList = "destinationCard";
    let figure = document.createElement("figure");
    card.append(figure);

    figure.innerHTML = `
    <img src="img/${data.image}">
    <div class="heart">
    <i class="fa-solid fa-heart"></i>
    <p>Favorite</p>
    </div>
    `;

    let descrWrapper = document.createElement("div");
    descrWrapper.classList = "cardText";
    card.append(descrWrapper);

    descrWrapper.innerHTML = `
    <h2>${data.destination}</h2>
    <h3>${data.title}</h3>
    <h4>${data.subtitle}</h4>
    <div class="facility-text">
    <h5>${data.text}</h5>
    <h6>Facilities</h6>
    </div>
    `

    /* VIRKER IKKE!!!! */
    /* data.facilities.forEach((element =>{
      const faciList = document.createElement("li")
      descrWrapper.append(faciList)
      item.innerHTML = `
      <li>data/${destination.facilities}</li>
      `
    })) */
   /*  let faciList = document.createElement("ul");
    faciList.classList.add("faciList")

    data.facilities.forEach((element) => {
      let listItem = document.createElement("li");
      listItem.textConcent = element;

      faciList.append(listItem);
      descrWrapper.append(faciList);
     */
    
  });
    

    


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
    <button>heart</button>
    <p>Favorite</p>
    </div>
    `;

    let descrWrapper = document.createElement("div");
    card.append(descrWrapper);

    descrWrapper.innerHTML = `
    <h2>${data.destination}</h2>
    <h3>${data.title}</h3>
    <h4>${data.subtitle}</h4>
    <h5>${data.text}</h5>
    <h6>"Facilities</h6>
    `
    let faciList = document.createElement("ul");
    faciList.classList.add("faciList")

    card.append(faciList);

    

    /*  let button = document.createElement("img");
    button.classList = "heartButton"
    let buttonText = document.createElement("p");
    buttonText.classList = "buttonText"
    let image = document.createElement("img");
    image.classList = "cardImage" */

    /*   image.src = data.image
    buttonText.textContent = 'Favorite'

    card.append(image);
    card.append(button);
    card.append(buttonText); */
  });

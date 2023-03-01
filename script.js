/* const listDestinations = document.querySelector('#list') */

/* let wrapper = document.querySelector("body");

let headline = document.createElement("h1");
headline.classList = "headline";
wrapper.append(headline);
document.querySelector("body").innerHTML +=`
<header>
<h1>Appartments for rent</h1>
</header>
` */



fetch('./data/destinations.json').then((response) => {//curly brackets er kun nødventidgt ved flere linjer, for at definerer scopet
    return response.json();
}).then(data => { //data er en variable som indeholder dataen.
    const list = document.querySelector('#destination-list')
    data.destinations.forEach(destination => {
        const item = document.createElement("li")
        list.append(item)
        item.innerHTML = `
        <a href = "destination.html?id=${destination.id}">
        <img src="img/${destination.image}">
        <div class="image-text">
        <i class="fa-solid fa-heart"></i>
        <p>more</p>
        </div>
        </a>
        
        `        
    });

       })
        


//image: image.src = data.destinations[i].image
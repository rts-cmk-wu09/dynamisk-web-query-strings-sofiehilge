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



fetch('./data/destinations.json').then((response) => {
    return response.json();
}).then(data => {
    const list = document.querySelector('#destination-list')
    data.destinations.forEach(destination => {
        const item = document.createElement("li")
        list.append(item)
        item.innerHTML = `
        <a href = "destination.html?id=${destination.id}">
        <img src="img/${destination.image}">
        <p>${destination.title}</p>
        </a>
        
        `        
    });

       })
        


//image: image.src = data.destinations[i].image
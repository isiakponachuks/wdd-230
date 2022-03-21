
const requestURL = 'https://isiakponachuks.github.io/wdd-230/chamber/data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const directory = jsonObject['directory'];
    
let companiesFiltered = directory.filter(i => i.membership == 'gold' || i.membership == 'silver')
.sort(function() {return Math.random() - 0.5});
        
        
    const companies = jsonObject['directory'];

    for (let i = 11; i < directory.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let Phone = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = directory[i].name;
        image.setAttribute('src', directory[i].imageurl);
        Phone.textContent += 'Phone: ' + directory[i].Phone;
        website.textContent += 'Website: ' + directory[i].website;
        
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(Phone);
        card.appendChild(website);
       

        

        document.querySelector('#spotlight').appendChild(card);
        
    }
  });
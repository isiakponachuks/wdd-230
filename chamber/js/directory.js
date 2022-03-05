

const requestURL = 'https://isiakponachuks.github.io/wdd-230/chamber/data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    for (let i = 0; i <companies.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let Address = document.createElement('p');
        let Phone = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = companies[i].name;
        Address.textContent = 'Address: ' + companies[i].Address;
        Phone.textContent += 'Phone: ' + companies[i].Phone;
        website.textContent += 'Website: ' + companies[i].website;
        image.setAttribute('src', companies[i].imageurl);
        

        card.appendChild(h2);
        card.appendChild(Address);
        card.appendChild(Phone);
        card.appendChild(website);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        
    }
  });
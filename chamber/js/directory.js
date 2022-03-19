

const requestURL = 'https://isiakponachuks.github.io/wdd-230/chamber/data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    for (let i = 0; i < directory.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let Address = document.createElement('p');
        let Phone = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = directory[i].name;
        image.setAttribute('src', directory[i].imageurl);
        Address.textContent = 'Address: ' + directory[i].Address;
        Phone.textContent += 'Phone: ' + directory[i].Phone;
        website.textContent += 'Website: ' + directory[i].website;
        
        

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(Address);
        card.appendChild(Phone);
        card.appendChild(website);
       

        document.querySelector('div.cards').appendChild(card);
        
    }
  });
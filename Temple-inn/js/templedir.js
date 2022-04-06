const requestURL = 'https://isiakponachuks.github.io/wdd-230/Temple-inn/data/temple.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const directory = jsonObject['temple'];
    for (let i = 0; i < directory.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let Address = document.createElement('p');
        let Phone = document.createElement('p');
        let email = document.createElement('p');
        let services = document.createElement('p');
        let history = document.createElement('p');
        let ordinance = document.createElement('p');
        let session = document.createElement('p');
        let templeclosure = document.createElement('p');

        h2.textContent = temple[i].name;
        image.setAttribute('src', temple[i].imageurl);
        Address.textContent = 'Address: ' + temple[i].Address;
        Phone.textContent += 'Phone: ' + temple[i].Phone;
        email.textContent += 'email: ' + temple[i].email;
        services.textContent += 'services: ' + temple[i].email;
        history.textContent += 'history: ' + temple[i].history;
        ordinance.textContent += 'ordinance: ' + temple[i].ordinance;
        session.textContent += 'session: ' + temple[i].session;
        templeclosure.textContent += 'templeclosure: ' + temple[i].templeclosure;


        
        

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(Address);
        card.appendChild(Phone);
        card.appendChild(email);
        card.appendChild(services);
        card.appendChild(history);
        card.appendChild(ordinance);
        card.appendChild(session);
        card.appendChild(templeclosure);

       

        document.querySelector('div.cards').appendChild(card);
        
    }
  });
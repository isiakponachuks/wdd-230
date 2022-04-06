const requestURL = 'https://isiakponachuks.github.io/wdd-230/Temple-inn/data/temple.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const temple = jsonObject['temple'];
    for (let i = 0; i < temple.length; i++ ) {
        let card = document.createElement('section');
        
        let image = document.createElement('img');
        let Address = document.createElement('p');
        let Phone = document.createElement('p');
        let email = document.createElement('p');
        let Services = document.createElement('p');
        let History = document.createElement('p');
        let Ordinance = document.createElement('p');
        let Session = document.createElement('p');
        let Templeclosure = document.createElement('p');

        
        image.setAttribute('src', temple[i].imageurl);
        Address.textContent = 'Address: ' + temple[i].Address;
        Phone.textContent += 'Phone: ' + temple[i].Phone;
        email.textContent += 'email: ' + temple[i].email;
        Services.textContent += 'Services: ' + temple[i].Services;
        History.textContent += 'History: ' + temple[i].History;
        Ordinance.textContent += 'Ordinance: ' + temple[i].Ordinance;
        Session.textContent += 'Session: ' + temple[i].Session;
        Templeclosure.textContent += 'Templeclosure: ' + temple[i].Templeclosure;


        
        

        
        card.appendChild(image);
        card.appendChild(Address);
        card.appendChild(Phone);
        card.appendChild(email);
        card.appendChild(Services);
        card.appendChild(History);
        card.appendChild(Ordinance);
        card.appendChild(Session);
        card.appendChild(Templeclosure);

       

        document.querySelector('div.cards').appendChild(card);
        
    }
  });
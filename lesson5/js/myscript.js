const list = document.querySelector('ul');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

 //add the event listener
 button.onclick = function() {
 let myChapters = input.value;
 input.value = '';

    const listChapters = document.createElement('li');
    const listText = document.createElement('X');
    const listBtn = document.createElement('button');
    

        listChapters.appendChild(listText);
        listText.textContent = myChapters;
        listChapters.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listChapters);

        listBtn.onclick = function(event) {
        list.removeChild(listChapters);
        }

        input.focus();
      }

      
     
const nameText = document.querySelector('#favchap');

nameText.addEventListener('input', () => {
nameText.setCustomValidity('');
nameText.checkValidity();


});

nameText.addEventListener('invalid', () => {
nameText.setCustomValidity('Please fill in your chapter Name.');
})


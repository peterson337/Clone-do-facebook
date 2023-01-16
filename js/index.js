// Código para testar o javascript: alert("testando");

// Create the div to hold the form
const formDiv = document.getElementById('div');
//  formDiv.style.display = 'none';

// Get the button
const button = document.getElementById('button1');

// Add click event to button
button.addEventListener('click', () => {
  formDiv.style. display = 'block';
});

const clear= document.getElementById("clear");
clear.addEventListener('click', () => {
    formDiv.style. display = 'none';
  });
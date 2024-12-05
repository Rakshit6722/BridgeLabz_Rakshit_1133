let input = prompt("Enter your name");

const container = document.querySelector('.container');
container.innerHTML = `<h1>Hello ${input}</h1>`;

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    const isConfirmed = confirm("Are you sure you want to remove the text?");
    if (isConfirmed) {
        alert('Text Removed');
        container.innerHTML = ""; 
        button.remove(); 
    } else {
        alert('Action cancelled'); 
    }
});

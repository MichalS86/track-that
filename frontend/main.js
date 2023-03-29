// main.js
document.getElementById('create-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;

// Add your logic here to create the new item based on the "name" and "type" values

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});

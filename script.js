const hoverText = document.getElementById('hoverText');
const clickButton = document.getElementById('clickButton');
const changeText = document.getElementById('changeText');

hoverText.addEventListener('mouseover', function() {
    hoverText.style.color = 'pink';
    hoverText.textContent = 'You are so pretty!';
});

hoverText.addEventListener('mouseout', function() {
    hoverText.style.color = 'red';
    hoverText.textContent = 'I like you!';
});

clickButton.addEventListener('click', function() {
    changeText.textContent = 'I love you!';
    changeText.style.color = 'red';
});

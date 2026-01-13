const movimento1 = document.getElementById('mov1');

movimento1.addEventListener('mouseover', () => {
    movimento1.style.transform = 'scale(1.2)';
});

movimento1.addEventListener('mouseout', () => {
    movimento1.style.transform = 'scale(1)';
});


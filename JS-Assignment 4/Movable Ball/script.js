const ball = document.getElementById('ball');
let isDragging = false;

ball.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const x = e.clientX;
        const y = e.clientY;
        ball.style.left = (x - ball.offsetWidth / 2) + 'px';
        ball.style.top = (y - ball.offsetHeight / 2) + 'px';
    }
});

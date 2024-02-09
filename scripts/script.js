let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.article-slider');

const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.scrollSnapType = 'none'; // Disable scroll snapping during dragging
}

const stopDragging = (e) => {
    mouseDown = false;
    slider.style.scrollSnapType = 'x mandatory'; // Enable scroll snapping after dragging
}

const move = (e) => {
    if (!mouseDown) { return; }
    e.preventDefault(); // Prevent default only when dragging
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
document.addEventListener('mousemove', move, false); // Listen for mousemove event on document, to allow dragging outside the slider
slider.addEventListener('mousedown', startDragging, false); // Listen for mousedown event only on the slider
document.addEventListener('mouseup', stopDragging, false);
document.addEventListener('mouseleave', stopDragging, false);

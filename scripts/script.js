let mouseDown = false;
let startX, scrollLeft;
const sliders = document.querySelectorAll('.draggable');

const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
    e.currentTarget.style.scrollSnapType = 'none'; // Disable scroll snapping during dragging
    console.log('startDragging', e);
}

const stopDragging = (e) => {
    mouseDown = false;
    e.currentTarget.style.scrollSnapType = 'x mandatory'; // Enable scroll snapping after dragging
    console.log('stopDragging', e);
}

const move = (e) => {
    if (!mouseDown) { return; }
    e.preventDefault(); // Prevent default only when dragging
    const x = e.pageX - e.currentTarget.offsetLeft;
    const scroll = x - startX;
    e.currentTarget.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners to all elements with the class .draggable
sliders.forEach(slider => {
    slider.addEventListener('mousedown', startDragging, false); // Listen for mousedown event only on the slider
    slider.addEventListener('mousemove', move, false); // Listen for mousemove event on the slider
    slider.addEventListener('mouseup', stopDragging, false);
});
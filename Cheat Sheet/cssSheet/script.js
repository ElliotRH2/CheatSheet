// Get references to the color picker and div
const colorPicker = document.getElementById('colorPicker');
const colorDiv = document.getElementById('colorDiv');

// Add an event listener to the color picker
colorPicker.addEventListener('input', function() {
    // Get the selected color value
    const colorValue = colorPicker.value;
    
    // Apply the color value to the background color of the div
    colorDiv.style.backgroundColor = colorValue;
});
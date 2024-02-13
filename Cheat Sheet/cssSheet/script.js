// Get references to the color picker, div, and RGB values span
const colorPicker = document.getElementById('colorPicker');
const colorDiv = document.getElementById('colorDiv');
const rgbValuesSpan = document.getElementById('rgbValues');

// Add an event listener to the color picker
colorPicker.addEventListener('input', function() {
    // Get the selected color value
    const colorValue = colorPicker.value;
    
    // Apply the color value to the background color of the div
    colorDiv.style.backgroundColor = colorValue;

    // Extract RGB values from the color value
    const rgb = hexToRgb(colorValue);
    
    // Display RGB values below the div
    rgbValuesSpan.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
});

// Function to convert hex color to RGB
function hexToRgb(hex) {
    // Remove "#" if present
    hex = hex.replace(/^#/, '');

    // Parse hex value to RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}

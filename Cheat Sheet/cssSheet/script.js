// Get references to the RGB values span, hex value span, and color picker
const rgbValuesSpan = document.getElementById('rgbValues');
const hexValueSpan = document.getElementById('hexValue');
const colorPicker = document.getElementById('colorPicker');

// Function to copy text to clipboard
function copyToClipboard(text) {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();

    // Execute copy command
    document.execCommand('copy');

    // Remove temporary input element
    document.body.removeChild(tempInput);
}

// Add click event listeners to RGB values span and hex value span
rgbValuesSpan.addEventListener('click', function() {
    copyToClipboard(rgbValuesSpan.textContent);
    alert('RGB value copied to clipboard!');
});

hexValueSpan.addEventListener('click', function() {
    copyToClipboard(hexValueSpan.textContent);
    alert('Hex value copied to clipboard!');
});

// Function to update color, RGB, and hex values
function updateColorAndValues(colorValue) {
    // Apply the color value to the background color of the div
    colorDiv.style.backgroundColor = colorValue;

    // Extract RGB values from the color value
    const rgb = hexToRgb(colorValue);
    
    // Display RGB values below the div
    rgbValuesSpan.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;

    // Display hex value below the RGB values
    hexValueSpan.textContent = `HEX: ${colorValue}`;
}

// Add an event listener to the color picker
colorPicker.addEventListener('input', function() {
    // Get the selected color value
    const colorValue = colorPicker.value;
    
    // Update color, RGB, and hex values
    updateColorAndValues(colorValue);
});

// Manually trigger event listener function with default color when page loads
window.addEventListener('load', function() {
    const defaultColor = colorPicker.value;
    updateColorAndValues(defaultColor);
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

/* Border Radius, Size and padding selectros */
const radiusInput = document.getElementById('radiusInput');
const borderSizeInput = document.getElementById('borderSizeInput');
const paddingInput = document.getElementById('paddingInput')
const borderBox = document.getElementById('borderBox');
const borderBox2 = document.getElementById('borderBox2')

const maxBorder = 50
const maxPadding = 100

radiusInput.addEventListener('input', () => {
    const radiusValue = radiusInput.value + 'px';
    borderBox.style.borderRadius = radiusValue;
  });

borderSizeInput.addEventListener('input', () => {
    const borderSizeValue = borderSizeInput.value + 'px';
    borderBox.style.borderWidth = borderSizeValue;
  });

borderStyleInput.addEventListener('change', () => {
    const borderStyleValue = borderStyleInput.value;
    borderBox.style.borderStyle = borderStyleValue;
  });

paddingInput.addEventListener('input', () => {
    const paddingValue = paddingInput.value + 'px';
    borderBox2.style.padding = paddingValue;
  });

paddingInput.addEventListener('input', () => {
    let value = parseInt(paddingInput.value);
    if (value > maxPadding) {
      paddingInput.value = maxPadding;
    }
  });

paddingInput.addEventListener('keypress', (event) => {
    let value = parseInt(paddingInput.value + event.key);
    if (value > maxPadding) {
      event.preventDefault();
    }
  });
  
borderSizeInput.addEventListener('input', () => {
    let value = parseInt(borderSizeInput.value);
    if (value > maxBorder) {
      borderSizeInput.value = maxBorder;
    }
  });

borderSizeInput.addEventListener('keypress', (event) => {
    let value = parseInt(borderSizeInput.value + event.key);
    if (value > maxBorder) {
      event.preventDefault();
    }
  });

/* Font Selector */
const fontSelect = document.getElementById('fontSelect');
const textElement = document.getElementById('textElement');
const boldCheckbox = document.getElementById('boldCheckbox');

fontSelect.addEventListener('change', () => {
  const selectedFont = fontSelect.value;
  textElement.style.fontFamily = selectedFont;
});

fontSelect.addEventListener('change', applyFontStyles);
boldCheckbox.addEventListener('change', applyFontStyles);

function applyFontStyles() {
  let fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
  textElement.style.fontWeight = fontWeight;
  const selectedFont = fontSelect.value;
  textElement.style.fontFamily = selectedFont;
}


/* Gradient Maker */
const color1GradInput = document.getElementById('color1Grad');
const color2GradInput = document.getElementById('color2Grad');
const color3GradInput = document.getElementById('color3Grad'); 
const directionSelect = document.getElementById('direction');
const gradientPreview = document.getElementById('gradientPreview');
const cssCodeDisplay = document.getElementById('cssCode'); 

function updateGradient() {
  const color1Grad = color1GradInput.value;
  const color2Grad = color2GradInput.value;
  const color3Grad = color3GradInput.value; 
  const direction = directionSelect.value;

  gradientPreview.style.background = `linear-gradient(${direction}, ${color1Grad}, ${color2Grad}, ${color3Grad})`; 

  cssCodeDisplay.textContent = `background: linear-gradient(${direction}, ${color1Grad}, ${color2Grad}, ${color3Grad});`;
}

color1GradInput.addEventListener('input', updateGradient);
color2GradInput.addEventListener('input', updateGradient);
color3GradInput.addEventListener('input', updateGradient); 
directionSelect.addEventListener('change', updateGradient);

updateGradient();




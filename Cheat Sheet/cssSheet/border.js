const radiusInput = document.getElementById('radiusInput');
const borderSizeInput = document.getElementById('borderSizeInput');
const paddingInput = document.getElementById('paddingInput')
const borderBox = document.getElementById('borderBox');
const borderBox2 = document.getElementById('borderBox2')

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
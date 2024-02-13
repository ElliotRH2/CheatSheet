const HTML_PrewiesData = {
/* 1st Code Preview: */
"code_1": `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Title of the document</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,

/* 2nd Code Preview: */
"code_2": `<!DOCTYPE html>
<html lang="en">
<head>
   <head>
      <style>
         h1 {
            background-color: black;
            color: green;
         }
      </style>
   </head>
</head>
<body>
   <h1>Hello World!</h1>
</body>
</html>`,

/* 3rd Code Preview: */
"code_3": `<!DOCTYPE html>
<html lang="en">
<body>
   <h1>Hello World!</h1>
   <h2> Why the fuck are you so, Elliot.</h2>
</body>
</html>`,

"code_4": `
/* Selectors */
selector {
    property: value;
}

/* Comments */
/* This is a comment */

/* Color */
color: #RRGGBB; /* Hexadecimal color */
color: rgb(R, G, B); /* RGB color */
color: rgba(R, G, B, A); /* RGBA color with opacity */

/* Background */
background-color: #RRGGBB; /* Background color */
background-image: url('image.jpg'); /* Background image */
background-size: cover; /* Cover background */
background-position: center; /* Center background */
background-repeat: no-repeat; /* Prevent background repetition */background-repeat: no-repeat; /* Prevent background repetition */background-repeat: no-repeat; /* Prevent background repetition */background-repeat: no-repeat; /* Prevent background repetition */

/* Text */
font-family: Arial, sans-serif; /* Font family */
font-size: 16px; /* Font size */
font-weight: bold; /* Font weight */
text-align: center; /* Text alignment */
text-decoration: underline; /* Text decoration */

/* Box Model */
padding: 10px; /* Padding */
margin: 10px; /* Margin */
border: 1px solid #000; /* Border */

/* Layout */
display: block; /* Block element */
display: inline-block; /* Inline block element */
display: inline; /* Inline element */
display: flex; /* Flexbox */
display: grid; /* CSS Grid */

/* Positioning */
position: relative; /* Relative positioning */
position: absolute; /* Absolute positioning */
position: fixed; /* Fixed positioning */
top: 0; /* Distance from the top */
bottom: 0; /* Distance from the bottom */
left: 0; /* Distance from the left */
right: 0; /* Distance from the right */
z-index: 1; /* Z-index */

/* Flexbox */
display: flex; /* Enable flexbox */
justify-content: center; /* Horizontal alignment */
align-items: center; /* Vertical alignment */
flex-direction: row; /* Flex direction */

/* CSS Grid */
display: grid; /* Enable grid */
grid-template-columns: 100px 100px 100px; /* Columns */
grid-template-rows: auto; /* Rows */
grid-gap: 10px; /* Gap between grid items */
grid-column: 1 / span 2; /* Column span */
grid-row: 1 / span 2; /* Row span */

/* Transitions & Animations */
transition: property duration timing-function delay; /* Transition */
animation: name duration timing-function delay iteration-count direction; /* Animation */

/* Media Queries */
@media screen and (max-width: 600px) {
    /* CSS for screens smaller than 600px */
}

/* Pseudo-classes */
selector:hover {
    /* CSS for hover */
}
selector:active {
    /* CSS for active */
}
selector:focus {
    /* CSS for focus */
}

/* Pseudo-elements */
selector::before {
    content: ''; /* Content before */
}
selector::after {
    content: ''; /* Content after */
}


`,
};

function getPreview(id) {
   return HTML_PrewiesData[id];
}
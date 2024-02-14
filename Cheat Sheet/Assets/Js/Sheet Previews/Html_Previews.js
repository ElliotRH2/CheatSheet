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

"code_4": `<div>
<h1>Heading</h1>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
</div>`,
};

function getPreview(id) {
   return HTML_PrewiesData[id];
}
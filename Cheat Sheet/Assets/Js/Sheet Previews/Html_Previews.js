const HTML_PrewiesData = {
   "code": `<!DOCTYPE html>
<html lang="en">
<body>
   <h1>Hello World!</h1>
</body>
</html>`,

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
</html>`
};

function getPreview(sheet, id) {
   return HTML_PrewiesData[id];
}
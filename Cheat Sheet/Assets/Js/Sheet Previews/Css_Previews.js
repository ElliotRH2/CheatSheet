const HTML_PrewiesData = {
   "code_1": `body {
   font-family: Arial, sans-serif;
   background-color: #f4f4f4;
   color: #333;
}

h1 {
   color: #007bff;
}`,

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
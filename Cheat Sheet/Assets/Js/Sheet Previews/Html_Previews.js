const HTML_PrewiesData = {
/* Html Code Preview: */
"code_Html": `<!DOCTYPE html>
<html lang="en">
<body>
   <h1>This is a heading</h1>
   <p>This is a paragraph.</p>
</body>
</html>`,

/* Head Code Preview: */
"code_Head": `<!DOCTYPE html>
<html lang="en">
<head>
   <style>
      h1 {
         background-color: black;
         color: green;
      }
   </style>
</head>
<body>
   <h1>Hello World!</h1>
</body>
</html>`,

/* Title Code Preview: */
"code_Title": `<!DOCTYPE html>
<html lang="en">
<head>
   <title>Document name that is displayed on search engine tabs</title>
</head>
</html>`,

/* Body Code Preview: */
"code_Body": `<!DOCTYPE html>
<html lang="en">
<body>
   <p>This is "the" Paragraph</p>
</body>
</html>`,

/* <h1> to <h6> (Headings) Code Preview: */
"code_Headings": `<!DOCTYPE html>
<html lang="en">
<head>
   <style>
      h1 {
         background-color: gray;
         color: red;
      }

      h2 {
         background-color: gray;
         color: green;
      }

      h3 {
         background-color: gray;
         color: blue;
      }

      h4 {
         background-color: black;
         color: red;
      }

      h5 {
         background-color: black;
         color: green;
      }

      h6 {
         background-color: black;
         color: blue;
      }
   </style>
</head>
<body>
   <h1>Hello World! (h1)</h1>
   <h2>Hello World! (h2)</h2>
   <h3>Hello World! (h3)</h3>
   <h4>Hello World! (h4)</h4>
   <h5>Hello World! (h5)</h5>
   <h6>Hello World! (h6)</h6>
</body>
</html>`,

/* Paragraph Code Preview: */
"code_Paragraph": `<!DOCTYPE html>
<html lang="en">
<head>
   <style>
      p {
         color: rgb(255, 123, 46);
      }
      .another {
         color: rgb(82, 82, 255)
      }
   </style>
</head>
<body>
   <p>This is a paragraph</p>
   <p class="another">This is another paragraph</p>
</body>
</html>`,

/* Break Line Code Preview: */
"code_Br": `<!DOCTYPE html>
<html lang="en">
<body>
   <p>This is a paragraph</p>
   <p>This is<br> a paragraph</p>
</body>
</html>`,

/* Break Line Code Preview: */
"code_Hr": `<!DOCTYPE html>
<html>
<body>
   <h1>The Main Languages of the Web</h1>

   <p>HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content.</p>

   <hr>

   <p>CSS is a language that describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work, because it can control the layout of multiple web pages all at once.</p>

   <hr>

   <p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values. JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
</body>
</html>`,

/* Comment Code Preview: */
"code_Comment": `<!DOCTYPE html>
<html>
<body>
   <!-- Main site content -->
   <div>Content</div>

   <!--
      Comments can be 
      multiple lines long.
      <div class="Commented-out Div">Content</div>
   -->

   <!--#region Header-->

   <div>Region Div</div>

   <!--#endregion-->
</body>
</html>`
};

function getPreview(id) {
   return HTML_PrewiesData[id];
}
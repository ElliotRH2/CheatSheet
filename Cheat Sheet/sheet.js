function copyCode() {
   const code = document.getElementById('code').innerText;
   navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard');
   }).catch(err => {
      console.error('Failed to copy:', err);
   });
}

var anchor = document.getElementById("Dropdown");
var dropdowns = document.querySelectorAll(".dropdown");
var test = false;

anchor.addEventListener("click", function(event) {
   console.log(event, test);
   if (test == false) {
      test = true;

      anchor.querySelector("img").src = "arrow.svg";
      dropdowns.forEach(function(dropdown) {
         dropdown.style.display = "none";
      });
   } else {
      test = false;

      anchor.querySelector("img").src = "arrow_down.svg";
      dropdowns.forEach(function(dropdown) {
         dropdown.style.display = "block";
      });
   };
});
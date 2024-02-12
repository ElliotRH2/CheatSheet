function copyCode() {
   const code = document.getElementById('code').innerText;
   navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard');
   }).catch(err => {
      console.error('Failed to copy:', err);
   });
}

function toggle(item) {
   var dropdown = item.querySelector(".dropdown");
   var arrow = item.querySelector("img");
   
   if (!(dropdown === null || arrow === null)) {
      if (dropdown.style.display == "none") {
         arrow.src = "arrow_down.svg";
         dropdown.style.display = "block";
      } else {
         arrow.src = "arrow.svg";
         dropdown.style.display = "none";
      };
   }
}

document.querySelectorAll(".sidelist #Dropdown").forEach(function(item) {
   toggle(item);

   item.addEventListener("click", function() {
      toggle(this);
   });
});
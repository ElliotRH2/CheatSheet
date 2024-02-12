function copyCode() {
   const code = document.getElementById('code').innerText;
   navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard');
   }).catch(err => {
      console.error('Failed to copy:', err);
   });
}

function displayCode() {
   const preview = document.querySelector(".preview");
   const code = preview.querySelector('#code');
   const iframe = preview.querySelector('#preview');
   
   if (code.style.display === "none") {
      code.style.display = "";
      iframe.style.display = "none";
   } else
   {
      const rect = code.getBoundingClientRect();

      iframe.style.width = rect.width + 'px';
      iframe.style.height = rect.height + 'px';
      iframe.style.backgroundColor = 'white';
      iframe.style.margin = '0.75rem';
      iframe.style.marginBottom = '0';
      iframe.style.borderBottomLeftRadius = "10px";
      iframe.style.borderBottomRightRadius = "10px";

      code.style.display = "none";
      iframe.style.display = "";
      
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      
      doc.open();
      doc.write(code.textContent);
      doc.close();
   }
}

document.querySelectorAll(".preview [id^='code']").forEach(function(item) {
   const grandParent = item.parentNode.parentNode;
   const header = grandParent.querySelector(".preview-top");
   const iframe = item.parentNode.querySelector("iframe");

   if (header && iframe) {
      const copyButton = header.querySelector("#Copy_Code");
      const previewButton = header.querySelector("#Preview_Code");

      const dataForCode = getPreview("Html", item.id);
      if (dataForCode) {
         item.textContent = dataForCode;
      }

      if (copyButton) {
         copyButton.addEventListener('click', function() {
            const code = item.innerText;

            navigator.clipboard.writeText(code).then(() => {
               alert('Code copied to clipboard');
            }).catch(err => {
               console.error('Failed to copy:', err);
            });
         });
      }

      if (previewButton) {
         previewButton.addEventListener('click', function() {
            if (item.style.display === "none") {
               item.style.display = "";
               iframe.style.display = "none";

               previewButton.style.backgroundColor = "";
            } else
            {
               const rect = item.getBoundingClientRect();
         
               iframe.style.width = rect.width + 'px';
               iframe.style.height = rect.height + 'px';
               iframe.style.backgroundColor = 'white';
               iframe.style.margin = '0.75rem';
               iframe.style.marginBottom = '0';
               iframe.style.borderBottomLeftRadius = "10px";
               iframe.style.borderBottomRightRadius = "10px";
         
               item.style.display = "none";
               iframe.style.display = "";
               
               var doc = iframe.contentDocument || iframe.contentWindow.document;
               
               doc.open();
               doc.write(item.textContent);
               doc.close();

               previewButton.style.backgroundColor = "green";
            }
         });
      }
   }
});

function toggle(item) {
   var dropdown = item.querySelector(".dropdown");
   var arrow = item.querySelector("img");
   console.log(item);

   if (!(dropdown === null || arrow === null)) {
      if (dropdown.style.display == "none") {
         arrow.src = "./Assets/Vfx/arrow_down.svg";
         dropdown.style.display = "block";
      } else {
         arrow.src = "./Assets/Vfx/arrow.svg";
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
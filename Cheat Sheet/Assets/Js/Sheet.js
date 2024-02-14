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
      item.addEventListener('wheel', (e) => {
         if (item.scrollHeight > item.clientHeight) {
            e.preventDefault();
         
            const newScrollTop = item.scrollTop + 100 * Math.sign(e.deltaY);
            
            const minScrollTop = 0;
            const maxScrollTop = item.scrollHeight - item.clientHeight;
            const boundedScrollTop = Math.max(minScrollTop, Math.min(maxScrollTop, newScrollTop));
            
            item.scrollTop = boundedScrollTop;
         }
      });
      if (item.scrollWidth > item.clientWidth) {
         item.style.overflowX = 'scroll';
       } else {
         item.style.overflowX = 'hidden';
       }

      const copyButton = header.querySelector("#Copy_Code");
      const previewButton = header.querySelector("#Preview_Code");
      const editButton = header.querySelector("#Edit_Code");
      const resetButton = header.querySelector("#Reset_Code");

      let editingMode = false;

      const dataForCode = getPreview(item.id);
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

      function togglePreview() {
         if (editingMode === true)
         {
            editMode(false)
         }
         
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
      }

      function editMode(bool) {
         if (item.style.display === "none") {
            togglePreview();
         }

         if ((bool !== true && editingMode === true) || bool === true) {
            item.contentEditable = "false";
            editingMode = false;
            editButton.style.backgroundColor = "";
         } else {
            item.contentEditable = "true";
            editingMode = true;
            editButton.style.backgroundColor = "green";
         }
      }

      function resetCode() {
         if (editingMode === true)
         {
            editMode(false)
         }
         if (item.style.display === "none") {
            togglePreview();
            item.textContent = dataForCode;
            togglePreview();
         } else {
            item.textContent = dataForCode;
         }
      }
      
      if (editButton) {
         editButton.addEventListener('click', editMode);
      }

      if (resetButton) {
         resetButton.addEventListener('click', resetCode);
      }

      if (previewButton) {
         previewButton.addEventListener('click', togglePreview);

         var external_PreviewButtons = Array.from(document.querySelectorAll(`[id="${item.id}"]`)).filter(function(element) {
            return !grandParent.contains(element);
         });
         
         if (external_PreviewButtons.length > 0) {
            external_PreviewButtons.forEach(function(element) {
               element.addEventListener('click', togglePreview);
           });
         }
      }
   }
});

function toggle(item) {
   var dropdown = item.querySelector(".dropdown");
   var arrow = item.querySelector("img");

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
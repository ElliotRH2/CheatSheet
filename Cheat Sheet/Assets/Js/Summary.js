function loadJSON(callback) {
   var xobj = new XMLHttpRequest();

   xobj.overrideMimeType("application/json");
   xobj.open('GET', './categories.json', true);
   xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == 200) {
         callback(JSON.parse(xobj.responseText));
      }
   };
   xobj.send(null);
}

let collumnsDisplayed = 0;

function Refresh() {
   loadJSON(function(json) {
      var categoryKeys = Object.keys(json);
      
      var categoryAmount = categoryKeys.length;
      
      var tooltip = document.getElementById('tooltip');
      var test = document.querySelector(".summaryContainer");
      test.innerHTML = '';
   
      let mainDiv = document.createElement("div");
      mainDiv.className = "summaryCollumn";
   
      let totalCollumns = (window.innerWidth > 1300) ? 4 : (window.innerWidth > 1000) ? 3 : (window.innerWidth > 700) ? 2 : 1;
      let rowsPerCollumn = Math.floor(categoryAmount / totalCollumns);
      let remainderRows = categoryAmount % totalCollumns;
   
      let currentCollumn = 1;
      let lastCollumn = currentCollumn - 1;
      let currentRow = 0;
      let totalRows = 0;
      
      collumnsDisplayed = totalCollumns; 

      for(var category in json) {
         if (totalRows >= categoryAmount) {
            break;
         }
   
         if (lastCollumn < currentCollumn) {
            lastCollumn = currentCollumn
   
            if (remainderRows > 0) {
               remainderRows--;
               currentRow--;
            }
         }
         
         if (currentRow >= rowsPerCollumn) {
            mainDiv = document.createElement("div");
            mainDiv.className = "summaryCollumn";
   
            currentRow = 1;
            currentCollumn++;
         } else {
            currentRow++;
         }
         
         var innerDiv = document.createElement("div");
         innerDiv.className = "summaryDropdown";
   
         var itemDiv = document.createElement("div");
         itemDiv.className = "summaryDropdown-header";
         itemDiv.textContent = category;
         innerDiv.appendChild(itemDiv);
   
         for(var subcategory in json[category]) {
            var Id = json[category][subcategory].Id;

            var contentDiv = document.createElement("div");
            contentDiv.className = "summaryDropdown-item";
            contentDiv.textContent = subcategory;
            contentDiv.style.display = "none";

            var descDiv = document.createElement("div");
            descDiv.className = "summaryDropdown-subItem";
            descDiv.textContent = json[category][subcategory].Description;
            descDiv.style.display = "none";

            contentDiv.appendChild(descDiv);

            let gotoAnchor
            if (Id.startsWith("#") && Id !== "#") {
               gotoAnchor = document.createElement("a");
               gotoAnchor.className = "summaryDropdown-subItem summaryDropdown-goto";
               gotoAnchor.textContent = "Read more";
               gotoAnchor.style.display = "none";
               gotoAnchor.href = (Id.startsWith("#") && Id !== "#") ? Id : "";

               contentDiv.appendChild(gotoAnchor);
            }
            
            if (gotoAnchor) {
               descDiv.style.borderRadius = "8px 8px 0 0";
               descDiv.style.marginBottom = "0";
               gotoAnchor.style.borderRadius = "0 0 8px 8px";
               gotoAnchor.style.marginTop = "0";
            } else {
               descDiv
            }

            (function(contentDiv, descDiv, gotoAnchor) {
               const normalColour = getComputedStyle(document.documentElement).getPropertyValue('--preview-secondary');
               const toggeldColour = getComputedStyle(document.documentElement).getPropertyValue('--preview-scrollbar-main');
               let toggled = false;

               itemDiv.addEventListener('click', function() {
                  contentDiv.style.display = (contentDiv.style.display === "none") ? "block" : "none";
                  contentDiv.style.backgroundColor = "";

                  descDiv.style.display = "none";
                  if (gotoAnchor) {
                     gotoAnchor.style.display = "none";
                  }
               });

               contentDiv.addEventListener('click', function() {
                  descDiv.style.display = (descDiv.style.display === "none") ? "block" : "none";
                  contentDiv.style.backgroundColor = (descDiv.style.display === "none") ? "" : "var(--preview-scrollbar-main)";
                  
                  if (gotoAnchor) {
                     gotoAnchor.style.display = (gotoAnchor.style.display === "none") ? "block" : "none";
                  }
               });

               if (gotoAnchor) {
                  gotoAnchor.addEventListener('click', function (event) {
                     event.preventDefault();
                     
                     var targetId = this.getAttribute('href').substring(1);
                     smoothScroll(targetId, 1000);
                  });
               }
            })(contentDiv, descDiv, gotoAnchor);
            
            innerDiv.appendChild(contentDiv);
         }
         
         totalRows += 1;
   
         mainDiv.appendChild(innerDiv);
         test.appendChild(mainDiv);
      }
   });
}

Refresh()

window.addEventListener('resize', function() {
   const displayCollumns = (window.innerWidth > 1300) ? 4 : (window.innerWidth > 1000) ? 3 : (window.innerWidth > 700) ? 2 : 1;
   
   if (displayCollumns != collumnsDisplayed) {
      Refresh()
   }
}); 
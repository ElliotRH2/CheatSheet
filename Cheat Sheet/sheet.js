function copyCode() {
   const code = document.getElementById('code').innerText;
   navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard');
   }).catch(err => {
      console.error('Failed to copy:', err);
   });
} 
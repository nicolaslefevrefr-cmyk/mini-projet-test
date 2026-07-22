const valueEl = document.getElementById('value');
const KEY = 'ship-test-counter';

let count = Number(localStorage.getItem(KEY) || 0);
render();

document.getElementById('inc').addEventListener('click', () => { count++; save(); });
document.getElementById('dec').addEventListener('click', () => { count--; save(); });

function save(){
  localStorage.setItem(KEY, String(count));
  render();
}
function render(){
  valueEl.textContent = count;
}

// Enregistre le service worker si le navigateur le supporte (test PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // silencieux : pas grave si ça échoue en local
    });
  });
}

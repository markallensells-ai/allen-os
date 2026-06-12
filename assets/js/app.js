
const today = new Date();
document.querySelectorAll('[data-date]').forEach(el => {
  el.textContent = today.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'});
});

function setClock(){
  const now = new Date();
  document.querySelectorAll('[data-time]').forEach(el=>{
    el.textContent = now.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});
  });
}
setClock();
setInterval(setClock, 30000);

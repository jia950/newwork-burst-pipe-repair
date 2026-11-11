document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav-links');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
 document.querySelectorAll('.nav-group>button').forEach(btn=>btn.addEventListener('click',()=>{if(window.matchMedia('(max-width:950px)').matches){const g=btn.closest('.nav-group');g.classList.toggle('expanded');btn.setAttribute('aria-expanded',String(g.classList.contains('expanded')));}}));
});

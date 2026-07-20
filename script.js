window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},600);

});


// Card Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.background = `
radial-gradient(circle at ${x}px ${y}px,
rgba(212,175,55,.18),
rgba(255,255,255,.06))
`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.07)";

});

});

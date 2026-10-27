"use strict";
const buttons = [...document.querySelectorAll("[data-filter]")];
const cards = [...document.querySelectorAll("[data-category]")];
const count = document.querySelector(".work-count");
buttons.forEach(button => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  buttons.forEach(item => {const selected=item===button;item.classList.toggle("active",selected);item.setAttribute("aria-pressed",String(selected));});
  let visible=0;
  cards.forEach(card => {card.hidden=filter!=="todos"&&card.dataset.category!==filter;if(!card.hidden)visible++;});
  count.textContent=visible+(visible===1?" frente de atuação":" frentes de atuação");
}));

// Efeito de digitação no nome
const nome = "Jonas da Silva Alves";
let i = 0;

function digitar() {
  if (i < nome.length) {
    document.getElementById("nome").innerHTML += nome.charAt(i);
    i++;
    setTimeout(digitar, 100);
  }
}
window.onload = digitar;

// Alternar modo claro/escuro
document.getElementById("modoToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("modoToggle");
  btn.textContent = document.body.classList.contains("dark")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
});

// Expandir/ocultar detalhes de experiências
function toggleDetalhes(card) {
  const detalhes = card.querySelector(".detalhes");
  detalhes.style.display =
    detalhes.style.display === "block" ? "none" : "block";
}

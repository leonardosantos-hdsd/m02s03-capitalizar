// Função robusta para capitalizar a 1ª letra de cada palavra (Unicode-friendly)
function capitalizarFrase(frase) {
  if (typeof frase !== "string") return "";
  // normaliza espaços múltiplos e remove espaços nas pontas
  const limpa = frase.trim().replace(/\s+/g, " ");

  // substitui cada "palavra" (sequência de letras unicode) mantendo sinais
  return limpa.replace(/\p{L}[\p{L}\p{M}\p{N}]*/gu, (w) => {
    // Se quiser manter acrônimos já em maiúsculas, descomente a linha abaixo:
    // if (w === w.toUpperCase()) return w;
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cap");
  const entrada = document.getElementById("entrada");
  const saida = document.getElementById("saida");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    saida.textContent = capitalizarFrase(entrada.value);
  });
});

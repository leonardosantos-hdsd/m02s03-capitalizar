#!/usr/bin/env node
// Executa no terminal: `node cli.js` (ou torne executável com chmod +x)

function capitalizarFrase(frase) {
  if (typeof frase !== "string") return "";
  const limpa = frase.trim().replace(/\s+/g, " ");
  return limpa.replace(/\p{L}[\p{L}\p{M}\p{N}]*/gu, (w) =>
    w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );
}

process.stdout.write("Digite uma frase: ");
process.stdin.setEncoding("utf8");
let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => {
  const frase = buffer.replace(/\r?\n$/, "");
  console.log(capitalizarFrase(frase));
});

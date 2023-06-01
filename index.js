const body = document.body;
const redRange = document.getElementById('vermelho');
const greenRange = document.getElementById('verde');
const blueRange = document.getElementById('azul');

function updateColor() {
  const valorVermelho = vermelho.value;
  const valorVerde = verde.value;
  const valorAzul = azul.value;

  body.style.backgroundColor = `rgb(${valorVermelho}, ${valorVerde}, ${valorAzul})`;
}

vermelho.addEventListener('input', updateColor);
verde.addEventListener('input', updateColor);
azul.addEventListener('input', updateColor);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculadoraForm");
    const resultadoElement = document.getElementById("resultado");
    const novoCalculoButton = document.getElementById("novoCalculo");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const numeroA = parseFloat(document.getElementById("numeroA").value);
      const numeroB = parseFloat(document.getElementById("numeroB").value);
      const operacao = document.getElementById("operacao").value;
      let resultado = 0;
  
      switch (operacao) {
        case "+":
          resultado = numeroA + numeroB;
          break;
        case "-":
          resultado = numeroA - numeroB;
          break;
        case "*":
          resultado = numeroA * numeroB;
          break;
        case "/":
          resultado = numeroA / numeroB;
          break;
      }
  
      resultadoElement.textContent = `Resultado: ${resultado}`;
      resultadoElement.style.display = "block";
    });
  
    novoCalculoButton.addEventListener("click", function () {
      resultadoElement.style.display = "none";
      form.reset();
    });
  });
  
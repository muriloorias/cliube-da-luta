let responses = [
      "olá estou bem como posso te ajudar",
      "sim",
      "não",
      "para acessar as paginas clique nos quadrados",
      "perdão não entendi"
  ];
  
  function readInput() {
      var input = document.getElementById("inputChat");
      var inputtext = input.value.trim().toLowerCase();
  
      let responseText = "perdão não entendi"; // Resposta padrão
  
      if (inputtext === "olá") {
          responseText = responses[0];
      } else if (inputtext === "voce é uma ia") {
          responseText = responses[1];
      } else if (inputtext === "voce é um humano") {
          responseText = responses[2];
      } else if (inputtext === "como eu acesso as paginas") {
          responseText = responses[3];
      }
  
      document.getElementById("text-respond").innerText = responseText;
  }

  document.getElementById("readInput").addEventListener("click", readInput);
  
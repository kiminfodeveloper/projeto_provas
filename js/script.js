// quiz.js

function calcularNota() {
  let pontuacao = 0;

  // Obtenha as respostas selecionadas pelo usuário
  const respostas = [
    document.querySelector('input[name="q1"]:checked'),
    document.querySelector('input[name="q2"]:checked'),
    document.querySelector('input[name="q3"]:checked'),
    document.querySelector('input[name="q4"]:checked'),
    document.querySelector('input[name="q5"]:checked'),
    document.querySelector('input[name="q6"]:checked'),
    document.querySelector('input[name="q7"]:checked'),
    document.querySelector('input[name="q8"]:checked'),
    document.querySelector('input[name="q9"]:checked'),
    document.querySelector('input[name="q10"]:checked'),

    // Adicione as outras 8 perguntas aqui
  ];

  // Respostas corretas
  const respostasCorretas = [
    "c",
    "a",
    "c",
    "a",
    "c",
    "c",
    "b",
    "b",
    "a",
    "c" /* Adicione as respostas corretas para as outras perguntas aqui */,
  ];

  // Calcule a pontuação
  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] && respostas[i].value === respostasCorretas[i]) {
      pontuacao++;
    }
  }

  // Exiba a pontuação final
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Sua pontuação final é: ${pontuacao} de 10.`;
}

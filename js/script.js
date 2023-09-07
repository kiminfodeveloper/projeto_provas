// quiz.js
// primeira prova
function calcularNotaIntroducao() {
  let pontuacao = 0;

  const erroRespostasFaltando = document.getElementById(
    "erro-respostas-faltando"
  );

  // Obtenha as respostas selecionadas pelo usuário
  const respostasIntroducao = [
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

  const irParaPergunta = [
    document.getElementById("testQuestion1"),
    document.getElementById("testQuestion2"),
    document.getElementById("testQuestion3"),
    document.getElementById("testQuestion4"),
    document.getElementById("testQuestion5"),
    document.getElementById("testQuestion6"),
    document.getElementById("testQuestion7"),
    document.getElementById("testQuestion8"),
    document.getElementById("testQuestion9"),
    document.getElementById("testQuestion10"),
  ];

  // Verifique se alguma das respostas é nula (não foi selecionada)
  const perguntaNaoRespondida = respostasIntroducao.findIndex(
    (resposta) => !resposta
  );
  if (perguntaNaoRespondida !== -1) {
    const numeroPergunta = perguntaNaoRespondida + 1; // Adicione 1 para corresponder à contagem de perguntas
    alert(`Por favor, responda a pergunta ${numeroPergunta}.`);

    // Role a página até a pergunta não respondida usando o elemento no array irParaPergunta
    irParaPergunta[perguntaNaoRespondida].scrollIntoView({
      behavior: "smooth",
    });

    return; // Não calcule a pontuação se alguma pergunta estiver em branco
  } else {
    erroRespostasFaltando.textContent = ""; // Limpe a mensagem de erro
  }

  // Verifique se alguma das respostas é nula (não foi selecionada)
  if (respostasIntroducao.some((resposta) => !resposta)) {
    erroRespostasFaltando.textContent =
      "Por favor, responda todas as perguntas.";
    return; // Não calcule a pontuação se alguma pergunta estiver em branco
  } else {
    erroRespostasFaltando.textContent = ""; // Limpe a mensagem de erro
  }

  login = "admin";
  password = "admin";

  alert("Digite as credenciais");
  loginValidation = prompt("Login");
  passwordValidation = prompt("Senha");

  if (login === loginValidation && password === passwordValidation) {
    // Se as credenciais estiverem corretas, continue a calcular a pontuação

    // respostasIntroducao corretas
    const respostasIntroducaoCorretas = [
      "c",
      "a",
      "c",
      "a",
      "c",
      "c",
      "b",
      "b",
      "a",
      "c" /* Adicione as respostasIntroducao corretas para as outras perguntas aqui */,
    ];

    // Calcule a pontuação
    for (let i = 0; i < respostasIntroducao.length; i++) {
      if (
        respostasIntroducao[i] &&
        respostasIntroducao[i].value === respostasIntroducaoCorretas[i]
      ) {
        pontuacao++;
      }
    }

    // Exiba a pontuação final
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Sua pontuação final é: ${pontuacao} de 10.`;

    // Tornar a seção de gabarito visível
    const gabarito = document.getElementById("gabarito");
    gabarito.style.display = "block";

    const gabaritoRespostas = document.querySelector(".gabaritoResposta");
    for (let i = 0; i < respostasIntroducaoCorretas.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = `Pergunta ${i + 1}: Resposta ${respostasIntroducaoCorretas[i]}`;
      gabaritoRespostas.appendChild(li);
    }
    
  } else {
    // Se as credenciais estiverem incorretas, exiba uma mensagem de erro
    erroRespostasFaltando.textContent =
      "Credenciais incorretas. Tente novamente.";
  }
}


// Windows 
function calcularNotaWindows() {
  let pontuacao = 0;

  const erroRespostasFaltando = document.getElementById(
    "erro-respostas-faltando"
  );

  // Obtenha as respostas selecionadas pelo usuário
  const respostasWindows = [
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

  const irParaPergunta = [
    document.getElementById("testQuestion1"),
    document.getElementById("testQuestion2"),
    document.getElementById("testQuestion3"),
    document.getElementById("testQuestion4"),
    document.getElementById("testQuestion5"),
    document.getElementById("testQuestion6"),
    document.getElementById("testQuestion7"),
    document.getElementById("testQuestion8"),
    document.getElementById("testQuestion9"),
    document.getElementById("testQuestion10"),
  ];

  // Verifique se alguma das respostas é nula (não foi selecionada)
  const perguntaNaoRespondida = respostasWindows.findIndex(
    (resposta) => !resposta
  );
  if (perguntaNaoRespondida !== -1) {
    const numeroPergunta = perguntaNaoRespondida + 1; // Adicione 1 para corresponder à contagem de perguntas
    alert(`Por favor, responda a pergunta ${numeroPergunta}.`);

    // Role a página até a pergunta não respondida usando o elemento no array irParaPergunta
    irParaPergunta[perguntaNaoRespondida].scrollIntoView({
      behavior: "smooth",
    });

    return; // Não calcule a pontuação se alguma pergunta estiver em branco
  } else {
    erroRespostasFaltando.textContent = ""; // Limpe a mensagem de erro
  }

  // Verifique se alguma das respostas é nula (não foi selecionada)
  if (respostasWindows.some((resposta) => !resposta)) {
    erroRespostasFaltando.textContent =
      "Por favor, responda todas as perguntas.";
    return; // Não calcule a pontuação se alguma pergunta estiver em branco
  } else {
    erroRespostasFaltando.textContent = ""; // Limpe a mensagem de erro
  }

  login = "admin";
  password = "admin";

  alert("Digite as credenciais");
  loginValidation = prompt("Login");
  passwordValidation = prompt("Senha");

  if (login === loginValidation && password === passwordValidation) {
    // Se as credenciais estiverem corretas, continue a calcular a pontuação

    // respostasIntroducao corretas
    const respostasWindowsCorretas = [
      "c",
      "c",
      "b",
      "a",
      "a",
      "d",
      "b",
      "b",
      "c",
      "d" /* Adicione as respostasIntroducao corretas para as outras perguntas aqui */,
    ];

    // Calcule a pontuação
    for (let i = 0; i < respostasWindows.length; i++) {
      if (
        respostasWindows[i] &&
        respostasWindows[i].value === respostasWindowsCorretas[i]
      ) {
        pontuacao++;
      }
    }

    // Exiba a pontuação final
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Sua pontuação final é: ${pontuacao} de 10.`;

    // Tornar a seção de gabarito visível
    const gabarito = document.getElementById("gabarito");
    gabarito.style.display = "block";

    const gabaritoRespostas = document.querySelector(".gabaritoResposta");
    for (let i = 0; i < respostasWindowsCorretas.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = `Pergunta ${i + 1}: Resposta ${respostasWindowsCorretas[i]}`;
      gabaritoRespostas.appendChild(li);
    }
    
  } else {
    // Se as credenciais estiverem incorretas, exiba uma mensagem de erro
    erroRespostasFaltando.textContent =
      "Credenciais incorretas. Tente novamente.";
  }
}

function submitQuiz() {
    var quizForm = document.getElementById('quizForm');
    var resultsDiv = document.getElementById('results');

    var correctAnswers = 0;
    var totalQuestions = 3;

    var correct = [];
    var incorrect = [];

    // Verifica cada pergunta
    if (quizForm.q1.value === 'a') { // Resposta correta da questão 1 é a opção A
        correctAnswers++;
        correct.push(1);
    } else {
        incorrect.push(1);
    }

    if (quizForm.q2.value === 'c') { // Resposta correta da questão 2 é a opção D
        correctAnswers++;
        correct.push(2);
    } else {
        incorrect.push(2);
    }

    if (quizForm.q3.value === 'b') { // Resposta correta da questão 3 é a opção A
        correctAnswers++;
        correct.push(3);
    } else {
        incorrect.push(3);
    }

    // Exibe os resultados
    var resultHtml = '<h2>Resultados:</h2>' +
                     '<p>Corretas: ' + correctAnswers + '</p>' +
                     '<p>Incorretas: ' + (totalQuestions - correctAnswers) + '</p>';

    resultHtml += '<h3>Respostas Corretas:</h3>';
    for (var j = 0; j < correct.length; j++) {
        resultHtml += '<p class="correct">Pergunta ' + correct[j] + '</p>';
    }

    resultHtml += '<h3>Respostas Incorretas:</h3>';
    for (var k = 0; k < incorrect.length; k++) {
        resultHtml += '<p class="incorrect">Pergunta ' + incorrect[k] + '</p>';
    }
    
    resultsDiv.innerHTML = resultHtml;
    
    // Desativa os botões de rádio após enviar o quiz
    var radioButtons = document.getElementsByTagName('input');
    for (var l = 0; l < radioButtons.length; l++) {
        if (radioButtons[l].type === 'radio') {
            radioButtons[l].disabled = true;
        }
    }

    // Desativa o botão de enviar
    document.querySelector('button').disabled = true;
}

let doctitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Volte aqui 😢";
})

window.addEventListener("focus", () =>{
    document.title = doctitle;
})


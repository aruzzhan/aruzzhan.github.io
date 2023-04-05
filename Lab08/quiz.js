$(document).ready(function() {

     questions = [        "What is capital of Kazakhstan?",        "What is largest city in Kazakhstan?",        "What is the main ecological problem in Almaty?",        "What is the poppulation of Kazakhstan?"  ];

     answers = [        "Astana",        "Almaty",        "Air pollution",        "19 million"    ];

    choice_options = [        ["Astana", "London", "Almaty", "Taraz"],
        ["Karaganda", "Astana", "Almaty", "Semey"],
        ["Water pollution", "Soil erosion", "Air pollution", "Hunting"],
        ["50 million", "19 million", "10 million ", "I don`t know"],
     
    ];
    quizBox = $("#quiz-box"); 
    $('.question').append ("<p class='d'> Question 1. What is capital of Kazakhstan? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Almaty</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Astana</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Semey</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Taraz</label>")

    
    $('.question').append ("<p class='d'> Question 2. What is largest city in Kazakhstan? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Almaty</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Karaganda</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Moscow</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Aktau</label>")
 
    
    $('.question').append ("<p class='d'> Question 3.What is the main ecological problem in Almaty? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Air pollution</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Water pollution</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Soil erosion</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Hunting</label>")
    


    for (i = 0; i < questions.length; i++) {
         question_html = '<p><b>' + questions[i] + '</b></p>';
         options_html = '<ul>';
        for ( j = 0; j < choice_options[i].length; j++) {
            options_html += '<li><input type="radio" name="answer' + i + '" value="' + choice_options[i][j] + '"> ' + choice_options[i][j] + '</li>';
        }
        options_html += '</ul>';
        $('#questions').append(question_html + options_html);
    }
  
    score = 0;
    reset = false;

    $('#check_button').click(function() {
         score = 0;
        for ( i = 0; i < questions.length; i++) {
             selected_answer = $('input[name=answer' + i + ']:checked').val();
            if (selected_answer == answers[i]) {
                score++;
            }
        }
         score_ = (score / questions.length) * 100;
         score_html = '<p> Result of the quiz is ' + score + ' correct answer(s)';
         $("#quiz-box").append ("<h2>Result of your quiz is: " + score + "</h2>");
        $('#quiz-result').html(score_html);
    });

});



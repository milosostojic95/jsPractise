/*
function isPolinrome(word) {
    const wordCheck = word.split('');
    console.log(wordCheck)
    for(i=0; i<wordCheck.length/2; i++) {
        if(wordCheck[i] === wordCheck[wordCheck.length-(i+1)]){
            console.log('itns polindrome')
        }else{
            console.log('not polindrome')
        }
    }
   
}
isPolinrome('niin');

// prime number function 
function test_prime(n)
{

  if (n===1) {
    return false;
  }
  else if(n === 2) {
    return true;
  } else {
    for(var x = 2; x < n; x++) {
      if(n % x === 0) {
        return false;
        }
    }
    return true;  
  }
}

console.log(test_prime(37));
*/
// question function

function Questins (question,answers,correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Questins.prototype.displayQuestion = function() {
    console.log(this.question);
    for( i=0; i<this.answers.length; i++ ) {
        console.log(i+':' +this.answers[i]);
    }
}

Questins.prototype.checkAnswer = function(ans) {
    if(ans === this.correct) {
        console.log('correct answer')
    } else {
        console.log('wrong answer')
    }
}

const q1 = new Questins ('jel milos jeo?',['yes','no'],'1');
const q2 =  new Questins ('sta je milos zavrsio?',['saobracajni','georafksi','medicina'],0);
const q3 = new Questins ('je l najjaci proigamer?',['yes','no'],1);

const questions = [q1,q2,q3];

function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');
    console.log(answer)

    if(answer !== 'exit') {
        questions[n].checkAnswer(parseInt(answer));
        
        nextQuestion();
    }
}

nextQuestion();
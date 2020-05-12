// 
function isPolinrome(word) {
    const wordSplit = word.split('');
    const wordCheck = wordSplit.filter(word => word.trim().length > 0);

    for(i=0; i<wordCheck.length/2; i++) {
        if(wordCheck[i] === wordCheck[wordCheck.length-(i+1)]){
            return true;
        }else{
            return false;
        }
    }   
}
console.log(isPolinrome('ana voli milovana'));
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

Questins.prototype.checkAnswer = function(ans, callBack) {
    let sc; 

    if(ans === this.correct) {
        console.log('correct answer')
       sc = callBack(true);
    } else {
        console.log('wrong answer');
        sc = callBack(false);
    }
    this.showScore(sc);
}

Questins.prototype.showScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------------');
}

const q1 = new Questins ('jel milos jeo?',['yes','no'], 1);
const q2 =  new Questins ('sta je milos zavrsio?',['saobracajni','georafksi','medicina'], 0);
const q3 = new Questins ('je l najjaci proigamer?',['yes','no'], 1);

const questions = [q1,q2,q3];

function score() {
    let sc = 0;
    return function (correct) {
        if(correct) {
            sc++;
        } 
        return sc;
    }
}

const keepScore = score();

function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');


    if(answer !== 'exit') {
        questions[n].checkAnswer(parseInt(answer), keepScore);
        
        nextQuestion();
    }
}

nextQuestion();
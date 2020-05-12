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

// question function
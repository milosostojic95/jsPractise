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
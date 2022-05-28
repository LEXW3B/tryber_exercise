function readingPalindrome(search){
    for(key in search){
        if(search[key]!=search[(search.length-1) -key]){
            return false;
        }
    }
  return true;
}
function readingPalindrome(search){
    let reverse=search.split('').reverse().join('');
    if(reverse===search){
        return true;
    }else{
        return false;
    }
}  
console.log(readingPalindrome('arara'));
console.log(readingPalindrome('desenvolvimento')); 

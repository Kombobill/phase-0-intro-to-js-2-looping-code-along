// Code your solution here
// Code your solutions in this file
function writeCards (string, event){
    var thisarray = []; 
    for (let counter = 0; counter < string.length; counter++){ 
        thisarray.push(`Thank you, ${string[counter]}, for the wonderful ${event} gift!`);
      }
    return thisarray;
  }
  function countDown(num){
    
    while (num >= 0)
    {
        console.log(num)
        num--;
    }
  }
  


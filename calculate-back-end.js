/******************
 * YOUR CODE HERE *
 ******************/
function calculate(s1, s2, sign) {
  // Get Strings as Numbers
  const num1 = parseInt(s1);
  const num2 = parseInt(s2);
  
  // Will Return this later
  let answer = 0;
  
  // Strings for operator comparison
  let add = "+ plus added to";
  let subtract = "- minus subtracted from";
  let multiply = "x times X multiplied by";
  let divide = "/ divide divided by";
  let mod = "% modulus";
  
  if(add.includes(sign)) {
    answer = num1 + num2;
  }

  else if(subtract.includes(sign)) {
    answer = num1 - num2;
  }

  else if(multiply.includes(sign)){
    answer = num1 * num2;
  }

  else if(divide.includes(sign)) {
    answer = num1 / num2;
  }

  else if(mod.includes(sign)) {
    answer = num1 % num2;
  }

  else {
    answer = "Sorry, that's not a mathematical operation!";
  }

  return answer;
}

 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;
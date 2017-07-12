//console.log('starting');
//function isDrinkingAge(age){
  //if(age >= 21){
//  return true;
//  }
  //else{
    //return false;
//  }
//}

//var result = isDrinkingAge(41);
//console.log('isDrinkingAge 41',result);
//result = isDrinkingAge(20);
//console.log('isDrinkingAge 20',result);


// to turn any code into notes, highlight and hit command /





//when iut says syntax error missing parenthises, it may mean comma
//when in inspect page on chrome, use step into next function in sources to check each line of code.
//to turn off debugger, hit the blue selection arrow to the right of top thingy

function formatName(firstName, lastName, middleInitial) {
  console.log('passed in', firstName, lastName, middleInitial);
  if (lastName === undefined && middleInitial === undefined){
    return firstName;
  }
  else if (middleInitial === undefined){
   return firstName + ' ' + lastName;
  }
  //to avoid having to switch the guts for if and else if, I could have formated like this:
  // if(middleInitial=== undefiuned, firstName)  and gotten the same result
  //code for formatting when there is no middle initial
  else{
    //code for fofrmatting when all the pieces are there
    return firstName + ' ' + middleInitial +'. '+ lastName;
  }
}
result = formatName('Rebecca', 'Childs', 'A');
console.log('formatName - Rebecca A. Childs', result);

result = formatName('Elijah', 'Mosley');
console.log('formatName - Elijah Mosley-', result);

result = formatName('Alexis');
console.log('formatName - Alexis', result);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword()
{
  var len = prompt("How many characters would you like your password to contain? (min: 9) (max: 128)");

  len = check(len);
  console.log(len);
  filter = filterPassword();
  pass = createPassword(filter, len);

  return pass;
}

// Checks both parameters
function check(len)
{
  while(checkType(len) === false || checkLength(len) === false)
  {
    len = prompt("Please enter a digit between 9 and 128!");
    checkType(len);
    checkLength(len);
  }

  return len;
}

// Checks if the answer submitted is a number
function checkType(len)
{
  var regExp = /[a-zA-Z]/g;

  if(typeof len === 'string')
  {

    if(regExp.test(len))
    {return false;}
    
    else if(Number.isInteger(parseInt(len)) === true)
    {return true;}

    else
    {return false;}

  }

  else
  {return false;}
}

// Checks the length and make sures it is right size
function checkLength(len)
{
  if(len < 9 || len > 128)
  {return false;}

  else
  {return true;}
}

function filterPassword()
{
  var filter = [];

  if(confirm("Would you like your password to include special characters?"))
  {
    console.log("special characters: true");
    filter.push(true);
    console.log(filter[0]);
  }

  else
  {
    console.log("special characters: false");
    filter.push(false);
    console.log(filter[0]);
  }

  if(confirm("Would you like your password to include numbers characters?"))
  {
    console.log("number characters: true");
    filter.push(true);
    console.log(filter[1]);
  }

  else
  {
    console.log("number character: false");
    filter.push(false);
    console.log(filter[1]);
  }

  if(confirm("Would you like your password to include lowercase characters?"))
  {
    console.log("lowercase characters: true");
    filter.push(true);
    console.log(filter[2]);
  }

  else 
  {
    console.log("lowercase characters: false");
    filter.push(false);
    console.log(filter[2]);
  }

  if(confirm("Would you like your password to include uppercase characters?"))
  {
    console.log("uppercase characters: true");
    filter.push(true);
    console.log(filter[3]);
  }

  else
  {
    console.log("lower characters: false")
    filter.push(false);
    console.log(filter[3]);
  }

  return filter;
}

function createPassword(filter, len)
{
  var final = [];
  var pass = "";

    if(filter[0] === true)
    {
      var sc = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~", '"', "'"];
      final = final.concat(sc);
    }

    if(filter[1] === true)
    {
      var nc = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      final = final.concat(nc);
    }

    if(filter[2] === true)
    {
      var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      final = final.concat(lc);
    }

    if(filter[3] === true)
    {
      var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var uc = lc.map(lc => lc.toUpperCase());
      final = final.concat(uc);
    }

    for (var i = 0; i < len; i++)
    {
      pass += final[Math.floor(Math.random()*final.length)]
    }

    return pass
}

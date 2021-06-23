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
  if(isNaN(len) === true)
  {
    return false;
  }
  else
  {
    true;
  }
}

// Checks the length and make sures it is right size
function checkLength(len)
{
  if(len < 9 || len > 128)
  {return false;}

  else
  {return true;}
}

//Determines what filter the password will be using
function filterPassword()
{
  var filter = [];
  console.log (filter[1]);
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

// Creates the password and sends it to be
function createPassword(filter, len)
{
  var final = [];
  var pass = "";
  var count = 0;

    if(filter[0] === true)
    {
      var sc = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~", '"', "'"];
      final = final.concat(sc);
    }

    else
    {
      count++;
    }

    if(filter[1] === true)
    {
      var nc = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      final = final.concat(nc);
    }

    else
    {
      count++;
    }

    var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if(filter[2] === true)
    {
      final = final.concat(lc);
    }

    else
    {
      count++;
    }

    if(filter[3] === true)
    {
      
      var uc = lc.map(lc => lc.toUpperCase());
      final = final.concat(uc);
    }

    else
    {
      count++;
    }

    if (count = 4)
    {
      var nc = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      final = final.concat(nc);
    }

    for (var i = 0; i < len; i++)
    {
      pass += final[Math.floor(Math.random()*final.length)]
    }

    return pass
}
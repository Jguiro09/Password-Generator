# Password Generator


## Table of Content

* [Deployed Website](#Deployed-Website)  
* [Primary Goal](#Primary-Goal)  
* [Psuedocoding](#Psuedocoding)  
* [Functions](#Functions)  
* [Gif of Website](#Gif-of-Website)  
* [Conclusion](#Conclusion)  
* [License](#License)  

## Deployed Website
[**Click here for Password Generator**](https://jguiro09.github.io/Password-Generator/)

## Primary Goal
The goal of this project was to make a password generator that will allow you to filter out characters,letters, or digits by using the prompt(), confirm() other javascript methods.

## Psuedocoding

psuedocoding helped immensly in making these codes. By asking questions and attempting to map out what you will be using, coding becomes a much smoother process with less stopping and thinking and more actually doing.

    User is asked how many characters would you like your password to contain (must be more than 9 and less than 128)
    QUESTIONS TO ASK:
        1. What if they type out "nine" or use a number? Will your code be able to tell?
            a. You could use an if(typeof) method to see if its a number, if it is not a number you can ask for numbers only.
            b. You could incorporate both strings and numbers, but for strings you would need to figure out how to read every number.
        2. How can we confirm the number of characters is greater than 9 and less than 128?
            a. A simple if statement for if its greater or less than 9 or 128.
        3. How will this be asked?
            a. You can use a prompt to ask this questions
            b. Is there a way to limit to only numbers? (RESEARCH)
        4. Where will you store the answer?
            a. we can store it inside a variable that will be called later in a for loop to create the password.

    User is asked if they would like each characters
        Questions to ask:
            1. How will you ask the User
                a. Confirm()
            2. Where will you store the variable
                a. Put inside of a boolean true or false statement that will connect to an if statement
            2. If no, how will you keep it out of the result
                a. Have an if statement that connects to a charset, if it comes false we skip the charset
            3. If yes, how will you include it in the result
                a. Have an if statement that connects to a charset, if it comes false we add the charset to an ending array (Concat()?)

    How is the password generated?
        1. What methods would you use?
            a. For loop of array?
        2. How would you implement the characters being used?
            a. Concat?
        

## Functions

### generatePassword
    Where a majority of my functions originate from. When the button is pressed on the website, the first 
    prompt(line 19) runs asking for a number. This is when the function "check" is used.

![generatePassword function](https://raw.githubusercontent.com/Jguiro09/Password-Generator/main/assets/README/generatePassword.png)
### check(len)
    Once the user provides an input, the check function incorporates the input into a while loop. This 
    checks for both the type and the length of the input and if it is approved it is sent back.

![checkFunction](https://raw.githubusercontent.com/Jguiro09/Password-Generator/main/assets/README/check.png)
### checkLength(len)
    This function uses an "if" statement to see if the input is less than 9 or greater than 128. If the 
    input is less than 9 or greater than 128 then the input is sent back to be changed because it does 
    not fit the parameters.

![checkLength](https://raw.githubusercontent.com/Jguiro09/Password-Generator/main/assets/README/checkLength.png)
### checkType(len)
    This function checks to make sure only a digit was given to the program. This is done by using the 
    ".isNaN()" method. This will check if the input is not a number and if it returns true then the input 
    is sent back to be changed because it does not fit the parameter.

![checkType](https://raw.githubusercontent.com/Jguiro09/Password-Generator/main/assets/README/checkType.png)
### filterPassword()
    This function creates a filter for our "createPassword" function to use. It uses  confirm() to ask the 
    user if they would like characters, letters, or digits. If the user says yes, the program pushes "true" 
    into an array slot that is designated for them. If the user says no, the program pushes "false" into an 
    array slot that is designated for them.  

![filterPassword](https://raw.githubusercontent.com/Jguiro09/Password-Generator/main/assets/README/filterPassword.png)
### createPassword(filter, len)
    This funcion is where the actual password is made. Using the filter provided, the function will go through
    a series of if statements detecting if the specific filter will be used. If true, it will be used. If false,
    it will not be used.

    NOTE: If each if statement returns false, count will = 4 and auto assign numbers to the password

    After the array has been filtered, a for loop will run which utilizes Math.floor() and Math.random() to 
    choose a random element from the array. This will go as long as the users inital number provided. After the 
    foor loop is done the password is passed back to the "generatePassword" method and from there it is sent to 
    be seen by the user.

![createPassword](https://raw.githubusercontent.com/Jguiro09/Password-Generator/main/assets/README/createPassword.png)

## Gif of Website

![Gif of Website](https://media4.giphy.com/media/mIjlcvJrHC0sPuf2if/giphy.gif?cid=790b761190d99485950535f86c1604c412d70719fc89b75b&rid=giphy.gif&ct=g)

## Conclusion

This generator is a very good starting project for javascript. It makes you obtain a good understanding of arrays and understand the methods that javascript can provide. With some patience and lots of bug testing, you can create your very own password generator!

## License
Copyright (c) 2013 Mark Otto.

Copyright (c) 2017 Andrew Fong.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

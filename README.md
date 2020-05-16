# [Password Generator](https://katgrace0808.github.io/Password-Generator/)

Password Generator is an application that creates a randomized password 
based on user input.  

## Description

Upon entering the application site, the end user will see a form with a red button 
that must be clicked to generate the password.  The box in the center is the location
where the application will print the password after all of the user input is received.

After clicking the Generate Password button, the user is asked a series of input questions.  Here are the questions followed by how the user would respond:

1. Enter number of characters for your password.
    User inputs a number.
2. Do you want numeric characters?
    User selects OK for yes, Cancel for no.
3. Do you want lowercase letters?
    User selects OK for yes, Cancel for no.
4. Do you want uppercase letters?
    User selects OK for yes, Cancel for no.
5. Do you want special characters?
    User selects OK for yes, Cancel for no.

For the first input prompt, in order to move on to the first question, the user must
enter a number that is at least eight and at most 128.  If the user selecs any number outside of that range, they will be alerted why and they must begin again.  

For the four questions, a user must select at least one of the choices.  If Cancel is selected for all four questions, the user receives an alert and they must begin again.

Once the user inputs an accepted number and selects the desired characters, the application will randomize a password based on the selections.  The password will display on the screen in the center box.

## Development of the application

This is my first application created, which is part of the coding bootcamp course.  It was a challenging application to create as we were just learning JavaScript that week for the first time.  Developing the prompt and alerts was the simpler part of the development, and it was easier to troubleshoot issues.  I completed that setup within a few hours.

The development of creating the actual randomized password was very difficult, and I was presented with many challenges along the way. I chose to create arrays of characters for each category instead of using Unicode.  I watched a developer on YouTube create arrays using Unicode, and while it was interesting, I found it simpler to use arrays that listed each available character and see the list.

The other main difficulty I experienced was creating the for loop that randomized the password.  I worked with a study group of fellow students as well as a tutor to understand their relation to the arrays, and was ultimately able to get a randomized password to be created.

![Screenshot of deployed site](https://github.com/katgrace0808/Password-Generator/blob/master/Assets/Screenshot.PNG)

# password-gen:
Learning to build a password generator from start to finish. Was able to deploy and recieve a password.  

#Psuedocode:
USER clicks button to generate password
prompt pops up:
 “welcome to password generator wizard! you will be selecting length and at least 1 character type, ready to begin? yes / no 
USER selects yes and new prompt appears:
“please enter the length of characters you would like for your password, it must be more than 8 and less than 128
clicks submit button on prompt
if accepted, new prompt and store info
else: error validation message if: not number / less than 8 / more than 128 and request to submit again
prompt for lowercase boolean yes or no button to click
prompt for uppercase boolean yes or no button to click
prompt for numeric boolean yes or no button to click
prompt for special characters boolean yes or no button to click to check validation answer for each choice should be validated (set to true or false) and at least 1 char type should be selected:
if yes/true to at least one, function to generate random password with yes criteria:
password is generated that matches the selected criteria
when password is generated display in alert or on webpage in html
if no/false to all, validation message “I’m sorry, you must choose at least one character type, would you like to run the password generator wizard again?”
yes (reset to welcome screen) button to click
no (hide prompt and reset to main) button to click
timeout function if wizard is incomplete that asks if they need more time
yes? reset timeout function
no? reset password generator
# Finished:

https://user-images.githubusercontent.com/83473550/123282746-66540300-d4d0-11eb-86ac-c8990f07f26a.png




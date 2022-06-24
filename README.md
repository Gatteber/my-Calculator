# my-Calculator
A Calculator created using Vanilla JS.

### APPROACHING THE PROJECT ###
Needs 4 functions (add, subtract, multiply, divide)
Needs an operate() function
Needs some keys


[  DISPLAY          ]    
/-------------------\
| x^2   /   *    C  |
|                   |
|  7    8     9 <-  |
|                   |
|  4    5     6  +  |
|                   |
|  1    2     3  -  | 
|  0    .    =   =  |
\-------------------/

To-do after finishing Javascript: 

HTML: 
Add H1 w/ information?
Add Github link?

CSS:
button click feedback


errors to watch for
Maximum digits = 20 [x]
over 20 digits = format to fit display
make sure operator doesn't try without numbers and operator.
only one decimal point.
dont let user divide by zero [x]
evaluate each set separately [x]
round long answers


Approaching the problem:
add console.log for click and keydown.
make the functions separately, but call them when the key is pressed.

update inner html when button is clicked

store each
0.123456789012345678


10 + 10 - 5
[10, ]
-> under operator if(a,b) => evaluate otherwise do nothing
[10, 10]
-> equals => operate 
[20]
-> under operator if (a,b) => evaluate otherwise do nothing


we have 10 in innerHTML
press +
=> check if [a, b] in array
!= push to the array, store operation (how???)
== operate
set innerHTML to empty
[10, b] (+)
wait for b input
=

let operation = null;

operate(a, b) {
    if (!operation) {
        break
    } else operation(array[0], array[1]);
}



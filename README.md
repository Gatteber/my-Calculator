# my-Calculator
A Calculator created using Vanilla JS.

### APPROACHING THE PROJECT ###
Needs 4 functions (add, subtract, multiply, divide)
Needs an operate() function
Needs some keys


### Reflection ###
Well, somehow I finished it. To be honest, I'm now starting to see where some of my ineffecient code is. I'm starting to wonder if I shouldn't have tried to make some sort of universal selectors for the various buttons, as it could have shrank down my code a lot. I was very, very worried when I was putting the finishing touches on, and I think I could have figured out a different way to execute it, but at the point I was at I was committed. I think trying to add all the extra credit in from the beginning made my code kind of janky, but I'm really proud I was able to solve everything!! The only thing I didn't implement (without googling a bit and some experimentation) was the sleep function, because I just assumed js had it and when it didn't, I didn't want to look too deeply into fixing it.

What to do better:
Think more carefully! Better planning could have made a much more simply code. It's entirely possible this code could have been half as long.

What I did well:
It looks nice. Even if it's janky under the hood, the actual calculator seems to work nicely. I'm proud of myself for completing ALL of TOP's extra credit assignments.

I WILL KEEP DOING MY BEST!!


Below are all the notes I used for myself for the project, read at your own risk.

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
|-------------------|


JS TO-DO: 
fix display for exponential notation                   [X]
fix NaN problems if user tries to enter something      [X]
add decimal point functionality                        [X]
add exponential functionality                          [X]
add backspace functionality                            [X]
Divide by zero kinda works but needs fixing            [X]
final keyboard functionality                           [X]
bugtesting                                             [X]

To-do after finishing Javascript: 

HTML: 
Add H1 w/ information?  DONE
Add Github link? Decided not to.

CSS:
button click feedback  finished!
fix left/right padding for buttons Done!


errors to watch for
Maximum digits = 20 [x]
over 20 digits = format to fit display
make sure operator doesn't try without numbers and operator.
only one decimal point.
dont let user divide by zero [x]
evaluate each set separately [x]
round long answers [x]

***NOTES FOR NEXT TIME***:
push the update to the array right away???? This might fix the issue of NaN and allows exponential to be easier to fix too.

This likely means a string is being pushed to the array, you might be able to convert it to a number and remove the need to convert inside the operation. (but maybe not a good idea)
***NOTES FOR NEXT TIME***

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



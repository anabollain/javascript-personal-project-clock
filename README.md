# JS Clock

## Description

The aim of this project is to show the current time in both analogic and digital version.

The new Date() constructor is used to obtain the actual date, using different methods to get the hour, minutes and seconds.

It uses CSS transitions to obtain a more realistic behavior of the clock handles.

The logic is based on rotating the handles according to the current time, taking into account that 12h/60min/60s equals to 360deg, with an initial value of 90deg from the CSS styling. 

The main function is executed each 1s using setInterval().

## Javascript Used

* querySelector()
* querySelectorAll()
* new Date()
* getHours(), getMinutes(), getSeconds()
* innerHTML
* setAttribute()
* setInterval
* CSS transitions
* forEach()
* Conditional operator

## Solving the 'glitch'

When the hand arrives to 12am, there is a little 'glitch'. This happens because the hand goes from 450 degrees (60s) to 90degrees (0s), causing it to go backwards and making it visible due to the CSS transition `transition: all 0.05s`.

A possible solution would be to make an if/else statement, so when the degrees equal to 90, the transition is removed using `element.style.transition = 'none'`. The else statement is used to reset the inline style so that the element can revert back to the stylesheet with `element.style.transition = ''`. 

The same glitch happens with all three hands (hours, minutes and seconds), so the statement is applied to all three elements selecting them and using a forEach() method.  

`const hands = document.querySelectorAll('.hand')`

I have used a conditional operator instead of the if/else statement to simplify the syntax :

`hands.forEach(hand => secondDegrees === 90? hand.style.transition = 'none' : hand.style.transition = '')`

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)


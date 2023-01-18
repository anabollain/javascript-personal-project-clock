# JS Clock

## Description

The aim of this project is to show the current time in both analogic and digital version.

The new Date() constructor is used to obtain the actual date, using different methods to get the hour, minutes and seconds.

It uses CSS transitions to obtain a more realistic behavior of the clock handles.

The logic is based on rotating the handles according to the current time, taking into account that 12h/60min/60s equals to 360deg, with an initial value of 90deg from the CSS styling. 

The main function is executed each 1s using setInterval().

## Javascript Used

* querySelector()
* new Date()
* getHours(), getMinutes(), getSeconds()
* innerHTML
* setAttribute()
* setInterval
* CSS transitions

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)


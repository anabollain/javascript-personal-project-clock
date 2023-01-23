'use strict';

//Clock
const hands = document.querySelectorAll('.hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
//Digital
const hourDig = document.querySelector('.hour-dig');
const minDig = document.querySelector('.min-dig');
const secondDig = document.querySelector('.second-dig');

function setDate(){
    const today = new Date();
    //Hour
    const hour = today.getHours();
    const hourDegrees = ((hour/12)*360) + 90;
    hourHand.setAttribute('style', `transform: rotate(${hourDegrees}deg)`);
    if(hour < 10){
        hourDig.innerHTML = '0' + hour + ':';
    }else{
        hourDig.innerHTML = hour +':';
    }
    //Minutes
    const min = today.getMinutes();
    const minDegrees = ((min/60) * 360) + 90;
    minHand.setAttribute('style', `transform: rotate(${minDegrees}deg)`);
    if(min < 10){
        minDig.innerHTML = '0' + min + ':';
    }else{
        minDig.innerHTML = min +':';
    }
    //Seconds
    const second = today.getSeconds();
    const secondDegrees = ((second/60) * 360) + 90;
    secondHand.setAttribute('style', `transform: rotate(${secondDegrees}deg)`);  
    if(second < 10){
        secondDig.innerHTML = '0' + second;
    }else{
        secondDig.innerHTML = second;
    }
    //Remove transition if degrees equal 90
    hands.forEach(hand => secondDegrees === 90? hand.style.transition = 'none' : hand.style.transition = '');
    //else statement resets the inline style by removing it so the element can revert back to the stylesheet
}

//Run function every second
setInterval(setDate, 1000);


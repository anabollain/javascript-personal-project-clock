'use strict';

//Clock
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
//Digital
const hourDig = document.querySelector('.hour-dig');
const minDig = document.querySelector('.min-dig');
const secondDig = document.querySelector('.second-dig');

function removeTransition(ev){
    console.log(ev)
    console.log('transicion')
    if(ev.propertyName === 'transform') {
        return console.log('ya')
    }
}

function setDate(){
    const today = new Date();
    //Hour
    const hour = today.getHours();
    const hourDegrees = ((hour/12)*360) + 90;
    hourHand.setAttribute('style', `transform: rotate(${hourDegrees}deg)`);
    hourDig.innerHTML = hour +':';
    //Minutes
    const min = today.getMinutes();
    const minDegrees = ((min/60) * 360) + 90;
    minHand.setAttribute('style', `transform: rotate(${minDegrees}deg)`);
    minDig.innerHTML = min +':';
    //Seconds
    const second = today.getSeconds();
    const secondDegrees = ((second/60) * 360) + 90;
    secondHand.setAttribute('style', `transform: rotate(${secondDegrees}deg)`);
    secondDig.innerHTML = second;
}

//Run function every second
setInterval(setDate, 1000);


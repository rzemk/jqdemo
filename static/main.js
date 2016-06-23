/* eslint-disable no-undef */
$(document).ready(initialize);

function initialize() {
  $('#btn1').click(doStuff);
  $('#btn2').click(timer);
  $('#btn2').click(function(){$('#numbers').empty();});
  $('#btn3').click(clear);
  $('#btn4').click(numbers);
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
}

function numbers() {
  $('#numbers').empty();
  let nums = []
  for(let i = 0; i < 20; i++){
    let r = Math.random();
    $('#numbers').append(`<li>${r}</li>`);
  }
}

function doStuff() {
  $('h1').css('color', 'red');
  $('h2').css('background-color', 'blue');
  $('h3').text('new text');
  $('h3').toggleClass('awesome');
  $('#alpha').toggleClass('cool');
  const txt = $('#txt1').val();
  $('h1').css('background-color', txt);
}

let id;

function fuckYeahBackground() {
  $('#numbers').css('background-color', randomColor());
  return null;
}

function timer() {
  id = setInterval(function(){
    fuckYeahBackground();
  }, 50);
}

function clear() {
  clearInterval(id);
}

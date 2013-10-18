'use strict';
var concert = {};

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#createSeats').click(clickCreateSeats);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickCreateSeats(){
  var seatNum = getValue('#seatNum',parseInt);
  var section = $('#section').val();
  putSeats(section, seatNum);
}

function putSeats(section, seatNum){
  if(section=='vip'){
    //vip
    concert.vipCost = getValue('#seatNum',parseFloat);
    htmlAddSeats('#vip');

  }else{
    //ga
    concert.gaCost = getValue('#seatNum',parseFloat);
    htmlAddSeats('#ga');
  }

}

function htmlAddSeats(selector){
  for(var i = 0; i<seatNum; i++){
      $seat = $('<div>');
      $seat.text('Seat # ' + (i+1));
      $(selector).append($seat);
    }
}





function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}
'use strict';
var concert = {};

$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)){return;}
  $(document).foundation();
  $('#createSeats').click(clickCreateSeats);
  $('#vip').on('dblclick','div', dblclickReserve);
  $('#general').on('dblclick','div', dblclickReserve);


}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
function dblclickReserve(){
  var name = $('#name').val();
  console.log($(this));
  $(this).addClass('reserved');
  $(this).text(name);

}

function clickCreateSeats(){
  var seatNum = getValue('#seatNum',parseInt);
  var section = $('#section').val();
  putSeats(section, seatNum);
}

function putSeats(section, seatNum){
  if(section==='vip'){
    //vip
    concert.vipCost = getValue('#seatCost',parseFloat);
    htmlAddSeats('#vip',seatNum);

  }else{
    //ga
    concert.gaCost = getValue('#seatCost',parseFloat);
    htmlAddSeats('#general',seatNum);
  }

}

function htmlAddSeats(selector,seatNum){
  for(var i = 0; i<seatNum; i++){
    var $seat = $('<div>');
    $seat.text(i+1);
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


function canRun(flag){
  var isQunit = $('#qunit').length > 0;
  var isFlag = flag !== undefined;
  var value = isQunit && isFlag || !isQunit;
  return value;
}
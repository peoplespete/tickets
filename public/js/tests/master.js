'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){  //code to run before test
  initialize(null,true);
}

function teardownTest(){ //code to run after test

}

test('Sections Building', function(){
  expect(2);

  $('#section').val('vip');
  $('#seatNum').val('45');
  $('#seatCost').val('20');
  $('#createSeats').trigger('click');

  deepEqual($('#vip div').length,45,"checking that 45 divs were put inside vip section");

  $('#section').val('ga');
  $('#seatNum').val('80');
  $('#seatCost').val('10');
  $('#createSeats').trigger('click');

  deepEqual($('#general div').length,80,"checking that 80 divs were put inside general admission section");

});

test('Reserving Seats with DblClick', function(){
  expect(4);

  $('#section').val('vip');
  $('#seatNum').val('45');
  $('#seatCost').val('20');
  $('#createSeats').trigger('click');

  $('#section').val('ga');
  $('#seatNum').val('80');
  $('#seatCost').val('10');
  $('#createSeats').trigger('click');

  $('#name').val('pete');
  $('#vip div:nth-child(5)').trigger('dblclick');

  ok($('#vip div:nth-child(5)').hasClass('reserved'),"making sure when a vip seat is dblclicked it becomes reserved");
  deepEqual($('#vip div:nth-child(5)').text(),'pete', "making sure that the name pete is in the reserved div");

  $('#name').val('drew');
  $('#general div:nth-child(10)').trigger('dblclick');

  ok($('#general div:nth-child(10)').hasClass('reserved'),"making sure when a ga seat is dblclicked it becomes reserved");
  deepEqual($('#general div:nth-child(10)').text(),'drew', "making sure that the name drew is in the reserved div");


});


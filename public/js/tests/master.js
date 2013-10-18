'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){  //code to run before test
  initialize(null,true);
}

function teardownTest(){ //code to run after test

}

test('Sections Building', function(){
  expect(2);

  $('#section option[value="vip"]').trigger('click');
  $('#seatNum').val(45);
  $('#seatCost').val(20);
  $('#createSeats').trigger('click');

  deepEqual($('#vip div').length,45,"checking that 45 divs were put inside vip section");

  $('#section option[value="ga"]').trigger('click');
  $('#seatNum').val(80);
  $('#seatCost').val(10);
  $('#createSeats').trigger('click');

  deepEqual($('#general div').length,45,"checking that 80 divs were put inside general admission section");

});

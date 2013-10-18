'use strict';
//module('name-of-section-for-grouping', {setup: setupTest, teardown: teardownTest});
module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){  //code to run before test
  initialize(null,true);
}

function teardownTest(){ //code to run after test

}

// test('Remove Item', function(){
//   expect(2);


//   $('#op2').val('2');
//   $('#operator').val('-');
//   $('#calculate').trigger('click');

//   $('#history > li:nth-child(3) > .remove').trigger('click');

//   deepEqual($('#history li').length,3, 'check if there are correct number after delete occurs');
//   ok($('#history > li:nth-child(3) > .operator').text()!=='/', 'checks that deleted one is gone');
// });

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


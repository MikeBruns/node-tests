const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

//add done parameter and done(); after assertion  mocha knows it's an async test
it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done();
  });
});

it('should verify first and last names are set', () => {
  let user = {
    location: 'Cleveland',
    age: '24'
  };
  utils.setName(user, 'Michael Bruns');
  expect(user).toInclude({firstName: 'Michael', lastName: 'Bruns'});
});

it('should expect some values', () => {
  expect(12).toBe(12);
  expect(12).toNotBe(11);

  expect({name: 'Michael'}).toEqual({name: 'Michael'});
  expect({name: 'michael'}).toNotEqual({name: 'Michael'});

  expect([2,3,4]).toInclude(2);
  expect([2,3,4]).toExclude(5);

  expect({
    name: 'Michael',
    age: 24,
    location: 'Cleveland'
  }).toInclude({age: 24});
  expect({
    name: 'Michael',
    age: 24,
    location: 'Cleveland'
  }).toExclude({age: 606});

});

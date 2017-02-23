const {generator} = require('./exo.js');

describe('Test exercise for classes', function () {

  let instanceToTest;

  beforeEach(() => {
    instanceToTest = generator();
  });

  it('Fibonacci rocks', () => {
    expect(instanceToTest.next()).toBe(1);
    expect(instanceToTest.next()).toBe(2);
    expect(instanceToTest.next()).toBe(3);
    expect(instanceToTest.next()).toBe(5);
    expect(instanceToTest.next()).toBe(8);
    expect(instanceToTest.next()).toBe(13);
  });

});

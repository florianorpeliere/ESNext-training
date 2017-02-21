const Dog = require('./exo.js');

describe('Test exercice for classes', function () {

  let instanceToTest;

  beforeEach(() => {
    instanceToTest = new Dog('tobi');
  });

  it('Is create correctly', () => expect(instanceToTest).toBeDefined());

});

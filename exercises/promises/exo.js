function exercise1Fn () {
  let exercise1 = new Promise((resolve, rejection) => {
    setTimeout(() => resolve('I love promise'), 500);
  });

  return exercise1.then(value => console.log(value));
}

function exercise2Fn () {
  let exercise2 = new Promise((resolve, rejection) => {
    setTimeout(() => rejection('I hate rejection'), 500);
  });

  return exercise2.catch(value => console.log(value));
}

function exercise3Fn () {
  let exercise3 = Promise.resolve(1);

  function plusFive(value) {
    return value + 5;
  }

  function multiplyByTwo(value) {
    return value * 2;
  }

  function minusFour(value) {
    return value - 4;
  }

  return exercise3.then(plusFive).then(multiplyByTwo).then(minusFour);
}

module.exports = {exercise1Fn, exercise2Fn, exercise3Fn};

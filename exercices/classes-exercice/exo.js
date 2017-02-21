class Cat {
  constructor (name) {
    this.name = name;
  }

  meow () {
    console.log('meow');
  }

  play () {
    console.log('Oh a ball of wool !');
  }
}

class MainCoon extends Cat {
  constructor (name, color) {
    super(name);
    this.color = color;
  }

  play () {
    super.play();
    console.log('But i am so fat ...');
  }

  sleep () {
    console.log('I sleep');
  }
}

module.exports = {Cat, MainCoon};

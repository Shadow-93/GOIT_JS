class Car {
  static getSpecs({
    maxSpeed = 0,
    speed = 0,
    isOn = false,
    distance = 0,
    price = 0,
  }) {
    console.log({ maxSpeed, speed, isOn, distance, price });
  }

  constructor({
    maxSpeed = 0,
    speed = 0,
    isOn = false,
    distance = 0,
    price = 0,
  }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price; // eslint-disable-line
  }

  get price() {
    return this._price; // eslint-disable-line
  }

  set price(newPrice) {
    this._price = newPrice; // eslint-disable-line
    return newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    if (this.isOn === true) {
      this.isOn = false;
      this.speed = 0;
    }
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
      return;
    }
    this.speed = this.maxSpeed;
  }

  decelerate(value) {
    if (this.speed - value <= 0) {
      this.speed -= value;
    }
    this.speed = 0;
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = hours * this.speed;
      return this.distance;
    }
    this.distance = 0;
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

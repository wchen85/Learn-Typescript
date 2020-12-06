class Vehicle {

  constructor(public color:string) {
  }

  protected honk(): void {
    console.log('beep')
  }
 }

const vehicle  = new Vehicle('orange');
console.log(vehicle.color)
/*
This won't work because protect method is only allow to use in it's own and it's sub classes
Error mgs:
Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses

vehicle.honk()
*/
class Car extends Vehicle {
  constructor(public wheels: number, color:string) {
    super(color);
  }
  private drive(): void{
    console.log('vroom vroom')
  }

  startDrivingProcess(): void {
    this.drive(); 
    this.honk();
  }
}


const car = new Car(4, 'red');
car.startDrivingProcess();
console.log(car.wheels)
console.log(car.color)

interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  // We can use any type inside interface definition we want
  year: Date;
  broken: boolean;
  // We can express a function in interface as well
  summary(): string;
}

const oldCivc = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printVehicle = (vehicle: Vehicle) : void => {
console.log(vehicle.summary())
}

printVehicle(oldCivc);


const drink2 = {
  color : 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivc);
printSummary(drink2);
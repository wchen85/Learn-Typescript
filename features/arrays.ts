const carMakers: string[] = ['ford', 'toyota', 'tesla'];
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [];

// Help with inference when extracting values 
const car0 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('Subaru');

// Help with map function 
carMakers.map((car: string) : string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date |String)[] = [new Date()];
importantDates.push('2030-10-20');
importantDates.push(new Date());

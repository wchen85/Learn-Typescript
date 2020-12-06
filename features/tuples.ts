const drink = {
  color: 'brown',
  // 碳酸
  carbonated: true,
  suger: 40
}


type Drink = [string, boolean, number];
// Very consistence order of tuples (array looking thing)
const pepsi:Drink = ['brown', true, 40];
const sprit:Drink = ['clear', true, 100];
const tea:Drink = ['brown', false, 0];
// pepsi[0] = 40 will give Type 'number' is not assignable to type 'string'


const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
}
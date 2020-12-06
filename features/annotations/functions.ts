const add = (a:number, b:number): number => {
  return a + b;
}

const subtract = (a:number, b:number):number => {
  return a - b;
}

function divide(a:number, b:number) : number {
  return a / b;
}

function multiply(a:number, b:number) : number {
  return a * b;
}

// Use void to say there's no return value, can return null or undefined 
const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): void => {
  if(!message){
    throw new Error(message);
  }
}


const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (todaysWeather:{date: Date, weather: string}) : void => {
console.log(todaysWeather.date);
console.log(todaysWeather.weather)
}

/* Output:
  2020-11-25T05:49:01.377Z
  sunny
*/ 
logWeather(todaysWeather);

const destructureLog = ({date, weather}: {date: Date, weather: string}) : void => {
  console.log(date)
  console.log(weather)
}

destructureLog(todaysWeather);



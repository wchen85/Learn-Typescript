import { User } from './User'
import { Company } from './Company'

// const user = new User();

// console.log(user)
// const company = new Company();
// console.log(company)


import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user)
customMap.addMarker(company)

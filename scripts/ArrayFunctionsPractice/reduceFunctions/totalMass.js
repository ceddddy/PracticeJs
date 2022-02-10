
const characters = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  eye_color: 'blue',
  gender: 'male',
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  eye_color: 'yellow',
  gender: 'male',
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  eye_color: 'brown',
  gender: 'female',
},
{
  name: 'Anakin Skywalker',
  height: '188',
  mass: '84',
  eye_color: 'blue',
  gender: 'male',
},
];

// get total mass of all characters

// const totalMass = (preVal, currVal) => {
//   return preVal + +currVal.mass;
// }

// console.log(characters.reduce(totalMass, 0));

const totalMass = characters.reduce((preVal, currVal) => {
  return preVal + +currVal.mass;
}, 0);

console.log(totalMass);




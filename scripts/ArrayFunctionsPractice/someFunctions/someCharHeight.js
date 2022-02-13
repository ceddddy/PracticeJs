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

// Is there at least one character taller than 200

const someCharHeight = characters.some((currVal) => {
  return currVal.height > 200;
});

console.log(someCharHeight);
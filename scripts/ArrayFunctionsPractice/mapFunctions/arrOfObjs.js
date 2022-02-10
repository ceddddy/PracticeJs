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

//get or return an arr of objects with name and height properties

const getNameAndHeight = characters.map((value, indx, orgArr) => {
  const obj = {
    name: value.name,
    height: +value.height
  }
  return obj;
});
console.log(getNameAndHeight);

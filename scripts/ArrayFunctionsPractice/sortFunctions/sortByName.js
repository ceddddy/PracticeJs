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

//sort by name

const sortByName = characters.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(sortByName);
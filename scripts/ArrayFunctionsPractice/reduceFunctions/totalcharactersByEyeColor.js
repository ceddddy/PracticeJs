const characters = [{

    name: 'Luke Skywalker', //13
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader', //10
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa', //10
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker', //15
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

//get total number of characters by eye color



const totalChars = characters.reduce((preVal, currVal) => {
 
  return preVal + currVal.name.replace(/\s+/g, '').length;
 
}, 0);
console.log(totalChars);





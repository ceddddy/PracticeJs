const movie = {
  title: "suits",
  duration: 50.00,
  Stars:[
    "Mike",
    "Harvey",
    "Rachel"
  ]
}

const printOut = () => {
  console.log(`${movie.title} lasts for ${movie.duration} minutes.It stars ${movie.Stars.join(" , ")}`);
}

printOut();


/*const printout = () => {
  let myStars = '';
  movie.Stars.forEach(star, i) => {
    myStars = myStars + ', ' + value;;
  }
}

console.log(myStars);


printout()*/
const books = [{
    title: "The obstacle is the way",
    Author: "Ryan Holiday",
    Alreadyread: "true"
  },
  {
    title: "Deep Work",
    Author: "Carl Newport",
    Alreadyread: "false"
  },
  {
    title: "Eloquent Javascript",
    Author: "Marijin Haverbeke",
    Alreadyread: "false"
  }
]

for (i = 0; i < books.length; i++) {
  console.log(`${books[i].title} by ${books[i].Author}`);
}

//console.log(`'${books.title} by ${books.Author}'.`);
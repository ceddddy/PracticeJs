function pluralize (noun, num) {
  const forbiddenWords = [
    'sheep',
    'geese'
  ];

  if (num > 1 && !forbiddenWords.includes(noun)) {
    return `${num} ${noun}s `;
  }
  
    return noun;
}

console.log(pluralize("bird", 3));
console.log(pluralize("sheep", 5));
console.log(pluralize("geese", 7));
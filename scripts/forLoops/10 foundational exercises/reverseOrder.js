
function reversedArr(orgArr) {
  let revArr = [];
  for (let i = orgArr.length-1; i >= 0; i--) {
    revArr.push(orgArr[i]);
  }
  return revArr.join(' ');
}

console.log(reversedArr(['you', 'are', 'how']));
function mixup(str1,str2) {
  return str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2);
}

console.log(mixup("hi", "there"));

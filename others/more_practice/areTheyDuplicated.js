function counterObj(array) {
  const newObj = {};
  for (const item in array) {
    newObj[array[item]] = (newObj[array[item]] || 0) + 1;
  }
  return newObj;
}

function areThereDuplicates() {
  const countArguments = counterObj(arguments);
  for (const key in countArguments) {
    if (countArguments[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'c'));
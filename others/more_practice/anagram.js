// O(n) anagram solution
function anagram(s) {
  if (s.length % 2 != 0) return -1;
  const spplitArray = split_in_half(s);
  const string1 = spplitArray[0];
  const string2 = spplitArray[1];
  const obj2 = counter(string2);
  let sum = 0;
  for (const letter of string1) {
    if (letter in obj2) {
      obj2[letter] -= 1;
    }
  }
  for (const key in obj2) {
    if (obj2[key] > 0) {
      sum += obj2[key];
    }
  }
  return sum;
}

function split_in_half(s) {
  const middle = Math.ceil(s.length / 2);
  return [s.slice(0, middle), s.slice(middle)];
}

function counter(string) {
  const frequencyCounter1 = {};
  for (const letter of string) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  return frequencyCounter1;
}

console.log(anagram('fdhlvosfpafhalll'));
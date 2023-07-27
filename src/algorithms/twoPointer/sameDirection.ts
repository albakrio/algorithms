function isAlphaNumeric(c: string) {
  return /^[a-zA-Z0-9]*$/.test(c);
}
const isPalindrome = (sentence: string) => {
  const lettersWithSymbols = sentence.split("");
  const lettersWithoutSymbols = lettersWithSymbols.filter((l) =>
    isAlphaNumeric(l)
  );

  let left = 0;

  for (let right = lettersWithoutSymbols.length - 1; right >= left; right--) {
    if (
      lettersWithoutSymbols[right].toLocaleLowerCase() ===
      lettersWithoutSymbols[left].toLocaleLowerCase()
    ) {
      left++;
    } else {
      return false;
    }
    return true;
  }
};

console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("omar"));
console.log(isPalindrome("Do geese see God?"));

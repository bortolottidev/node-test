export default function add(a, b) {
  if (isNaN(a)) {
    throw new Error("a is not a number");
  }
  if (isNaN(b)) {
    throw new Error("b is not a number");
  }
  /* node:coverage disable */
  if (false) {
    console.log('hey im a useless block that should be ignored by coverage');
    console.log('hey im useless too!');
  }
  /* node:coverage enable */
  return a + b;
}

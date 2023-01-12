export default function Exercises() {
  //   function findMax(a, b) {
  //     return Math.max(a, b);
  //   }
  //   console.log(findMax(4, 5));
  function findNumberFromArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        return i;
      }
    }
    return -1;
  }

  const a = [1, 2, 4, 5];
  const b = ["a", "b", "c", "d"];

  console.log(findNumberFromArray(a, 6));
  console.log(findNumberFromArray(a, 4));
  console.log(findNumberFromArray(b, "a"));
  console.log(findNumberFromArray(b, "e"));

  function randomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    const c = Math.floor(Math.random() * (max - min + 1) + min);
    return c;
  }
  console.log(randomNumber(2, 5));
  function findAverage(arr) {
    let sum = 0;
    arr.map((a) => {
      sum += a;
    });
    return sum / arr.length;
  }
  console.log(findAverage(a));
  function findSum(arr) {
    let sum = 0;
    arr.map((a) => {
      sum += a;
    });
    return sum;
  }
  console.log(findSum(a));
  function strToLowerCase(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toUpperCase();
      console.log(arr[i].toUpperCase());
    }
    return arr;
    console.log(arr);
  }
  console.log(b);
  console.log(strToLowerCase(b));
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(5));
  console.log(isPrime(10));
  return (
    <div>
      <h1>Day-41-Exercises</h1>
    </div>
  );
}

// 1번 풀이
// function solution(numbers) {
//   const alphabet = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   let answer = numbers;

//   for (const [key, value] of Object.entries(alphabet)) {
//     if (answer.includes(key)) {
//       answer = answer.replaceAll(key, value);
//     }
//   }

//   return Number(answer);
// }

// 2번 풀이
function solution(numbers) {
  const alphabet = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let result = numbers;

  for (let i = 0; i < alphabet.length; i++) {
    const name = alphabet[i];

    if (result.includes(name)) {
      result = result.replaceAll(name, i);
    }
  }

  return Number(result);
}

console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));

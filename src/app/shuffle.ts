export function shuffle<T>(arr: T[]) {
  const max = arr.length;
  const min = 0;
  const randomNumber = Math.random() * (max - min) + min;
  const shuffledArr = arr
    .slice(randomNumber)
    .concat(arr.slice(0, randomNumber));
  return shuffledArr;
}

function shuffle(arr) {
  if (arr.length <= 1) return arr;
  const newArr = new Set();

  for (let i = 0; i < arr.length; i++) {
    let randomIdx;

    do {
      randomIdx = Math.floor(Math.random() * arr.length);
    } while (randomIdx === i || newArr.has(arr[randomIdx]));

    newArr.add(arr[randomIdx]);
  }

  return Array.from(newArr);
}

module.exports = {
  shuffle,
};

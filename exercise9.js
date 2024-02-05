function eliminationGame(arr, elimNum) {
  if (elimNum === undefined || elimNum < 2) {
    return arr;
  }

  let elimIdx = elimNum - 1;

  while (arr.length > 1) {
    arr.splice(elimIdx, 1);
    elimIdx = (elimIdx + elimNum - 1) % arr.length;
  }

  return arr[0];
}

eliminationGame(
  ["anna", "boris", "chris", "diego", "eddie", "filipe", "greg"],
  3
);

module.exports = { eliminationGame };

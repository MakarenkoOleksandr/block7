function familyAffairs(perfectFamily, otherFamilies) {
  let newFamily = null;
  let age = -1;

  for (let family of otherFamilies) {
    for (let key in family) {
      if (!family[key].mother) return `Yay! Jenny moved to ${key}`;
    }
  }

  for (let family of otherFamilies) {
    for (let key in family) {
      if (!family[key].son && !family[key].daughter)
        return `Yay! Jenny moved to ${key}`;
    }
  }

  for (let family of otherFamilies) {
    for (let key in family) {
      let oldestKid = 0;

      for (let member in family[key]) {
        oldestKid += family[key][member].age;

        if (oldestKid > age) {
          age = oldestKid;
          newFamily = key;
        }
      }
    }
  }

  return `Yay! Jenny moved to ${newFamily}`;
}

module.exports = {
  familyAffairs,
};

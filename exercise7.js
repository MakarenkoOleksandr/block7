let planet = ["Earth", "Moon", "Z666", "SuperNova13", "Otatop"];

let humans = [
  { unit: "karateMasters", qty: 300, strength: 5, rateOfFire: 20, stamina: 10 },
  { unit: "teslaTanks", qty: 50, strength: 100, rateOfFire: 5, stamina: 100 },
  {
    unit: "bostonDynamicsSpot",
    qty: 200,
    strength: 50,
    rateOfFire: 15,
    stamina: 60,
  },
];
let aliens = [
  { unit: "motherLord", qty: 1, strength: 500, rateOfFire: 50, stamina: 300 },
  {
    unit: "yellowCreature",
    qty: 250,
    strength: 200,
    rateOfFire: 6,
    stamina: 90,
  },
  { unit: "slimyThing", qty: 2500000, strength: 3, rateOfFire: 30, stamina: 7 },
];

function battle(humans, aliens, location) {
  let locationIdx = location.length - 1;

  while (locationIdx >= 0) {
    let curPlanet = location[locationIdx];
    console.log(`Fight at: ${curPlanet}`);

    if (aliens.length === 0) {
      console.log(`GRATZ! All alien troops defeated. You won at ${curPlanet}`);
      break;
    }

    if (humans.length === 0) {
      console.log(
        `GAME OVER! All humans troops defeated. You loose at ${curPlanet}`
      );
      break;
    }

    let winner = simulateBattle(humans, aliens);

    if (winner.humanLos <= 0 && winner.alienLos <= 0) {
      console.log(
        `Both sides lost at ${curPlanet}. Moving to the previous planet.`
      );
      locationIdx--;
    } else if (winner.humanLos > 0) {
      locationIdx++;
      console.log(`Humans won at ${curPlanet}. Moving to the next planet.`);
      if (locationIdx > location.length - 1) {
        console.log(`Gratz! You won the GaMe!`);
        break;
      }
    } else {
      locationIdx--;
      console.log(`Aliens won at ${curPlanet}. Moving to previous planet.`);
    }
  }
}

function simulateBattle(humans, aliens) {
  const rdmHumanIdx = Math.floor(Math.random() * humans.length);
  const rdmHAlliensIdx = Math.floor(Math.random() * aliens.length);
  const human = humans[rdmHumanIdx];
  const alien = aliens[rdmHAlliensIdx];

  const humanUnitDmg = human.qty * human.strength * human.rateOfFire;
  const alienUnitDmg = alien.qty * alien.strength * alien.rateOfFire;

  const humanLos = Math.floor((human.qty -= alienUnitDmg / human.stamina));
  const alienLos = Math.floor((alien.qty -= humanUnitDmg / alien.stamina));

  if (alien.qty < 0) {
    removeUnit(aliens, rdmHAlliensIdx);
  }

  if (human.qty < 0) {
    removeUnit(humans, rdmHumanIdx);
  }

  return { humanLos, alienLos };
}

function removeUnit(arr, unitIdx) {
  arr.splice(unitIdx, 1);
  return arr;
}

battle(humans, aliens, planet);

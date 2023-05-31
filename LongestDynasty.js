var dynastyReign = [
  { name: "San Dynasty", reign: "MXLI" },
  { name: "Viloria Dynasty", reign: "MCCCIII" },
  { name: "Tan Dynasty", reign: "MCCCXCVIII" },
  { name: "Bon Dynasty", reign: "MCDXLV" },
  { name: "Maiko Dynasty", reign: "MDCLXIV" },
  { name: "Paul Dynasty", reign: "MCMXLIX" },
  { name: "Andre Dynasty", reign: "MMMXICX" },
];

function convertYear(romanNumeral) {
  const romanNumerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    let currentNumeral = romanNumeral[i];
    let nextNumeral = romanNumeral[i + 1];

    if (!romanNumerals.hasOwnProperty(currentNumeral)) {
      return "Invalid";
    }

    let currentValue = romanNumerals[currentNumeral];
    let nextValue = romanNumerals[nextNumeral];

    if (nextValue && nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
}

function isValidRomanNumeral(romanNumeral) {
  const invalidRegex =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return invalidRegex.test(romanNumeral);
}

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestReign = 0;
  let longestDynasty = "";
  let invalidDynasty = "";

  let startOfReign = 1000;

  for (let i = 0; i < dynastyReign.length; i++) {
    let dynasty = dynastyReign[i];
    let endOfReign = convertYear(dynasty.reign);

    if (!isValidRomanNumeral(dynasty.reign)) {
      if (dynasty.reign.length > invalidDynasty.length) {
        invalidDynasty = dynasty.name;
      }
      continue;
    }

    let reignLength = endOfReign - startOfReign;

    if (reignLength > longestReign) {
      longestReign = reignLength;
      longestDynasty = dynasty.name;
    }

    startOfReign = endOfReign;
  }

  if (invalidDynasty) {
    console.log(`${invalidDynasty} has invalid year!`);
  }

  return longestDynasty;
}

console.log(
  `${longestDynasty(dynastyReign)} has the longest reigning dynasty!`
);

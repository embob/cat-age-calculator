const fs = require("fs");
const reverseCatAgeCalculator = require("./reverseCatAgeCalculator");

const humanToCatMap = {};
const humanToCatMapFormatted = {};

for (let i = 1; i < 120; i++) {
  humanToCatMap[i] = reverseCatAgeCalculator(i);
  humanToCatMapFormatted[i] = reverseCatAgeCalculator(i, true);
}

const code = `const humanToCatData = ${JSON.stringify(humanToCatMap)};

const humanToCatDataFormatted = ${JSON.stringify(humanToCatMapFormatted)};

module.exports = humanToCatData, humanToCatDataFormatted;
`;

fs.writeFileSync("./humanToCatData.js", code);

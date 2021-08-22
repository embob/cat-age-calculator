const fs = require("fs");
const catAgeCalculator = require("./catAgeCalculator");

const humanToCatMap = {};
const humanToCatMapFormatted = {};

for (let i = 1; i < 117; i++) {
  humanToCatMap[i] = catAgeCalculator(i);
  humanToCatMapFormatted[i] = catAgeCalculator(i, true);
}

const code = `const humanToCatData = ${JSON.stringify(humanToCatMap)};
const humanToCatDataFormatted = ${JSON.stringify(humanToCatMapFormatted)};


module.exports = { humanToCatData, humanToCatDataFormatted };
`;

fs.writeFileSync("./src/humanToCatData.js", code);


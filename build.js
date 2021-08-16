const fs = require("fs");
const reverseCatAgeCalculator = require("./reverseCatAgeCalculator");

const humanToCatMap = {};

for (let i = 1; i < 120; i++) {
  humanToCatMap[i] = reverseCatAgeCalculator(i);
}

const code = `const humanToCatData = ${JSON.stringify(humanToCatMap)}

module.exports = humanToCatData;
`;

fs.writeFileSync("./humanToCatData.js", code);

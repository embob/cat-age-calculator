const fs = require("fs");
const reverseCatAgeCalculator = require("./reverseCatAgeCalculator");

const humanToCatMap = {};
const humanToCatMapFormatted = {};

for (let i = 1; i < 117; i++) {
  humanToCatMap[i] = reverseCatAgeCalculator({ humanAge: i });
  humanToCatMapFormatted[i] = reverseCatAgeCalculator({ humanAge: i, formatted: true });
}

const code = `const humanToCatData = ${JSON.stringify(humanToCatMap)};

const humanToCatDataFormatted = ${JSON.stringify(humanToCatMapFormatted)};

module.exports = { humanToCatData, humanToCatDataFormatted };
`;

fs.writeFileSync("./humanToCatData.js", code);

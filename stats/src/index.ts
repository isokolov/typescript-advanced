import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const readCSV = new MatchReader('football.csv');
readCSV.read();

console.log(readCSV.data);
let manUnitedWins = 0;

for (let match of readCSV.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

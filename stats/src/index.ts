import { CsvFileReader } from './CsvFileReader';

const readCSV = new CsvFileReader('football.csv');
readCSV.read();

console.log(readCSV.data);

var Word = require('./Word.js');
var inquirer = require('inquirer');

var wordArray = [
    "ron weasley",
    "harry potter",
    "hermione granger",
    "lord voldermort",
    "professor severus snape",
    "professor albus dumbledor",
    "draco malfoy",
    "new scamander",
    "tina goldstein",
    "queenie goldstein",
    "jacob kowalski",
    "credence barebone",
    "gnarlak",
    "nicolas flamel",
    "professor minerva mcgonogall",
    "professor gilderoy lockhart"
];

// select a random word from word bank
var pickedWord = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
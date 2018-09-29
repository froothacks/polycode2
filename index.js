#!/usr/bin/env node
const program = require('commander');
const translator = require('./translate.js')
const dictionary = require('./dictionary.js')
    
program
    .command('define <word> <translation>')
    .description('Defines a custom translation. Input <word> in the original language.')
    .option('-l, --language <language>', 'Specify a the language the word is being translated to. Default is user language.')
    .action(function (word, translation, options) {
        dictionary.define(word, translation, options)
    })

program
    .command('definition <word>')
    .description('Translate a word from the original language to the user language.')
    .option('-r, --reverse', 'Gives you the word in the original language from the user language.')
    .action(function (word, options) {
        dictionary.definition(word, options)
    })

program.parse(process.argv)

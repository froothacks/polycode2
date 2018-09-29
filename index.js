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


program.parse(process.argv)

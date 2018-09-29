#!/usr/bin/env node
const program = require('commander');
const translator = require('./translate.js')
const dictionary = require('./dictionary.js')

program
	.arguments('command')
	// .option('-b, --banana <banana>', 'A banana') would be accessed by program.banana
	.action(command => {
		console.log(`Hi <3 ! The command was ${command}`);
		translator.test(); 
	})
	.parse(process.argv);
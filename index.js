#!/usr/bin/env node
const program = require('commander');

const translator = require('./translate.js')

program
	.arguments('command')
	// .option('-b, --banana <banana>', 'A banana') would be accessed by program.banana
	.action(command => {
		console.log(`Hi <3 ! The command was ${command}`);
		translator.test();
        translator.translateText('apple', 'en', 'fr')
            .then(function(value) {
                console.log(value);
            });
	})
	.parse(process.argv);

#!/usr/bin/env node
const program = require('commander');

program
  .arguments('command')
  // .option('-b, --banana <banana>', 'A banana') would be accessed by program.banana
  .action(command => {
    console.log(`Hi <3 ! The command was ${command}`);
  })
  .parse(process.argv);

function fake_backend(payload) {
	
}

function translate_file(config, target_file, SOURCE_LANG, DEST_LANG) {

}

function translate_all(config, DEST_LANG, additional_ignores=[]) {

}

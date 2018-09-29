#!/usr/bin/env node
const program = require('commander');


program
  .arguments('command')
  // .option('-b, --banana <banana>', 'A banana') would be accessed by program.banana
  .action(command => {
    console.log(`Hi <3 ! The command was ${command}`);
  })
  .parse(process.argv);
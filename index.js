#!/usr/bin/env node
const program = require('commander');

program
  .arguments('test')
  .option('-b, --banana <banana>', 'A banana')
  .action(function(test) {
    console.log('Hi! Your banana is %s test thing: %s',
        program.banana, test);
  })
  .parse(process.argv);
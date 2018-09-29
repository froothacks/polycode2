#!/usr/bin/env node
const program = require('commander');

const TRANSLATE_CONFIG_FILENAME = '.polycode'
const TRANSLATE_IGNORE_FILENAME = '.polycodeignore'
const TRANSLATE_TEMP_FILENAME = '.polycodetmp'
const TRANSLATE_PERSONAL_CONFIG_FILEPATH = '~/.polycode'

const TRANSLATED_FILES_PATH_TEMPLATE = 'repo-{}/'
const TRANSLATE_DICT_FILES_PATH = '.polycodedata/'

program
  .arguments('test')
  .option('-b, --banana <banana>', 'A banana')
  .action(function(test) {
    console.log('Hi! Your banana is %s test thing: %s',
        program.banana, test);
  })
  .parse(process.argv);

function fake_backend(payload) {
	
}

function translate_file(config, target_file, SOURCE_LANG, DEST_LANG) {

}

function translate_all(config, DEST_LANG, additional_ignores=[]) {

}

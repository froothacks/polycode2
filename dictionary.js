const fs = require('fs');
const chalk = require('chalk');
const log = console.log;

const userConfig = JSON.parse(fs.readFileSync(`${require('os').homedir()}/.polycode`));

const projectConfig = JSON.parse(fs.readFileSync(`.polycode`));

const translateDict = JSON.parse(fs.readFileSync(`.polycodedata`));

const LANGUAGE_CODES = JSON.parse(fs.readFileSync(`language_codes.json`)); 
const PROJECT_LANG_CODE = projectConfig.primaryLang; 
const PROJECT_LANG = LANGUAGE_CODES[PROJECT_LANG_CODE.toLowerCase()].nativeName; 
const USER_LANG_CODE = userConfig.userLang; 
const USER_LANG = LANGUAGE_CODES[USER_LANG_CODE.toLowerCase()].nativeName; 

function define(word, translation, options) {
	console.log(translateDict)
    console.log(word, translation)
}

function definition(word, options) {
	const knownWords = Object.keys(translateDict); 
	const capitalizedWord = word.charAt(0).toUpperCase() + word.substr(1);

	if (!options.reverse) { // Translating from project language to user language
		const wordTranslations = translateDict[word]; 
		// Catch nonexistant words
		if (knownWords.indexOf(word) === -1){
			log(chalk.yellow(`"${capitalizedWord}" does not exist in your dictionary.`)); 
			return false; 
		}

		// Catch existing word but nonexistant translation
		if (Object.keys(wordTranslations).indexOf(USER_LANG_CODE) === -1){
			log(chalk.yellow(`"${capitalizedWord}" does not yet have a translation in ${USER_LANG}.`)); 
			log(`Translate a file with this word or use 'define ${word} {translation}' to define it.`); 
			return false; 
		}

		log(chalk.green((`${capitalizedWord} is ${chalk.bold(wordTranslations[USER_LANG_CODE])} in ${USER_LANG}`))); 
		return true; 
	} else { // Translating from user language to project language
		let found = false; 
		knownWords.forEach(knownWord => {
			if (translateDict[knownWord][USER_LANG_CODE] === word){ 
				log(chalk.green(`${capitalizedWord} is ${chalk.bold(knownWord)} in ${USER_LANG}`)); 
				found = true; 
				return; 
			}
		}); 
		if (!found) {
			log(chalk.yellow(`"${capitalizedWord}" does not exist in your ${USER_LANG} dictionary.`)); 
		}
	}
}

module.exports = {
    define,
    definition
}
var request = require('request');
var fs = require('fs');
var path = require('path'); 

function translateText(sourceText, sourceLang, targetLang) {
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    return new Promise(function(resolve, reject) {
        request(url, function (error, response, body) {
            resolve(JSON.parse(body)[0][0][0]);
            // TODO: Error handling
        });
    });
}

function translate_file(config, target_file, SOURCE_LANG, DEST_LANG) {
	// Load file from disk
	let source = "";
	fs.readFile(target_file, function(err, data) {
		source = data;
	});

	let map_file_path = TRANSLATE_DICT_FILES_PATH + `${target_file}.map`;
	let map = {};

	fs.stat(map_file_path, function(err, stat) {
		if(err == null) {
			fs.readFile(map_file_path, function(err, data) {
				map = JSON.parse(data);
			});
		}
	});

	let fextension = path.extname(target_file);

	payload = {'doc': source, 'from': SOURCE_LANG,
		        'to': DEST_LANG, 'map': JSON.stringify(map), 'ext':fextension}

	//TODO: Make some sort of request to the translation server
	// Assume translated is the translated text and translation_map
	// is the map for the translation
	let translated;
	let translation_map;

	// Translations overwrite the translated file
	translated_file_path = target_file
	translation_map_path = map_file_path

	// TODO: Create translation map folder if it does not exist
	fs.writeFile(translation_file_path, translated);
	fs.writeFile(translation_map_path, translation_map);

}

function translate_all(config, DEST_LANG, additional_ignores=[]) {

}

module.exports = {
   test() {console.log("this is the test function for you david")}, translateText
}

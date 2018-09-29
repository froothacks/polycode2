var request = require('request');
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

module.exports = {
   test() {console.log("this is the test function for you david")}, translateText
}
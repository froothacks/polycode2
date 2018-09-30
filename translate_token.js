const Case = require('case');
const request = require('request');

module.exports = (token, index, sourceLang, targetLang) => {
    if (token.value.length === 1) {
        token.translated = token.value;
        return {"index": index, "token": token};
    }

    var text = token.value;
    if (!token.isComment) {
        text = Case.lower(text);
    }
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(text);
    return new Promise(function(resolve, reject) {
        request(url, function (error, response, body) {
            if (error) {
                reject(error);
                // TODO: Proper error handling
            }
            translated = JSON.parse(body)[0][0][0];
            if (!token.isComment) {
                translated = Case[Case.of(token.value)](translated).split(" ").join("_");
            }
            token.translated = translated;

            resolve({"index": index, "token": token});
        });
    });
}
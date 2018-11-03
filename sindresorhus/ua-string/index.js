const got = require('got');
const uaString = require('ua-string');
const HTMLParser = require('fast-html-parser');

(async () => {
    try {
        got('https://developers.whatismybrowser.com/useragents/parse/?analyse-my-user-agent=yes', {
            headers: {
                'user-agent': uaString
            }
        })
        .then((res) =>
            HTMLParser.parse(res.body).querySelector('.useragent')
        )
        .then((result) =>
            console.log(result.childNodes[0].rawText)
        );
    } catch (error) {
        console.log(error.response.body);
    }
})();
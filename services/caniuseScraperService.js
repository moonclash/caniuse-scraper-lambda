const axios = require('axios');
const cheerio = require('cheerio');

class CanIUseScraper {

    static async getSupportTableForFeature(featureName) {
        let pageHTML;
        try {
            pageHTML = await axios.get(`https://caniuse.com/${featureName}`);
        }
        catch (e) {
            return {};
        }
        const $ = cheerio.load(pageHTML.data);
        const supportObject = {};
        const supportListRows = $('.support-list');
        supportListRows.each((_, supportRow) => {
            const supportInfo = [];
            const browserHeading = $(supportRow).find('.browser-heading');
            const browserName = browserHeading.text();
            supportObject[browserName] = null;
            const supportList = $(supportRow).find('ol').children();
            supportList.each((_, listElement) => {
                supportInfo.push($(listElement).text());
            });
            supportObject[browserName] = supportInfo;
        });
        return supportObject;
    }
}

module.exports = CanIUseScraper;

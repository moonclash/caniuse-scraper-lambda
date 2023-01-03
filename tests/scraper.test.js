const CanIUseScraper = require('../services/caniuseScraperService');

describe('Scraper tests', () => {
  
    test('successfully fetches feature support', async () => {
    const data = await CanIUseScraper.getSupportTableForFeature('es6');
    expect(data).toHaveProperty('Chrome');
  });

  test('returns empty object when feature not found', async () => {
    const data = await CanIUseScraper.getSupportTableForFeature('dinosaurs');
    expect(data).toEqual({});
  });
});
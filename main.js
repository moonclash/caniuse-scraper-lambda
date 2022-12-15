const serverless = require('serverless-http');
const express = require('express');
const CanIUseScraper = require('./services/caniuseScraperService');

const app = express();
const port = process.env.PORT || 8000;

app.get('/', async (req, res) => {
    res.json({'hello': 'world'});
});

app.get('/:feature', async (req, res) => {
    const feature = req.params.feature;
    const result = await CanIUseScraper.getSupportTableForFeature(feature);
    res.json(result);
});

module.exports = app;
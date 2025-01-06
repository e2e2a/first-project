const axios = require('axios');
const handleScrape = require('../controllers/scrape')
module.exports = function (app) {
    app.get('/scrape', (req, res) => {
        res.render('products/index')
    });


    app.post('/scrape', handleScrape.index)
};

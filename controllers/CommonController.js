
var fs = require('fs');

module.exports = {

    getCities: (_req, res) => {
        var cities;
        fs.readFile('./data/cities.json', 'utf8', function (err, data) {
            if (err) return res.status(500).json({
                status: false,
                error: err,
            });
            cities = JSON.parse(data);
            return res.status(200).json(cities);
        });
    },

    getPaymentOptions: (_req, res) => {
        fs.readFile('./data/paymentOptions.json', 'utf8', function (err, data) {
            if (err) return res.status(500).json({
                status: false,
                error: err,
            });
            return res.status(200).json(JSON.parse(data));
        });
    },
};
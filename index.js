const
    ipToInt = require('ip-to-int'),
    _random = require('lodash.random'),
    _sample = require('lodash.sample')
    _filter = require('lodash.filter');

let countries = {}

function ipFromPlace(place) {
    return Promise.resolve(
        ipToInt(_random(place.ip_from, place.ip_to))
            .toIP()
    );
}

function get(countryCode, predicate) {
    return getPlace(countryCode, predicate)
        .then(ipFromPlace);
}

function getPlace(countryCode, predicate) {
    if (!countries[countryCode])
        countries[countryCode] = require(`./data/${countryCode}.js`).data;

    let blocks = countries[countryCode];

    if (typeof predicate === 'function')
        blocks = _filter(blocks, predicate);

    return Promise.resolve(_sample(blocks));
}

module.exports = {
    get,
    getPlace
}
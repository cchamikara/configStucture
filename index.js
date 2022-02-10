const nconf = require('nconf');
const dotenv = require('dotenv');
const yaml = require('js-yaml');

const format = {
    parse: yaml.load,
    stringify: yaml.dump,
};

dotenv.config();
const nconfProvider = new nconf.Provider();

const environment = process.env.ENVIRONMENT;
const country = process.env.COUNTRY;
const brand = process.env.BRAND;

nconfProvider.env('__');


nconfProvider.file('brand-country-env', {
    file: `${__dirname}/config/${brand}/${country}/${environment}.yml`,
    format,
});

nconfProvider.file('brand-country-default', {
    file: `${__dirname}/config/${brand}/${country}/default.yml`,
    format,
});

nconfProvider.file('brand-env', {
    file: `${__dirname}/config/${brand}/${environment}.yml`,
    format,
});

nconfProvider.file('brand-env-default', {
    file: `${__dirname}/config/${brand}/default.yml`,
    format,
});

nconfProvider.file('default', {
    file: `${__dirname}/config/default.yml`,
    format,
});

const config = nconfProvider.get();

console.log('store:', config.STORE_CODE);
console.log('MAGENTO_BACKEND_URL:', config.MAGENTO_BACKEND_URL);
console.log('NZ_ONLY_FLAG', config.NZ_ONLY_FLAG);
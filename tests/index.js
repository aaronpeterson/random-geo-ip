const randomGeoIp = require('../index')

randomGeoIp.get('CA').then(ip => {
    console.log('A random IP in Canada might be:', ip);
})

randomGeoIp.getPlace('US', place => place.region_name == 'California').then(place => {
    console.log(`A random place in California might be:`, place);
})
# Generate Random IP

Generate a random ip address within a country using an optional predicate to further filter by city_name or region_name

```
yarn add random-geo-ip
```

### By Country Code

Country code is required.  See ./data for currently available codes.  I made them
quickly.

```javascript
const randomGeoIp = require('random-geo-ip')

randomGeoIp.get('US').then(ip => {
    console.log(`A random ip in the US would be ${ip}!`)
})
```

### Optional Predicate

```javascript
const randomGeoIp = require('random-geo-ip')

randomGeoIp.get('US', place => place.region_name == 'California').then(ip => {
    console.log(`A random ip in California, US might be ${ip}!`)
})
```
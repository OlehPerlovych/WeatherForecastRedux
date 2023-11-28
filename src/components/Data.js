export class Data {
        constructor(resObj) {
                this.temperature = resObj.main.temp || '';
                    this.city = resObj.name || '';
                    this.country = resObj.sys.country || '';
                    this.pressure = resObj.main.pressure || '';
                    this.sunset = resObj.sys.sunset || '';
                    this.message = 'Enter city name';
        }
}


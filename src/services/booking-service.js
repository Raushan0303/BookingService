const {BookingRepository} = require('../Repository/index');

const axios = require('axios');
const {FLIGHT_SERVICE_PATH} = require('../config/serverconfig')
const {ServiceError} = require('../utils/errors')


class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try {
            const flightId = data.flightId;
            const getFlighRequestUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const flight = await axios.get(getFlighRequestUrl);
            console.log(flight.data);
            return flight.data;
        } catch (error) {
            throw new ServiceError();
        }
    }
}

module.exports = BookingService;
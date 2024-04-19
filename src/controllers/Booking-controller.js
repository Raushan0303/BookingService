const BookingService = require('../services/Booking-service');
const {StatusCodes} = require('http-status-codes')


const { createChannel, publishMessage } = require('../utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('../config/serverconfig');

const bookingService = new BookingService();

class BookingController {

    constructor() {
    }

    async sendMessageToQueue(req, res){
        const channel = await createChannel();
        const payload = {
            data:{
                subject : 'this is notification from queue',
                content: 'some queue will subscribe this',
                recepientEmail: 'raushan23dbg@gmail.com ',
                notification : '2024-03-23 11:12:57'
            },
            service: 'CREATE_TICKET'
        };
        publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(payload));
        return res.status(200).json({
            message: 'Succesfully published the event'
        });
    }

    async create (req, res) {
        try {
            const response = await bookingService.createBooking(req.body);
            console.log("FROM BOOKING CONTROLLER", response);
            return res.status(StatusCodes.OK).json({
                message: 'Successfully completed booking',
                success: true,
                err: {},
                data: response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message: error.message,
                success: false,
                err: error.explanation,
                data: {}
            });
        }
    }
}

module.exports = BookingController
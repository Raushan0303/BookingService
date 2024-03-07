const express = require('express');

const router = express.Router();

const BookingController = require('../../controllers/Booking-controller');


router.post('/bookings', BookingController.create);

module.exports = router;
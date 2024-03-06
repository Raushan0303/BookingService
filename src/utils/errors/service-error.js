
const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(message,
        explanation,
        statusCode= StatusCodes.INTERNAL_SERVER_ERROR){
            super();
            this.name = "Service error";
            this.message = message;
            this.explanation=explanation;
            this.StatusCode = statusCode;
    }

}

module.exports = ServiceError;
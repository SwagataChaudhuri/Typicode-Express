class Error{
    constructor(status,message, timestamp){
        this.status = status
        this.message = message;
        this.timestamp = timestamp
    }
}
module.exports = Error;
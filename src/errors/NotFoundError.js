class NotFoundError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.name = 'NotFoundError';
    }
  }
  
  module.exports = NotFoundError;
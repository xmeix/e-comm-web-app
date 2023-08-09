class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = this.constructor.name; // Set the error name to the class name
    this.code = statusCode;
    this.status = "error"; // Set the error name to the class name
    this.message = message;
  }
}

export default CustomError;

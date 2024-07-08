class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    error = [],
    statck = ""
  ) {
    super(message);
    this.statck;
    this.data = null;
    this.message = message;
    this.errors = error;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

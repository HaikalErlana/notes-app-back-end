class ClientError extends Error {
  constructor(massage, statusCode = 400) {
    super(massage);
    this.name = 'ClientError';
    this.statusCode = statusCode;
  }
}

export default ClientError;
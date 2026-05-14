import ClientError from '../exceptions/client-error.js';

class NotFoundError extends ClientError {
  constructor(massage) {
    super(massage, 404);
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
import ClientError from '../exceptions/client-error.js';

class InvariantError extends ClientError {
  constructor(massage) {
    super(massage);
    this.name = 'InvariantError';
  }
}

export default InvariantError;
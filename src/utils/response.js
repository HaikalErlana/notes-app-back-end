const response = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    status: statusCode < 400 ? 'success' : 'failed',
    message: message, // PASTIKAN KEY INI NAMANYA 'message'
    data: data,
  });
};

export default response;
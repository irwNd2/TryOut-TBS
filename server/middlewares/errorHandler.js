const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = 'Internal Server Error';
  console.log(err);
  if (err.name === 'SequelizeValidationError') {
    status = 400;
    message = err.errors.map((e) => e.message);
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    status = 400;
    message = err.errors.map((e) => e.message);
  } else if (err.name === 'JsonWebTokenError' || err.name === 'invalid_token') {
    status = 401;
    message = 'Invalid token';
  } else if (err.name === 'bad_request') {
    status = 400;
    message = 'Complete all fields correctly';
  } else if (err.name === 'invalid_login') {
    status = 401;
    message = 'Invalid email or password';
  } else if (err.name === 'not_found') {
    status = 404;
    message = 'User not found';
  } else if (err.name === 'invalid_password') {
    status = 401;
    message = 'Invalid password';
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;

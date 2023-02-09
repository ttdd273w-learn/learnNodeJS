const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // this is the next middleware
      next(error);
    }
  };
};

module.exports = asyncWrapper;

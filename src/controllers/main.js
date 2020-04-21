exports.handleHomePage = (req, res, next) => {
  try {
    res.send("Hello from Express controllers.");
    // const error = new Error();
    // error.statusCode = 404;
    // error.message = "Issakrito Error";
    // throw error;
  } catch (err) {
    next(err);
  }
};

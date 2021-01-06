module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.send({ message: err.message });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.send({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.send({ message: err.message });
    }

    // default to 500 server error
    return res.send({ message: err.message });
}
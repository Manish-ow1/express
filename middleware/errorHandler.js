const notFoundHandler =(req, res, next) => {
    let error = new Error(
        `${req.method} method is not set for route ${req.url}`,
    );
    error.status = 404;
    next(error);
}


const errorHandler = (err, req, res, next) => {
    let statusCode = err.status || 500;
    let message = err.message || "Internal Server Error!";
    res.status(statusCode).send({ error: message });
};

export {errorHandler, notFoundHandler};

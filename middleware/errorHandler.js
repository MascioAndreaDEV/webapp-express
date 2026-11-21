

function errorsHandler( err, req, res, next) {
    res.status(500);
    res.json({
        error: error.message,
    })
}

export default errorsHandler
function notFound(req, res, next) {
    res.status(400);
    res.json({
        error: 'not found',
        message: 'the page does not exist, check the URL'
    })
}

export default notFound 
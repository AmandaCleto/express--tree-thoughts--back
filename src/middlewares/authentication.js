function authMiddleware(req, res, next) {
    return next();
}

module.exports = {
    authMiddleware
};
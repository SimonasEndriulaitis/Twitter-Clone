const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing.'});
    }

    try {
        const decoded = jwt.verify(token, 'Hello123');
        req.userId = decoded.userId;
        next();
    } catch (errpr) {
        res.status(401).json({ message: 'Invalid token.'});
    }
};
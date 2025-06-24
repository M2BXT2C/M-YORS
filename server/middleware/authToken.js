const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "Please login.",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err || !decoded) {
                console.log("JWT verification error:", err);
                return res.status(403).json({
                    message: "Invalid or expired token.",
                    error: true,
                    success: false
                });
            }

            req.userId = decoded._id;
            next();
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Server Error",
            error: true,
            success: false
        });
    }
}

module.exports = authToken;

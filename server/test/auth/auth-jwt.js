const jwt = require("jsonwebtoken");
const { User } = require("../models");
const secret = process.env.SECRET;

module.exports = {
  sign: (user) => {
    const payload = {
      id: user.id,
      role: user.role,
    };

    return jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "1h",
      issuer: "kimkyoungyeon",
    });
  },
  verify: (token) => {
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret);
      return {
        ok: true,
        id: decoded.id,
        role: decoded.role,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  },
};

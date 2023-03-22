const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Хэрэглэгчийн token оруулах шаардлагатай.",
    });
  }
  try {
    const decoded = jwt.verify(token, "DontMessWithThis");
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Хэрэглэгчийн token буруу, эсвэл идэвхгүй байна.",
    });
  }
  return next();
};

module.exports = verifyToken;

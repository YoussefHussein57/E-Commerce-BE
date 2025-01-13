const secretKey =
  "e!Vvi,92s)s6yDs(w5oJm$QR]V+M?Y,^?9CU5~Mk*[_cY]s+9A/&pfuc?u@P[$P";
const jwt = require("jsonwebtoken");

exports.createAccessToken = (data) => {
  return (token = jwt.sign(data, secretKey, { expiresIn: "1h" }));
};

exports.authMW = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(401).send({ message: "Invalid token" });
    }
  } else {
    res.status(401).send({ message: "Access denied. No token provided." });
  }
  
};

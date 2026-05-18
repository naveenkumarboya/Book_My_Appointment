import jwt from 'jsonwebtoken'

const authAdmin = (req, res, next) => {
  try {
    const token = req.headers.atoken; // LOWERCASE in Node.js automatically

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        return res.status(401).json({ success: false, message: "Invalid token" });
      }
      next();
    });

  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Authorization error" });
  }
};

export default authAdmin;

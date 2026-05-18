import jwt from 'jsonwebtoken'

const authUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ success: false, message: 'Authorization error' })
    }

    const token = authHeader.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = decoded.id   //  attach userId to request
    next()

  } catch (error) {
    return res.json({ success: false, message: 'Authorization error' })
  }
}

export default authUser

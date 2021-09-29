const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, '79cb74d3-fd5f-4e0f-9d53-589b2be77a8a', async (error, decodedToken) => {
        if (error) {
          res.status(500).json({error:error.message})
        } else {
          next();
        }
      });
    } else {
      res.status(401).json({error:error.message})
    }
  };

  module.exports = authUser;
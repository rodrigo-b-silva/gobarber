import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token is required' });

  const [, token] = authHeader.split(' ');

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Token invalid' });

      req.userId = decoded.id;

      return next();
    });
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
  return false;
};

export const csp = function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' *; frame-ancestors 'self' *; frame-src 'self' *;"
  );
  next();
};

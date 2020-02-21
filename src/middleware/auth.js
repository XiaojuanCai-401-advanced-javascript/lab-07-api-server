function auth (req, res, next, authed = true){
  if (authed) {
    console.log('authorized user.');
    next();
  } else {
    throw new Error('unauthorized user');
  }
}


module.exports = auth;


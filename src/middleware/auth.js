function auth (authed = true){
  if (authed) {
    console.log('authorized user.');
    return function(req,res,next){
      next();
    }
  } else {
    throw new Error('unauthorized user');
  }
}

module.exports = auth;
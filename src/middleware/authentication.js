module.exports = (token) => (ctx, next) => {
  // Authentication handler
  if (token === 'token') {
    console.log('auth middleware started')
  }

  next()
}

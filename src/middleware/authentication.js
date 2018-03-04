module.exports = token => (ctx, next) => {
  if (token === 'token') {
    console.log('auth middleware started')
  }

  next()
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/boardGame/'
    : '/',
  css: {
    extract: false
  }
}

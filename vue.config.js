const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mywork/theVoice/' : '/',
  configureWebpack: {
    entry: './src/main.ts',
    externals: {
      jquery: 'jQuery',
    },
    resolve: {
      alias: {
        '@': join('src/'),
        '@css': join('src/assets/css'),
        '@img': join('src/assets/img'),
        '@src': join('src'),
        '@c': join('src/components'),
      },
    },
  },
}

function join(dir) {
  return path.join(__dirname, dir)
}

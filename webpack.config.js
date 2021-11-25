const path = require('path')

const type = process.env.NODE_BUILD_TYPE
const configMapBuildType = {
  "umd": {
    output: {
      clean: true,
      filename: 'index.js',
      path: path.resolve(__dirname, 'lib'),
      library: {
        name: "runAsyncTasksByOrder",
        type: 'umd',
      },
    }
  },
  "es": {
    mode: "development",
    output: {
      clean: true,
      filename: 'index.js',
      path: path.resolve(__dirname, 'es'),
      library: {
        type: 'module',
      },
      module: true,
    },
    experiments: {
      outputModule: true,
    },
  }
}[type]

module.exports = {
  mode: "production",
  entry: './src/index.js',
  ...configMapBuildType
}
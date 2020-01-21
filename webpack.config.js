const path = require('path');
const createAppPath = appName => path.resolve('src', 'front', 'js', 'apps', `${appName}.js`);

module.exports = (env = { mode: 'development' }) => {
  const config = {
    mode: env.mode,
    entry: {
      homePage: createAppPath('homePage')
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'static', 'js')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      enforceExtension: false,
      enforceModuleExtension: false,
      modules: [
        path.resolve(__dirname, 'front', 'js'),
        path.resolve(__dirname, 'node_modules')
      ]
    },
  };

  return config;
};

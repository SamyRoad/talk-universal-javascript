import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const port = 3001;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, '0.0.0.0', (err, _) => {
  if (err) {
    return console.log(err);
  }

  console.log(`'dev-server' listening at 0.0.0.0:${port}`);
});

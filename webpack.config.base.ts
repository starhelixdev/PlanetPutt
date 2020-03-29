import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: ["./index.tsx"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};

export function merge(envConfig: webpack.Configuration) {
  return {
    ...config,
    ...envConfig
  };
}

export default config;

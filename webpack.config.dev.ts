import { merge } from "./webpack.config.base";

export default merge({
  mode: "development",
  devServer: {
    hot: true,
    port: 9001
  }
});

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env) => {
    const isDev = env.mode === "development";
    const isProd = env.mode === "production";

    return {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src/index.jsx"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.[contenthash].js",
            clean: true,
            assetModuleFilename: "assets/[name][ext]",
        },
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash].css",
                chunkFilename: "css/[name].[contenthash].css",
            }),
        ],
        devtool: isDev ? "inline-source-map" : false,
        devServer: isDev
            ? {
                  port: env.port ?? 3000,
                  open: true,
                  historyApiFallback: true,
              }
            : undefined,
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "assets/images/[name][ext]",
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "assets/fonts/[name][ext]",
                    },
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
            ],
        },
    };
};

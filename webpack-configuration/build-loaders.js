const buildLoaders = () => {
  const scssLoader = {
    test: /^(?!.*\.module\.s[ac]ss$).*\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  const cssModuleLoader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            localIdentName: "[name]__[local]___[hash:base64:5]",
          },
        },
      },
    ],
  };

  return [scssLoader, cssModuleLoader];
};

module.exports = { buildLoaders };

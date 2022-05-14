const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@/component": "./src/component",
          "@/images": "./src/images",
        },
      },
    },
  ],
};

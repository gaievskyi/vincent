type Config = import("@babel/core").ConfigFunction

const config: Config = (api) => {
  api.cache.forever()
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET"],
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~": "./src",
          },
        },
      ],
    ],
  }
}

module.exports = config

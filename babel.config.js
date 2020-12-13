module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  "plugins": [
      [
          "module-resolver",
          {
              root: ["."],
              alias: {
                  "components": "./src/components",
                  "config": "./src/config",
                  "consts": "./src/consts",
                  "models": "./src/models",
                  "screens": "./src/screens",
                  "utils": "./src/utils",
                  "navigation": "./src/navigation",
                  "reducers": "./src/reducers",
                  "actions": "./src/actions",
              },
          },
      ],
  ],
  
};

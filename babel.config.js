module.exports = {
  presets: [ 'module:@react-native/babel-preset' ],
  plugins: [
    [ "module:react-native-dotenv", {
      envName: "env",
      moduleName: "@env",
      path: ".env"
    } ]
  ]
};

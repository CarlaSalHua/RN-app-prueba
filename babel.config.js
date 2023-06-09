/* eslint-disable prettier/prettier */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below
    [
      'module-resolver',
      {
        //root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'src': './src',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};

// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line prettier/prettier
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
// eslint-disable-next-line prettier/prettier
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;

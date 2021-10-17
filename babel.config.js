module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@features': './src/features',
          '@models': './src/models',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@themes': './src/themes',
          '@assets': './src/assets',
          '@store': './src/store',
          '@common': './src/common',
          '@services': './src/services',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};

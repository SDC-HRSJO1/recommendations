module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
};

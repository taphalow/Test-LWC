const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^lightning/button$': '/force-app/test/jest-mocks/lightning/button'
      },
    modulePathIgnorePatterns: ['/.localdevserver']
};

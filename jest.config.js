const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', __dirname],
	moduleNameMapper: {
		// Components
		'^Atoms(.*)$': '<rootDir>/src/components/atoms$1',
		'^Molecules(.*)$': '<rootDir>/src/components/molecules$1',
		'^Organisms(.*)$': '<rootDir>/src/components/organisms$1',
		'^Species(.*)$': '<rootDir>/src/components/species$1',
		'^Templates(.*)$': '<rootDir>/src/components/templates$1',
		// Other folders
		'^@types(.*)$': '<rootDir>/@types$1',
		'^config(.*)$': '<rootDir>/src/config$1',
		'^MockData(.*)$': '<rootDir>/src/mockData$1',
		'^pages(.*)$': '<rootDir>/src/pages$1',
		'^public(.*)$': '<rootDir>/public$1',
		'^utils(.*)$': '<rootDir>/src/utils$1',
	},
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
		'jest-watch-select-projects',
	],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);

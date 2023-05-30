/** @type { import('@storybook/react-webpack5').StorybookConfig } */
// import News from '../src/components/news.stories';
const config = {
  stories: [
    './introduction/**/*.stories.jsx',
    './components/**/*.stories.jsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;

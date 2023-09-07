import type { StorybookConfig } from '@storybook/nextjs';
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: [
    '../src/(stories|components)/**/*.mdx',
    '../src/(stories|components)/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
webpackFinal: async (config) => {
     const rules = config?.module?.rules as RuleSetRule[];
     const imageRule = rules.find(
       (rule) => rule?.test instanceof RegExp && rule.test.test('.svg'),
     );
     if (imageRule) {
       imageRule.exclude = /\.svg$/;
     }
     rules.push({
       test: /\.svg$/,
       use: ['@svgr/webpack'],
     });
     return config;
   },

};
export default config;

import { create } from '@storybook/theming/create';

const Logo = require('../public/images/logo.png');

export default create({
  base: 'light',
  // Typography
  fontBase: 'Pretendard',

  brandTitle: 'Classcope',
  brandUrl: 'https://www.classcope.co.kr',
  brandImage: Logo,
  brandTarget: '_self',

  //
  colorPrimary: '#8D70FF',
  colorSecondary: '#678afe',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#678afe',
  appBorderRadius: 4,

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#000000',
  barSelectedColor: '#678afe',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#678afe',
  inputTextColor: '#000000',
  inputBorderRadius: 2,
});

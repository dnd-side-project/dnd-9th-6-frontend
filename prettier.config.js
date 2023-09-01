module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  tailwindFunctions: ['clsx', 'cva'],
  plugins: [import('prettier-plugin-tailwindcss')],
};

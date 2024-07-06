/** @type {import('prettier').Config} */
const prettierConfig = {
  bracketSpacing: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default prettierConfig;

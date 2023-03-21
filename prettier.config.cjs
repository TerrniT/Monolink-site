/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
  jsxSingleQuote: true,
  bracketSpacing: true
};

module.exports = config;

/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  tabWidth: 2,
  printWidth: 100,
  arrowParens: "avoid",
  bracketSameLine: false,
};

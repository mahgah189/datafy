module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "indent": "off",
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
    {
      files: ["./index.js"],
      rules: {
        "max-len": ["off"],
        "camelcase": ["error", {allow: [
          "access_token",
          "refresh_token",
          "response_type",
          "client_id",
          "redirect_uri",
          "grant_type",
        ]}],
      },
    },
  ],
  globals: {},
};

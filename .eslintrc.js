module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 13,
  },
  "rules": {
      "no-console": 2,
      "linebreak-style": [
          "error",
          "unix"
      ],
      "camelcase": [
          "error",
          {
              "properties": "never",
              "ignoreDestructuring": true
          }
      ],
      "spaced-comment": [
          "warn",
          "always",
          {
              "exceptions": [
                  "-",
                  "*",
                  "~"
              ]
          }
      ],
      "no-multi-str": "off",
      "require-jsdoc": [
          "error",
          {
              "require": {
                  "FunctionDeclaration": true,
                  "MethodDefinition": true,
                  "ClassDeclaration": true,
                  "ArrowFunctionExpression": false,
                  "FunctionExpression": false
              }
          }
      ],
      "valid-jsdoc": [
          "error",
          {
              "requireReturn": false
          }
      ],
      "max-len": [
          "error",
          {
              "code": 128
          }
      ],
      "padded-blocks": [
          "error",
          "never"
      ],
      "brace-style": [
          "error",
          "1tbs",
          {
              "allowSingleLine": true
          }
      ],
      "block-spacing": [
          "error",
          "always"
      ],
      "arrow-parens": [
          "error",
          "always"
      ],
      "object-curly-spacing": [
          "error",
          "always"
      ],
      "space-infix-ops": [
          "error",
          {
              "int32Hint": false
          }
      ],
      "eqeqeq": [
          "error",
          "smart"
      ],
      "operator-linebreak": [
          "error",
          "after",
          {
              "overrides": {
                  "?": "before",
                  ":": "before"
              }
          }
      ],
      "space-before-function-paren": [
          "error",
          "never"
      ],
      "quote-props": [
          "warn",
          "as-needed"
      ],
      "object-curly-newline": [
          "error",
          {
              "multiline": true,
              "minProperties": 4
          }
      ],
      "semi": [
          "error",
          "always"
      ],
      "quotes": [
          "error",
          "single",
          {
              "avoidEscape": true
          }
      ],
      "array-bracket-newline": [
          "error",
          {
              "multiline": true,
              "minItems": 4
          }
      ]
  }
};

import withNuxt from "./.nuxt/eslint.config.mjs";
import stylistic from "@stylistic/eslint-plugin";



export default withNuxt()
  .append([
    // Stylistic Rules.
    stylistic.configs.customize({
      flat: true,
      arrowParens: true,
      indent: 2,
      quotes: "double",
      semi: true,
      quoteProps: "consistent-as-needed",
      braceStyle: "1tbs",
      blockSpacing: true,
      jsx: true,
    }),
    {
      rules: {
        "@stylistic/function-paren-newline": [
          "warn", {
            minItems: 3,
          },
        ],
        "@stylistic/operator-linebreak": [
          "warn", "before",
        ],
        "@stylistic/multiline-ternary": [
          "warn", "always-multiline",
        ],
        "@stylistic/array-bracket-spacing": [
          "warn", "always",
        ],
        "@stylistic/jsx-one-expression-per-line": "off",
        "@stylistic/keyword-spacing": [
          "error", {
            overrides: {
              catch: {
                after: false,
              },
              for: {
                after: false,
              },
              if: {
                after: false,
              },
              while: {
                after: false,
              },
            },
          },
        ],
        "@stylistic/key-spacing": [
          "warn", {
            mode: "minimum",
          },
        ],
        "@stylistic/no-multiple-empty-lines": [
          "warn", {
            max: 5,
            maxEOF: 1,
          },
        ],
        "@stylistic/no-multi-spaces": [
          "off",
        ],
        "@stylistic/array-element-newline": [
          "warn", {
            ArrayExpression: "consistent",
          },
        ],
        "@stylistic/newline-per-chained-call": [
          "warn",
        ],
        "@stylistic/padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            prev: [
              "var", "const", "let",
            ],
            next: "return",
          },
        ],
        "@stylistic/object-property-newline": [
          "warn",
        ],
        "@stylistic/array-bracket-newline": [
          "warn", "always",
        ],
        "@stylistic/jsx-first-prop-new-line": [
          "warn", "multiline-multiprop",
        ],
        "@stylistic/object-curly-newline": [
          "warn", "always",
        ],
        "@stylistic/indent": [
          "warn",
          2,
          {
            ignoredNodes: [
              "ArrayExpression > ObjectExpression",
            ],
          },
        ],
        "@stylistic/semi": [
          "warn", "always",
        ],
        "@stylistic/implicit-arrow-linebreak": [
          "warn", "beside",
        ],
      },
    },
    {
      ignores: [
        "generated/graphql", "dist", "node_modules", "schema", "**/*.tmpl.*", "sw.js",
      ],
      files: [
        "**/*.{js,ts,vue}", "server/**/*.{js,ts}",
      ],
    },

  ])
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/html-indent": [
        "error", 2,
      ],
    },
  })
  .override("nuxt/import/rules", {
    rules: {
      // Import Rules
      "import/consistent-type-specifier-style": [
        "error", "prefer-top-level",
      ],
      "import/first": [
        "error",
      ],
      "import/newline-after-import": [
        "warn", {
          count: 3,
        },
      ],
      "import/no-mutable-exports": [
        "error",
      ],

    },
  });

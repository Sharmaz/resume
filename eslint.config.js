import js from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginImportX from "eslint-plugin-import-x";
import pluginJest from "eslint-plugin-jest";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default defineConfig([
  // Test files
  {
    files: ["**/__tests__/**/*.{js,jsx}", "**/*.test.{js,jsx}"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: { ...globals.jest },
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },

  // Source files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ...eslintReact.configs.recommended,
    plugins: {
      ...eslintReact.configs.recommended.plugins,
      "react-hooks": pluginReactHooks,
      "import-x": pluginImportX,
      "@stylistic": stylistic,
    },
    languageOptions: {
      ...eslintReact.configs.recommended.languageOptions,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    settings: {
      "react-x": { version: "19" },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintReact.configs.recommended.rules,

      // ─── Variables ───────────────────────────────────────────────────
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": ["error", {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      }],
      "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
      "no-shadow": "error",

      // ─── Functions ───────────────────────────────────────────────────
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],
      "arrow-body-style": ["error", "as-needed"],
      "no-confusing-arrow": ["error", { allowParens: true }],
      "implicit-arrow-linebreak": ["error", "beside"],

      // ─── Objects & Arrays ────────────────────────────────────────────
      "object-shorthand": ["error", "always"],
      "prefer-destructuring": ["warn", { object: true, array: false }],
      "dot-notation": "error",

      // ─── Strings & Templates ─────────────────────────────────────────
      "prefer-template": "error",
      "no-useless-concat": "error",
      "no-useless-escape": "error",
      "template-curly-spacing": ["error", "never"],

      // ─── Comparisons & Logic ─────────────────────────────────────────
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-else-return": ["error", { allowElseIf: false }],

      // ─── Best Practices ──────────────────────────────────────────────
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-param-reassign": ["error", { props: false }],
      "no-duplicate-imports": "error",
      camelcase: ["error", { properties: "never", ignoreDestructuring: false }],
      "new-cap": ["error", { newIsCap: true, capIsNew: false }],

      // ─── Formatting (JS) ─────────────────────────────────────────────
      indent: ["error", 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          "TemplateLiteral *",
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        offsetTernaryExpressions: true,
      }],
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      semi: ["error", "always"],
      "comma-dangle": ["error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      }],
      "quote-props": ["error", "as-needed"],
      "no-multi-spaces": "error",
      "space-before-blocks": "error",
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-infix-ops": "error",
      "eol-last": ["error", "always"],
      "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
      "no-whitespace-before-property": "error",
      "padded-blocks": ["error", "never"],
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "space-in-parens": ["error", "never"],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "block-spacing": ["error", "always"],
      "comma-spacing": ["error", { before: false, after: true }],
      "computed-property-spacing": ["error", "never"],
      "func-call-spacing": ["error", "never"],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "no-trailing-spaces": "error",

      // ─── @stylistic — Arrow spacing ──────────────────────────────────
      "@stylistic/arrow-spacing": ["error", { before: true, after: true }],
      "@stylistic/arrow-parens": ["error", "always"],

      // ─── @stylistic — JSX formatting ─────────────────────────────────
      "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
      "@stylistic/jsx-curly-spacing": ["error", { when: "never", children: true }],
      "@stylistic/jsx-equals-spacing": ["error", "never"],
      "@stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "@stylistic/jsx-indent-props": ["error", 2],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
      "@stylistic/jsx-self-closing-comp": "error",
      "@stylistic/jsx-tag-spacing": ["error", {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      }],
      "@stylistic/jsx-wrap-multilines": ["error", {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      }],

      // ─── @eslint-react ───────────────────────────────────────────────
      "@eslint-react/no-missing-key": "error",
      "@eslint-react/no-array-index-key": "warn",
      "@eslint-react/naming-convention/component-name": "error",
      "@eslint-react/dom/no-dangerously-set-innerhtml": "warn",
      "@eslint-react/dom/no-unknown-property": "error",

      // ─── React Hooks ─────────────────────────────────────────────────
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ─── Imports ─────────────────────────────────────────────────────
      "import-x/order": ["error", {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          { pattern: "react", group: "external", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      }],
      "import-x/newline-after-import": "error",
      "import-x/no-duplicates": "error",
    },
  },

  globalIgnores(["**/coverage/**", "**/dist/**", "**/node_modules/**"]),
]);

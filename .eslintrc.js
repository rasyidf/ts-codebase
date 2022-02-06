const prettierrc = require('rc')('./prettier');

module.exports = {
    extends: ['airbnb', 'airbnb-typescript'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['warn', prettierrc],
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-unused-var': 0,
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-one-expression-per-line": "off",
        "@typescript-eslint/no-shadow": "off",

        "implicit-arrow-linebreak": [0, "below"],
        "import/extensions": "off",
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }]
    },
    parserOptions: {
        project: './tsconfig.json'
    },
};
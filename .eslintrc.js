module.exports = {
    env: {
        node: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'max-len': 'off',
        'no-await-in-loop': 'off',
        'class-methods-use-this': 'off'
    }
};

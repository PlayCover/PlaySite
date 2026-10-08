import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  astro: true,
  typescript: true,
  ignores: ['**/*.json', 'interfaces/Release.ts'],
}, {
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
  },
}, {
  // typescript-eslint's no-unused-vars currently misreports plain JS variables
  // as "only used as a type"; use the core rule for .js/.mjs files instead.
  files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  rules: {
    'unused-imports/no-unused-vars': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
})

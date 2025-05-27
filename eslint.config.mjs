import { eslint } from '@siberiacancode/eslint';

/** @type {import('eslint').Linter.Config} */
export default eslint(
  {
    typescript: true,
    react: true,
    jsx: true,
    'jsx-a11y': true
  },
  {
    name: 'shift-intensive/rewrite',
    rules: {
      'node/prefer-global/process': 'off',
      'react/no-context-provider': 'off'
    }
  }
);

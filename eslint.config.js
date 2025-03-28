import antfu from '@antfu/eslint-config';
import prettier from 'eslint-config-prettier';

export default antfu(
  {
    formatters: true,
    unocss: true,
    vue: true,
  },
  prettier,
  {
    rules: {
      'antfu/if-newline': 'off',
    },
  }
);

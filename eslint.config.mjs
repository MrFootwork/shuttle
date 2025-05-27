// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt(
  // Prettier plugin integration
  {
    name: 'my:prettier-setup',
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // Override rules if necessary
  {
    name: 'my:prettier-config-override',
    rules: {
      // turn off conflicting rules if needed
      'vue/multi-word-component-names': 'warn',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  // Disable ESLint formatting rules in favor of Prettier
  prettierConfig
)

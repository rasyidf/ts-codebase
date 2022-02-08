import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    // Add your color
    'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0'],
    // or replace default theme color
    blue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
  },

  shadows: {
    // other shadows (xs, sm, lg) will be merged from default theme
    md: '1px 1px 3px rgba(0,0,0,.25)',
    xl: '5px 5px 3px rgba(0,0,0,.25)',
  },

  headings: {
    fontFamily: 'Montserrat, sans-serif',
    sizes: {
      h1: {
        fontSize: 30,
      },
    },
  },
};

export default theme;

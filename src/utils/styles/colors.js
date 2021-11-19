export const COLORS = {
  black: '#1C1427',
  dark: '#40394A',
  light: '#ffffff',
  green: '#65CE54',
  softGray: '#f9f9f9',
  lightGray: '#F6F5F5',
  darkGray: '#dddddd',
  deepGray: '#8E8E8E',
  red: '#DA5D5D',
  yellow: '#FFE81B',
  primary_old: '#41337A',
  secondary_old: '#927BF1',
  link: '#FA86BE',
  secondary: '#A275E3',
  primary: '#FA86BE',
  danger: '#EF4339',
  success: '#9AEBED',
  warning: '#FFFCAB',
  red2: '#FF4D4D',
  border: '#D3E0EA',
  overlay0: 'rgba(172, 77, 77, 0)',
  overlay1: 'rgba(37, 37, 37, 1)'
};

export const THEMES = {
  colors: {
    black: COLORS.black,
    dark: COLORS.dark,
    light: COLORS.light,
    danger: COLORS.danger,
    link: COLORS.link,
    success: COLORS.success,
    warning: COLORS.warning,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    empty: COLORS.darkGray,
    empty2: COLORS.lightGray,
    star: COLORS.yellow,
    darkGray: COLORS.darkGray,
    deepGray: COLORS.deepGray,
    blue: COLORS.blue,
    border: COLORS.border
  },
  shadow: {
    styled: {
      getBoxShadow: (size = 4) => 'box-shadow : 0 2px 10px 0 rgba(0,0,0, 0.1);'
    }
  },
  getColor(color, defaultColor = 'transparent') {
    if (!color) {
      return defaultColor;
    }

    if (this.colors[color]) {
      return this.colors[color];
    }

    if (COLORS[color]) {
      return COLORS[color];
    }

    return color;
  }
};
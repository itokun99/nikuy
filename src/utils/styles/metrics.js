export const METRICS = {
  window: {
    width: 0,
    height: 0
  },
  screen: {
    width: 0,
    height: 0
  },
  responsive: {
    l: 525,
    m: 480,
    s: 425,
    xs: 375,
    xxs: 360,
    xxxs: 325
  },
  gutter: {
    navbarHeight: 64,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
    xxxl: 56,
    xxxxl: 64
  },
  radius: {
    input: 10,
    button: 10,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
    xxxl: 56,
    xxxxl: 64
  },
  getRadius(size, defaultSize = 'xs') {
    if (!size && typeof size !== 'number') {
      return this.radius[defaultSize];
    }
    if (this.radius[size]) {
      return this.radius[size];
    }
    return size;
  },
  getGutter(size, defaultSize = 's') {
    if (!size && typeof size !== 'number') {
      return this.radius[defaultSize];
    }
    if (this.radius[size]) {
      return this.radius[size];
    }
    return size;
  }
};
export const FONTS = {
  fontFamily: {
    regular: '\'Sora\', sans-serif',
    italic: '\'Sora\', sans-serif',
    bold: '\'Sora\', sans-serif',
    boldItalic: '\'Sora\', sans-serif',
    medium: '\'Sora\', sans-serif',
    mediumItalic: '\'Sora\', sans-serif',
    big: '\'Titan One\', cursive'
  },
  size: {
    xxxs: 11,
    xxs: 12,
    xs: 13,
    s: 14,
    m: 16,
    l: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28
  },
  getSize(size, defaultSize = 'm') {
    if (!size) {
      return this.size[defaultSize];
    }

    if (this.size[size]) {
      return this.size[size];
    }

    return size;
  },
  getFontStyle({
    bold, italic, medium, family
  }) {
    // with font family
    if (family) {
      return this.fontFamily[family];
    }

    // bold & italic
    if (bold && italic) {
      return this.fontFamily.boldItalic;
    }

    // medium & italic
    if (medium && italic) {
      return this.fontFamily.mediumItalic;
    }

    // medium
    if (medium) {
      return this.fontFamily.medium;
    }

    // bold
    if (bold) {
      return this.fontFamily.bold;
    }

    // italic
    if (italic) {
      return this.fontFamily.italic;
    }

    // default return regular
    return this.fontFamily.regular;
  }
};
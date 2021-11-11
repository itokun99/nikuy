import { createGlobalStyle } from 'styled-components';
import { FONTS, THEMES, METRICS } from 'utils';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  font-family: ${FONTS.fontFamily.regular};
}

body {
  background-color:#f9f9f9;
  font-family: ${FONTS.fontFamily.regular};
}

#__next {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: auto;
  max-width: ${METRICS.responsive.m}px;
  margin-left: auto;
  margin-right: auto;
}

* {
  box-sizing: border-box;
}

/** OVERIDE */
.react-calendar {
  width: 100%;
  font-family: ${FONTS.fontFamily.regular};
  border:none;
}

.react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus {
  background-color: transparent;
  border: 1px solid ${THEMES.colors.secondary} !important;
  color: ${THEMES.colors.secondary};
}

.react-calendar__navigation button {
  font-family: ${FONTS.fontFamily.medium};
}

.react-calendar__month-view__weekdays__weekday {
  font-family: ${FONTS.fontFamily.medium};
}

.react-calendar__tile {
  font-family: ${FONTS.fontFamily.regular};
  border-radius: ${METRICS.radius.xs}px;
  border: 1px solid transparent !important;
}

.react-calendar__tile--now {
  background-color: ${THEMES.colors.primary};
}

.react-calendar__tile--active {
  background-color: ${THEMES.colors.secondary};
}
`;

export default GlobalStyle;
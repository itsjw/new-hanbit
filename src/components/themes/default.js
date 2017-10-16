// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  // background: white2
  white: ['#fff', '#f4f4f4'],
  greyscale: [
    '#dedfe0',
    '#969696',
    '#616161',
    '#3e3e3e',
    '#222222',
  ],
  black: ['#000'],
  naver: ['#25ce41'],
  facebook: ['#3b5998'],
}

theme.sizes = {
  icon: '1.5em',
  smallIcon: '1.2em',
}

theme.reversePalette = reversePalette(theme.palette)

export default theme

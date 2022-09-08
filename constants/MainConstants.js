import figmaConverter from '../config/styles'

export default {
  white: '#FBFFFF',
  red: '#FF1818',
  yellow: '#FFF01F',
  green: '#39FF14',
  blue: '#00FEFC',
  orange: '#F6890A',

  backgroundField: '#404040',
  backgroundItem: '#F2F3F5',
  backgroundButton: '#EDF1F8',

  systemRed: '#EB4832',
  systemRedLight: '#FFF0F0',
  secondaryYellow: '#FEDB22',

  ordersColor: '#E3FF3E',
  cancelColor: '#F7B2A9',

  fontRegular: 'Plain-Regular',
  fontRegularBold: 'Plain-Medium',
  fontAccent: 'PPRightGrotesk-TightBlack',

  borderRadiusPill: figmaConverter(50),
  borderRadiusCircle: figmaConverter(100),

  borderRadiusSmall: figmaConverter(4),
  borderRadiusMedium: figmaConverter(8),
  borderRadiusLarge: figmaConverter(12),
  borderRadiusSheet: figmaConverter(24),

  wrapXXS: figmaConverter(2),
  wrapXS: figmaConverter(4),
  wrap8: figmaConverter(8),
  wrapS: figmaConverter(16),
  wrapM: figmaConverter(24),
  wrapXL: figmaConverter(32),
  wrapXXL: figmaConverter(40)
}

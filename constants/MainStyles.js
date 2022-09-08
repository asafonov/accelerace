import {StyleSheet} from 'react-native'
import mc from './MainConstants'
import figmaConverter from '../config/styles'

const MainStyles = StyleSheet.create({
  window: {
    flex: 1,
    justifyContent: 'flex-start',
    minHeight: figmaConverter(600),
    backgroundColor: mc.white
  },
  pinkPage: {
    backgroundColor: '#ED1D7C',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  greyPage: {
    backgroundColor: mc.backgroundField
  },
  whitePage: {
    backgroundColor: mc.white
  },
  flexRJ: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  notShow: {
    display: 'none'
  },
  wrapMain: {
    marginHorizontal: mc.wrapS
  },
  scrollStyleHeader: {
    position: 'absolute',
    top: figmaConverter(-22),
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1
  },
  scrollStyleBody: {zIndex: 0, elevation: 0},
  h1: {
    fontSize: figmaConverter(90),
    lineHeight: figmaConverter(72),
    paddingTop: figmaConverter(18),
    marginBottom: -figmaConverter(18),
    color: mc.white,
    fontFamily: mc.fontAccent,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  h1New: {
    fontSize: figmaConverter(60),
    lineHeight: figmaConverter(48),
    paddingTop: figmaConverter(18),
    color: mc.darkBlue,
    fontFamily: mc.fontAccent,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  h2: {
    fontSize: figmaConverter(24),
    lineHeight: figmaConverter(30),
    color: mc.textPrimary,
    fontFamily: mc.fontRegularBold
  },
  text: {
    fontSize: figmaConverter(16),
    lineHeight: figmaConverter(22),
    color: mc.textPrimary,
    fontFamily: mc.fontRegular
  },
  newTextPrice: {
    fontSize: figmaConverter(16),
    lineHeight: figmaConverter(16),
    color: mc.textPrimary,
    fontFamily: mc.fontAccent
  },
  textHint: {
    fontSize: figmaConverter(13),
    lineHeight: figmaConverter(15),
    fontFamily: mc.fontRegular
  },
  textBold: {
    fontFamily: mc.fontRegularBold
  },
  textWhite: {
    color: mc.white
  },
  textGreen: {
    color: mc.green
  },
  textPink: {
    color: mc.pink
  },
  textGrey: {
    color: mc.textHint
  },
  lineThrough: {
    backgroundColor: mc.textPrimary,
    height: figmaConverter(1),
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '50%'
  },
  button: {
    backgroundColor: mc.pink,
    height: figmaConverter(56),
    borderRadius: mc.borderRadiusPill,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDisabled: {
    opacity: 0.5
  },
  buttonGreen: {
    backgroundColor: mc.green
  },
  buttonGrey: {
    backgroundColor: mc.backgroundButton
  },
  input: {
    backgroundColor: mc.backgroundField,
    height: figmaConverter(50),
    borderRadius: mc.borderRadiusPill,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputOne: {
    backgroundColor: mc.backgroundField,
    height: figmaConverter(50),
    width: figmaConverter(48),
    borderRadius: mc.borderRadiusLarge,
    justifyContent: 'center',
    textAlign: 'center'
  },
  inputText: {
    paddingLeft: mc.wrapS,
    paddingRight: figmaConverter(36),
    lineHeight: figmaConverter(18)
  },
  searchText: {
    paddingLeft: mc.wrapM,
    paddingRight: figmaConverter(32)
  },
  errorBack: {
    backgroundColor: mc.systemRedLight
  },
  errorText: {
    color: mc.systemRed
  },
  containerPopup: {
    flex: 1,
    justifyContent: 'center'
  },
  popupBack: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  borderB: {
    borderBottomWidth: 1,
    borderColor: mc.backgroundItem
  },
  borderT: {
    borderTopWidth: 1,
    borderColor: mc.backgroundItem
  },
  borderAll: {
    borderWidth: 1,
    borderColor: mc.backgroundButton
  },
  lineSwipe: {
    width: figmaConverter(48),
    height: figmaConverter(4),
    borderRadius: mc.borderRadiusSmall,
    backgroundColor: '#E8EAF2',
    position: 'absolute',
    top: figmaConverter(8)
  }
})

export default MainStyles

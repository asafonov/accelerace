import {Dimensions} from 'react-native'

const ww = Dimensions.get('window').width
const wh = Dimensions.get('window').height
const figmaConverter = s => (s / 375) * ww

export default figmaConverter
export {ww, wh, figmaConverter}

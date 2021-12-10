/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
import Responsive from 'react-native-lightweight-responsive';
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 0,
        borderColor: Colors.text,
        backgroundColor: Colors.transparent,
        color: '#0E0F1E',
        minHeight: 40,
        textAlign: 'left',
        paddingHorizontal: 0,
        fontSize: Responsive.font(16),
        borderRadius: 0,
        fontFamily: 'Poppins-Regular',
        borderBottomWidth: 1,
        borderBottomColor: '#565566'
      },
    }),
  }
}

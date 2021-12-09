import React from 'react'
import Responsive from 'react-native-lightweight-responsive';
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { useTheme } from '@/Hooks'

const { width, height } = Dimensions.get('window');
const ShapeBackground = ({ style }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={[{ height, width }, style]}>
      <Image style={styles.topLeft} source={Images.bgShapeTopLeft} resizeMode={'stretch'} />
      <Image style={styles.centerRight} source={Images.bgShapeCenterRight} resizeMode={'stretch'} />
      <Image style={styles.center} source={Images.bgShapeCenter} resizeMode={'contain'} />
      <Image style={styles.bottomRight} source={Images.bgShapeBottomRight} resizeMode={'stretch'} />
    </View>
  )
}

export default ShapeBackground


const styles = StyleSheet.create({
  topLeft: {
    width: Responsive.width(74),
    height: Responsive.height(74),
    position: 'absolute',
    top: 0,
    left: 0
  },
  center: {
    width: Responsive.width(26),
    height: Responsive.height(26),
    top: Responsive.height(277),
    left: Responsive.width(247),
    position: 'absolute',
  },
  centerRight: {
    width: Responsive.width(74),
    height: Responsive.height(149),
    position: 'absolute',
    right: 0,
    top: Responsive.height(92)
  },
  bottomRight: {
    width: Responsive.width(102),
    height: Responsive.height(61),
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})
import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

const CustomImage = ({ height, width, mode, source, style, tintColor, styleImage }) => {
  const { Layout } = useTheme()

  return (
    <View style={[{ height, width, source }, style]}>
      <Image tintColor={tintColor} style={[Layout.fullSize, styleImage, { tintColor, width, height }]} source={source} resizeMode={mode} />
    </View>
  )
}

CustomImage.propTypes = {
  height: PropTypes.any,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.any,
  source: PropTypes.any,
  style: PropTypes.any,
  tintColor: PropTypes.any
}

CustomImage.defaultProps = {
  height: Responsive.height(50),
  mode: 'contain',
  width: Responsive.height(50),
  source: null,
  style: {}
}

export default CustomImage
import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { useTheme } from '@/Hooks'

const CustomImage = ({ height, width, mode, source, style }) => {
  const { Layout } = useTheme()

  return (
    <View style={[{ height, width, source }, style]}>
      <Image style={Layout.fullSize} source={source} resizeMode={mode} />
    </View>
  )
}

CustomImage.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
  source: PropTypes.any,
  style: PropTypes.any
}

CustomImage.defaultProps = {
  height: 100,
  mode: 'contain',
  width: 100,
  source: null,
  style: {}
}

export default CustomImage
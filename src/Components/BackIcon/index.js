import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

const BackIcon = ({ height, width, onPress }) => {
  const { Layout, Images } = useTheme()

  return (
    <TouchableOpacity style={{ height, width }} onPress={onPress}>
      <Image style={Layout.fullSize} source={Images.icBack} resizeMode={'contain'} />
    </TouchableOpacity>
  )
}

BackIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

BackIcon.defaultProps = {
  height: Responsive.height(36),
  width: Responsive.width(36),
}

export default BackIcon
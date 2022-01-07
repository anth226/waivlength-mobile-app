import React from 'react'
import Responsive from 'react-native-lightweight-responsive';
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@/Hooks'

const { width, height } = Dimensions.get('window');
const GradientBackgroundAngle = ({ style }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={[{ height, width }, style]}>
      <LinearGradient
            colors={['#ebeff5', '#DED8F3']}
            useAngle={true} angle={-45} angleCenter={{ x: 0.2, y: 0.2 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>
    </View>
  )
}

export default GradientBackgroundAngle

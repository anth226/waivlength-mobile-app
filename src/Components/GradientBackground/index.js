import React from 'react'
import Responsive from 'react-native-lightweight-responsive';
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@/Hooks'

const { width, height } = Dimensions.get('window');
const GradientBackground = ({ style }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={[{ height, width }, style]}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }} 
        end={{ x: 1.0, y: 1.0 }}
        colors={['#DED8F3', '#F9F0F1']}
        style={Layout.fill}>
      </LinearGradient>
    </View>
  )
}

export default GradientBackground

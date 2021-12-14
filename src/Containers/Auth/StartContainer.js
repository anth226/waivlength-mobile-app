import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

import { Logo, GradientBackground, ShapeBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-Medium'];

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const StartContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()
  const { t } = useTranslation()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: false })
    //navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })


  return (
    <SafeAreaView edges={['top']} style={[Layout.fill, styles.container]} >
      <GradientBackground style={{ position: 'absolute' }} />
      <ShapeBackground style={{ position: 'absolute' }} />
      <ScrollView
        contentContainerStyle={[Layout.colVCenter,
        { flexGrow: 1 }
        ]}
        style={[Layout.fill]}>

        <Logo width={Responsive.width(40)} height={Responsive.height(24)} style={{ marginTop: Responsive.height(15) }} />
        <Text style={[Layout.fullWidth, styles.textTitle]}>Social{'\n'}Media{'\n'}Like Never{'\n'}Before.</Text>
        <Text style={[Layout.fullWidth, styles.textDescription]}>Now users hold the power.{'\n'}Post, create, collaborate and{'\n'}earn your piece of the pie.</Text>
        <View style={styles.line} />
        <View style={{ height: Responsive.height(10) }} />
        <View style={Layout.fill} />
        <View style={[Layout.fullWidth, Layout.rowCenter, styles.buttonWrapper]}>
          <TouchableOpacity
            style={[Common.button.rounded, styles.buttonCreateAccount]}
            onPress={() => navigate('CreateAccount')}
          >
            <Text style={styles.textButtonCreateAccount}>Create Account</Text>
          </TouchableOpacity>
          <View style={{ width: Responsive.width(13) }} />
          <TouchableOpacity
            style={[Common.button.rounded, styles.buttonLogIn]}
            onPress={() => navigate('Login')}
          >
            <Text style={[styles.textButtonLogin]}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StartContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  textTitle: {
    fontSize: Responsive.font(55),
    marginTop: Responsive.height(122),
    paddingHorizontal: Responsive.width(30),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: Responsive.width(65),
    color: '#0E0E45',
  },
  textDescription: {
    fontFamily: 'Poppins-Medium',
    marginTop: Responsive.height(10),
    lineHeight: Responsive.width(24),
    paddingHorizontal: Responsive.width(30),
    fontSize: Responsive.font(16),
    color: '#6A6C81'
  },
  line: {
    width: Responsive.width(36),
    height: Responsive.height(6),
    backgroundColor: '#2F80ED',
    marginTop: Responsive.height(10),
    marginHorizontal: Responsive.width(30),
    borderRadius: Responsive.height(4),
    alignSelf: 'flex-start'
  },
  buttonWrapper: {
    paddingHorizontal: Responsive.width(30),
    marginBottom: Responsive.height(84)
  },
  buttonCreateAccount: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: Responsive.height(73),
    borderRadius: Responsive.height(20),
    backgroundColor: '#5D5FEF',
    flex: 1.8
  },
  buttonLogIn: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: Responsive.height(73),
    borderRadius: Responsive.height(20),
    backgroundColor: '#EDF1F5',
    flex: 1,
    borderColor: '#D0D0DB',
    borderWidth: 1
  },
  textButtonCreateAccount: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(16),
    color: '#ffffff'
  },
  textButtonLogin: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    color: '#59596C'
  }
});

import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Logo, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import RenderHtml from 'react-native-render-html';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0

const UploadDocumentContainer = () => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [isCheckRemember, setCheckRemember] = useState(false)

  const { width } = useWindowDimensions();

  const { t } = useTranslation()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: null })
    //navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })


  return (
    <KeyboardAvoidingView
      style={{
        flexGrow: 1
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={[Layout.fullWidth, Layout.rowHCenter, styles.actionBar]}>
        <Logo width={56} height={34} />
        <View style={Layout.fill} />
        <TouchableOpacity onPress={() => navigateAndSimpleReset('ProffVerification')}>
          <CustomImage width={37} height={37} source={Images.icClose} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        style={[Layout.fill, Layout.column, styles.container]}>

        <View style={[Layout.column, Layout.center, { height: width }]}>

          <CustomImage width={width - 150} height={width - 150} source={Images.icCheck} />

        </View>
        <View style={[Layout.fill, Layout.center]}>

          <Text style={[styles.textThankYou]}>Thank you !</Text>

          <Text style={[Gutters.smallTMargin, styles.textSubThankYou]}>Your data is being processed and you can alreday enjoy all the features of the application.</Text>

        </View>

        <TouchableOpacity
          style={[Common.button.rounded, Gutters.largeTMargin, Gutters.regularBMargin, { width: '100%' }]}
          onPress={() => navigateAndSimpleReset('ProffVerification')}
        >
          <Text style={styles.textButton}>Let’s go</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default UploadDocumentContainer

const styles = StyleSheet.create({
  actionBar: {
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
  },

  textThankYou: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28
  },
  textSubThankYou: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 30
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },

});
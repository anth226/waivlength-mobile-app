import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Back, RadioButton, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import RenderHtml from 'react-native-render-html';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0

const UploadSelfieContainer = () => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [isCheckRemember, setCheckRemember] = useState(false)

  const { width } = useWindowDimensions();

  const { t } = useTranslation()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: false })
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
        <TouchableOpacity onPress={() => navigateAndSimpleReset('ProffVerification')}>
          <Text style={styles.textAction}>Close</Text>
        </TouchableOpacity>
        <Text style={[Layout.fill, Fonts.textCenter, styles.textTitle]}>Upload Selfie</Text>
        <TouchableOpacity onPress={() => {}}>
          <CustomImage width={20} height={20} source={Images.icCamera} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        style={[Layout.fill, Layout.column, styles.container]}>

        <View style={[Layout.column, Layout.center]}>

          <CustomImage style={[Layout.fullWidth, { marginTop: 15 }]} width={width} height={width} source={Images.exampleSelfie} />

          <CustomImage style={{ marginTop: -27 }} width={54} height={54} source={Images.icCheck} />

        </View>
        <View style={[Layout.fill, Layout.center]}>

          <Text style={[styles.textSelfyMatch]}>Selfy’s a match</Text>

          <Text style={[Gutters.smallTMargin, styles.textSubSelfyMatch]}>Photo meats  all requirements</Text>

        </View>

        <TouchableOpacity
          style={[Common.button.rounded, Gutters.largeTMargin, Gutters.regularBMargin, { width: '100%' }]}
          onPress={() => navigateAndSimpleReset('ProffVerification')}
        >
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default UploadSelfieContainer

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
  textAction: {
    color: '#5D5FEF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  textTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  textSelfyMatch: {
    fontFamily: 'Poppins-Medium',
    fontSize: 23
  },
  textSubSelfyMatch: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 14,
  },

});

const tagsStyles = {
  p: {
    fontSize: 20,
    color: '#1E293B'
  },
  span: {
    fontWeight: 'bold'
  }
}

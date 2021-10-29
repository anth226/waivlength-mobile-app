import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Back } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0

const VerificationContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        style={[Layout.fill, Layout.column, styles.container]}>
        <TouchableOpacity
          onPress={() => navigateAndSimpleReset('SignUp')}
        >
          <Back width={42} height={42} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>We’ve just sent you 4 digit code on your email</Text>

        <Text style={[Fonts.textLeft, Gutters.largeTMargin, styles.textPleaseEnterCode]}>Please enter your code here !</Text>

        <Text style={[Fonts.textLeft, Gutters.largeTMargin, styles.textLabelCode]}>CODE</Text>

        <View style={[Layout.fullWidth, Layout.row, Layout.justifyContentBetween, { marginTop: 10 }]}>

          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Fonts.textCenter, styles.textCode]}
              keyboardType={'decimal-pad'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Fonts.textCenter, styles.textCode]}
              keyboardType={'decimal-pad'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Fonts.textCenter, styles.textCode]}
              keyboardType={'decimal-pad'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Fonts.textCenter, styles.textCode]}
              keyboardType={'decimal-pad'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Fonts.textCenter, styles.textCode]}
              keyboardType={'decimal-pad'}
              maxLength={1} />
          </View>

        </View>

        <Text style={[Fonts.textLeft, styles.textCodeCurrent]}>Code is currect</Text>

        <View style={Layout.fill} />

        <TouchableOpacity
          style={[Common.button.rounded, Gutters.smallTMargin, { width: '100%' }]}
          onPress={() => navigateAndSimpleReset('ProffVerification')}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default VerificationContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    paddingTop: 20
  },
  textTitle: {
    fontSize: 25,
    marginTop: 15,
    fontFamily: 'Poppins-SemiBold'
  },
  textPleaseEnterCode: {
    color: '#64748B',
    fontSize: 20,
    fontFamily: 'Poppins-Light'
  },
  textLabelCode: {
    color: '#121F2F',
    fontSize: 12,
    fontFamily: 'Poppins-Medium'
  },
  textCodeWrapper: {
    width: 56,
    height: 56,
    backgroundColor: '#F1F5FF'
  },
  textCode: {
    color: '#363C47',
    fontWeight: 'bold',
    fontSize: 24
  },
  textCodeCurrent: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Poppins-Regular'
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  },

});

const tagsStyles = {
  p: {
    fontSize: 13,
    color: '#8393A5'
  },
  a: {
    fontSize: 13,
    color: '#246BFD'
  }
}

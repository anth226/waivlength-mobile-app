import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Logo, CheckBox } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-Medium'];

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0

const SignUpContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        style={[Layout.fill, Layout.column, styles.container]}>
        <Logo width={56} height={34} />

        <Text style={styles.textTitle}>Let us get to know you, tell us your data</Text>

        <View style={[Layout.fill, Gutters.largeTMargin]}>

          <Text style={styles.textLabel}>Full Name</Text>
          <TextInput
            onChangeText={text => { }}
            editable={true}
            placeholder={'enter your full name'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fullWidth, Common.textInput]}
          />
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            onChangeText={text => { }}
            editable={true}
            keyboardType={'email-address'}
            placeholder={'example@gmail.com'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fullWidth, Common.textInput]}
          />
          <Text style={styles.textLabel}>Password</Text>
          <TextInput
            onChangeText={text => { }}
            editable={true}
            secureTextEntry={true}
            placeholder={'Password must be 8 character'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fullWidth, Common.textInput]}
          />

          <View style={[Layout.fullWidth, Layout.row, { marginTop: 10, marginBottom: 25 }]}>

            <CheckBox
              selected={isCheckRemember}
              size={22}
              onPress={() => setCheckRemember(!isCheckRemember)}
              text={`I agree with <a href='https://google.com'>Terms</a> & <a href='https://google.com'>Conditions</a>`}
              isHtml={true}
              tagsStyles={tagsCheckBoxStyles}
              style={Layout.fill}
            />

          </View>


          <TouchableOpacity
            style={[Common.button.rounded, Gutters.smallTMargin, { width: '100%' }]}
            onPress={() => navigateAndSimpleReset('Verification')}
          >
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={[Fonts.textCenter, Gutters.largeTMargin, styles.textAlreadyAccount]}>Already have an account?</Text>

          <TouchableOpacity
            style={[Gutters.regularTMargin]}
            onPress={() => navigateAndSimpleReset('Login')}>
            <Text style={[Fonts.textCenter, styles.textLogin]}>Login</Text>
          </TouchableOpacity>

          <View style={Layout.fill} />
          <RenderHtml
            tagsStyles={tagsStyles}
            contentWidth={width}
            systemFonts={systemFonts}
            source={{ html: `<p style='text-align: center;'>By signing up, you agree to our <a href='https://google.com'>Terms of Service</a> and ackowledge that our <a href='https://google.com'>Privacy Policy</a> to you.</p>` }}
          />
          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUpContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    paddingTop: 20
  },
  textTitle: {
    fontSize: 28,
    marginTop: 15,
    fontFamily: 'Poppins-Medium'
  },
  textLabel: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: 'Poppins-Light'
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  },
  textAlreadyAccount: {
    color: '#9497A8',
    fontSize: 12,
    fontFamily: 'Poppins-Regular'
  },
  textLogin: {
    color: '#7B7DF6',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium'
  }
});

const tagsCheckBoxStyles = {
  p: {
    fontSize: 12,
    color: '#7C8093',
    fontFamily: 'Poppins-Regular'
  },
  a: {
    fontSize: 12,
    color: '#5D5FEF',
    fontFamily: 'Poppins-Regular'
  }
}

const tagsStyles = {
  p: {
    fontSize: 13,
    color: '#8393A5',
    fontFamily: 'Poppins-Regular'
  },
  a: {
    fontSize: 13,
    color: '#246BFD',
    fontFamily: 'Poppins-Regular'
  }
}

import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Logo, CheckBox } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-Medium'];

const LoginContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()
  const [isCheckRemember, setCheckRemember] = useState(false)
  const [isHidePass, setHidePass] = useState(true);

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
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      style={[Layout.fill, Layout.column, styles.container]}>
      <Logo width={56} height={34} />

      <Text style={styles.textTitle}>Login to your{'\n'}account</Text>

      <View style={[Layout.fill, Gutters.largeTMargin]}>

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
        <View style={[Layout.fullWidth, Layout.rowHCenter, Common.textInput]}>
        <TextInput
          onChangeText={text => { }}
          editable={true}
          secureTextEntry={isHidePass ? true : false}
          placeholder={'**********'}
          placeholderTextColor={'#7C8093'}
          selectTextOnFocus
          style={Layout.fill}
        />
        <Icon
              name={isHidePass ? 'eye-outline' : 'eye-off-outline'}
              size={19}
              style={{ padding: 10 }}
              color="#B1B6C9"
              onPress={() => setHidePass(!isHidePass)}
            />
        </View>
        

        <View style={[Layout.fullWidth, Layout.row, { marginTop: 10, marginBottom: 25 }]}>

          <CheckBox
            selected={isCheckRemember}
            size={22}
            onPress={() => setCheckRemember(!isCheckRemember)}
            text='Remember me'
            textStyle={styles.textRemember}
            style={Layout.fill}
          />

          <Text style={styles.textForgotPw}>Forgot Password?</Text>

        </View>


        <TouchableOpacity
          style={[Common.button.rounded, Gutters.smallTMargin, { width: '100%' }]}
          onPress={() => navigateAndSimpleReset('Main')}
        >
          <Text style={styles.textButton}>Log In</Text>
        </TouchableOpacity>



        <Text style={[Fonts.textCenter, Gutters.largeTMargin, styles.textLabelDontAccount]}>Don’t have an account?</Text>

        <TouchableOpacity
          style={[Gutters.regularTMargin]}
          onPress={() => navigateAndSimpleReset('SignUp')}>
          <Text style={[Fonts.textCenter, { color: '#7B7DF6', fontSize: 14, textDecorationLine: 'underline' }]}>Create one</Text>
        </TouchableOpacity>

        <View style={Layout.fill} />
        <RenderHtml
          tagsStyles={tagsStyles}
          contentWidth={width}
          systemFonts={systemFonts}
          source={{ html: `<p style='text-align: center;'>By signing up, you agree to our <a href='https://google.com'>Terms of Service</a> and ackowledge that our <a href='https://google.com'>Privacy Policy</a> to you.</p>` }}
        />
      </View>
    </ScrollView>
  )
}

export default LoginContainer

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
    marginTop: 15,
    fontFamily: 'Poppins-Light'
  },
  textRemember: {
    color: '#7C8093',
    fontFamily: 'Poppins-Regular'
  },
  textForgotPw: {
    color: '#7B7DF6',
    fontSize: 12,
    fontFamily: 'Poppins-Medium'
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  },
  textLabelDontAccount: {
    color: '#9497A8',
    fontSize: 12,
    fontFamily: 'Poppins-Regular'
  },
  textCreateOne: {
    color: '#7B7DF6',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular'
  }
});

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

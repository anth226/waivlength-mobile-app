import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Logo } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const LoginContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()

  const { t } = useTranslation()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: null })
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    //navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill, Layout.column, styles.container]}>
      <Logo width={56} height={34} />

      <Text style={styles.textTitle}>Login to your{'\n'}account</Text>

      <View>

        <Text style={styles.textLabel}>Email</Text>
        <TextInput
          onChangeText={text => { }}
          editable={true}
          keyboardType={'email-address'}
          placeholder={'example@gmail.com'}
          placeholderTextColor={'#7C8093'}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          onChangeText={text => { }}
          editable={true}
          secureTextEntry={true}
          placeholder={'**********'}
          placeholderTextColor={'#7C8093'}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />


        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin, { width: '100%' }]}
          onPress={() => navigateAndSimpleReset('Main')}
        >
          <Text style={styles.textButton}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateAndSimpleReset('Main')}>
          <Text style={[Fonts.textCenter, { marginBottom: 35, marginTop: 10 }]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginVertical: 15
  },
  textLabel: {
    fontSize: 12,
    marginTop: 15
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 14
  },

});

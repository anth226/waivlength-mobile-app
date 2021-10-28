import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { ItemOnBoarding } from '@/Components'
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
    <View style={[Layout.fill, Layout.colCenter, styles.container]}>
      <ItemOnBoarding />
      <View>
        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin, { width: 220 }]}
          onPress={() => navigateAndSimpleReset('Main')}
        >
          <Text style={styles.textButton}>Login</Text>
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
    backgroundColor: '#ffffff'
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 14
  },

});

import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { ItemOnBoarding } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const OnBoardingContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()

  const { t } = useTranslation()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: null })
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
          onPress={() => navigateAndSimpleReset('Auth')}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateAndSimpleReset('Main')}>
          <Text style={[Fonts.textCenter, styles.textSkip]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoardingContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  },
  textSkip: {
    marginBottom: 35,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: '#6E6E9F'
  }
});

import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomImage, ActionBar, BackIcon, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const FA2VerificationContainer = ({ goBack }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const { t } = useTranslation()
  const { width } = useWindowDimensions();

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: false })
  }

  useEffect(() => {
    init()
  })

  return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
    <GradientBackground style={{ position: 'absolute' }} />
    <ActionBar
      left={<BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
      center={<CustomImage height={Responsive.width(40)} width={Responsive.width(40)} source={Images.logo} />}
      right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
    />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
        style={[Layout.fill]}>

        <View style={[Layout.cokumn, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(22) }]}>
          <Text style={styles.textHeader}>We’ve texted you a login verification code</Text>
          <Text style={styles.textDescription}>Please check your phone with a number ending in 22 for a six-digit code and enter it below to login in.</Text>

          <CustomImage width={Responsive.height(62)} height={Responsive.height(62)} source={Images.icLogoBg} style={{ marginTop: Responsive.height(36) }} />

          <Text style={styles.textAppName}>Waivlength</Text>
          <Text style={styles.textUsername}>@WaivToken</Text>
        </View>


        <View style={[Layout.fullWidth, Layout.row, Layout.justifyContentBetween, styles.verificationCodeWrapper]}>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Common.textInput, Fonts.textCenter]}
              keyboardType={'decimal-pad'}
              defaultValue={'1'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Common.textInput, Fonts.textCenter]}
              keyboardType={'decimal-pad'}
              defaultValue={'2'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Common.textInput, Fonts.textCenter]}
              keyboardType={'decimal-pad'}
              defaultValue={'3'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Common.textInput, Fonts.textCenter]}
              keyboardType={'decimal-pad'}
              defaultValue={'4'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Common.textInput, Fonts.textCenter]}
              keyboardType={'decimal-pad'}
              defaultValue={'5'}
              maxLength={1} />
          </View>
          <View style={[styles.textCodeWrapper]}>
            <TextInput
              style={[Layout.fill, Common.textInput, Fonts.textCenter]}
              keyboardType={'decimal-pad'}
              defaultValue={'6'}
              maxLength={1} />
          </View>
        </View>

        <View style={Layout.fill} />
        <View style={{ height: Responsive.height(10) }} />

        <TouchableOpacity
          onPress={() => { }}>
          <Text style={styles.textVerificationMethod}>Choose a different verification method</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Layout.fullWidth, Common.button.rounded, styles.buttonNext]}
          onPress={() => navigateAndSimpleReset('Main')}
        >
          <Text style={styles.textButtonNext}>Next</Text>
        </TouchableOpacity>
        <View style={{ height: Responsive.height(39) }} />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default FA2VerificationContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Responsive.width((24))
  },
  textTitle: {
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-Medium',
    color: '#242332',
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(24),
    lineHeight: Responsive.width(36),
    color: '#242332',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  textDescription: {
    fontFamily: 'NotoSans-Regular',
    fontSize: Responsive.font(14),
    lineHeight: Responsive.width(19),
    color: '#8184A3',
    paddingHorizontal: Responsive.width(34),
    marginTop: Responsive.height(10),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  textAppName: {
    fontFamily: 'Poppins-Bold',
    fontSize: Responsive.font(14),
    lineHeight: Responsive.width(21),
    color: '#242A31',
    marginTop: Responsive.height(10)
  },
  textUsername: {
    color: '#3B454E',
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(14),
    lineHeight: Responsive.width(21),
  },
  verificationCodeWrapper: {
    marginTop: Responsive.height(30),
    marginBottom: Responsive.height(5)
  },
  textCodeWrapper: {
    width: Responsive.width(42),
  },
  textCode: {
    color: '#242332',
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(14),
  },
  textVerificationMethod: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: Responsive.font(14),
    color: '#5D5FEF',
    lineHeight: Responsive.width(19)
  },
  buttonNext: {
    height: Responsive.height(52),
    borderRadius: Responsive.height(26),
    marginTop: Responsive.height(19)
  },
  textButtonNext: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    lineHeight: Responsive.width(28),
    color: '#ffffff',
  }
});

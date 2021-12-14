import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, Keyboard, TextInput, useWindowDimensions, Platform } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { SafeAreaView } from 'react-native-safe-area-context';
import Responsive from 'react-native-lightweight-responsive';

import { CustomImage, GradientBackground, ActionBar, BackIcon, ButtonNext } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const LoginContainer = () => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const { t } = useTranslation()
  const { width } = useWindowDimensions();
  const [keyboardHeight, setKeyboardHeight] = useState(0);


  const onKeyboardDidShow = (e) => {
    setKeyboardHeight(e.endCoordinates.height);
  }

  const onKeyboardDidHide = () => {
    setKeyboardHeight(0);
  }

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: false })
  }

  useEffect(() => {
    init()
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
        Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
        Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
    };
}, []);



  return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
    <GradientBackground style={{ position: 'absolute' }} />
    <ActionBar
      left={<BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
      right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
      center={<Text style={styles.textTitle}>Login</Text>}
    />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
        style={[Layout.fill]}>

        <View style={[Layout.row, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(28) }]}>
          <CustomImage width={Responsive.width(45)} height={Responsive.height(45)} source={Images.icLogin} />
        </View>
        <Text style={styles.textHeader}>Please enter your log in{'\n'}details.</Text>

        <View style={[Layout.fullWidth, Layout.row, Common.textInput, styles.inputTextWrapper, { marginTop: Responsive.height(22) }]}>
          <TextInput
            onChangeText={text => { }}
            editable={true}
            placeholder={'User can enter username or email here'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fullWidth, Common.textInput, styles.inputText]}
          />
        </View>

        <View style={[Layout.fullWidth, Layout.row, Common.textInput, styles.inputTextWrapper, { marginTop: Responsive.height(22) }]}>
          <TextInput
            onChangeText={text => { }}
            editable={true}
            placeholder={'User can enter password here'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput, styles.inputText]}
          />
          <TouchableOpacity>
            <CustomImage width={Responsive.width(24)} height={Responsive.height(24)} source={Images.icEyeShow} />
          </TouchableOpacity>
        </View>

        <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(5) }]}>
          <View style={[Layout.fill]} />
          <TouchableOpacity>
            <Text style={styles.textForgetPassword}>Forget Password</Text>
          </TouchableOpacity>
        </View>

        <View style={Layout.fill} />

      </ScrollView>
      <View style={[Layout.row, styles.floatingActionWrapper, { bottom: Platform.OS === 'ios' ? keyboardHeight : 0 }]}>
        <ButtonNext onPress={() => navigate('2FAVerification')} disabled={false} width={Responsive.height(76)} height={Responsive.height(76)} style={{ marginRight: Responsive.width(24) }} />
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView >
  )
}

export default LoginContainer

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
    marginTop: Responsive.height(15),
    color: '#242332'
  },
  inputTextWrapper: {
    marginBottom: Responsive.height(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputText: {
    borderBottomWidth: 0,
    fontSize: Responsive.font(14)
  },
  textForgetPassword: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(14),
    lineHeight: Responsive.width(21),
    color: '#5D5FEF',
    textDecorationLine: 'underline'
  },
  floatingActionWrapper: {
    marginBottom: Responsive.width(27),
    position: 'absolute',
    right: 0
  }
});

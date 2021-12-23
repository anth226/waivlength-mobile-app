import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const ReportServerContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [channelName, setChannelName] = useState("");
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
      left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
      right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
    />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container]}
        style={[Layout.fill]}>


        <View style={{ height: Responsive.height(5) }} />
        <View style={Layout.fullWidth}>
          <Text style={[Layout.fullWidth, styles.textHeader]}>Report Server</Text>

          <Text style={[Layout.fullWidth, styles.textSubHeader]}>Report this server to Waivlength Trust & Safety. Please select the option that best describes the problem.</Text>
        </View>
        <View style={{ height: Responsive.height(20) }} />
        <TouchableOpacity
          onPress={() => {
            navigate('ReviewReportGroup')
          }}
          style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <View style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <Text style={[Layout.fill, styles.textItemAction]}>Promoting or encouraging spam</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </View>
        </TouchableOpacity>
        <View style={{ height: Responsive.height(18) }} />
        <TouchableOpacity
          onPress={() => {
            navigate('ReviewReportGroup')
          }}
          style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <View style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <Text style={[Layout.fill, styles.textItemAction]}>Abuse or harassment</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </View>
        </TouchableOpacity>
        <View style={{ height: Responsive.height(18) }} />
        <TouchableOpacity
          onPress={() => {
            navigate('ReviewReportGroup')
          }}
          style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <View style={{ height: Responsive.height(90), alignItems: 'center', flexDirection: 'row' }}>
            <Text style={[Layout.fill, styles.textItemAction]}>Explicit, graphic, or unwanted sexual content</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </View>
        </TouchableOpacity>
        <View style={{ height: Responsive.height(18) }} />
        <TouchableOpacity
          onPress={() => {
            navigate('ReviewReportGroup')
          }}
          style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <View style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <Text style={[Layout.fill, styles.textItemAction]}>Something else</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </View>
        </TouchableOpacity>

        <View style={Layout.fill} />

        <TouchableOpacity
          style={[Layout.fullWidth, Common.button.rounded, styles.buttonCancel]}
          onPress={goBack}>
          <Text style={styles.textButtonCancel}>Cancel</Text>
        </TouchableOpacity>
        <View style={{ height: Responsive.height(42) }} />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default ReportServerContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Responsive.width((32))
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(24),
    color: '#242B32',
    textAlign: 'center'
  },
  textSubHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(13),
    color: '#30333E',
  },
  actionWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: Responsive.height(10)
  },
  textItemAction: {
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: Responsive.width(22),
    color: '#30333E',
    paddingHorizontal: Responsive.width(20),
  },
  buttonCancel: {
    height: Responsive.height(46),
    borderRadius: Responsive.height(23),
    backgroundColor: 'transparent',
    borderWidth: Responsive.height(1),
    borderColor: '#B7C2CD',
    height: Responsive.height(46)
  },
  textButtonCancel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(14),
    lineHeight: Responsive.width(22),
    color: '#55606B',
  },
});

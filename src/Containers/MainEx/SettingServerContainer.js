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
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const SettingServerContainer = ({ navigation }) => {
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
      center={<Text style={styles.textTitle}>Server Settings</Text>}
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


        <View style={{ height: Responsive.height(20) }} />
        <View style={Layout.colCenter, { alignSelf: 'center', alignItems: 'center' }}>
          <View >
            <CustomImage
              width={Responsive.height(60)}
              height={Responsive.height(60)}
              source={Images.icLogoBg} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              source={Images.icEdit}
              style={{ position: 'absolute', right: 0, top: 0 }} />
          </View>
          <View style={{ height: Responsive.height(10) }} />
          <Text style={[styles.textSubHeader]}>Waivlength</Text>
        </View>
        <View style={{ height: Responsive.height(20) }} />

        <Text style={[styles.textSubHeader]}>Settings</Text>
        <View style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <TouchableOpacity style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              tintColor={'#44486E'}
              source={Images.icInfo} />
            <Text style={[Layout.fill, styles.textItemAction]}>Overview</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              tintColor={'#44486E'}
              source={Images.icModeration} />
            <Text style={[Layout.fill, styles.textItemAction]}>Moderation</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              tintColor={'#44486E'}
              source={Images.icChannel} />
            <Text style={[Layout.fill, styles.textItemAction]}>Channels</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(20) }} />
        <Text style={[styles.textSubHeader]}>User management</Text>
        <View style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <TouchableOpacity style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              tintColor={'#44486E'}
              source={Images.ic2Person} />
            <Text style={[Layout.fill, styles.textItemAction]}>Members</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              tintColor={'#44486E'}
              source={Images.icRules2} />
            <Text style={[Layout.fill, styles.textItemAction]}>Roles</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              tintColor={'#44486E'}
              source={Images.icBan} />
            <Text style={[Layout.fill, styles.textItemAction]}>Bans</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={{ height: Responsive.height(61), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <CustomImage
              width={Responsive.height(18)}
              height={Responsive.height(18)}
              tintColor={'#44486E'}
              source={Images.icWorld} />
            <Text style={[Layout.fill, styles.textItemAction]}>Primary Language</Text>
            <Text style={[styles.textLanguage]}>English</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default SettingServerContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Responsive.width((32))
  },
  textTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    color: '#272D37',
    textAlign: 'center'
  },
  textSubHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#272D37',
    marginBottom: Responsive.height(12)
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
    paddingHorizontal: Responsive.width(10),
  },
  line: {
    backgroundColor: '#292D36',
    height: Responsive.height(1),
    opacity: 0.15
  },
  textLanguage: {
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Medium',
    lineHeight: Responsive.width(22),
    color: '#787C92',
    paddingHorizontal: Responsive.width(10),
  },
});

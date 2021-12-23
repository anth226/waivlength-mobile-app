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
const SettingNotificationContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [notificationType, setNotificationType] = useState(0);
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
      center={<Text style={styles.textTitle}>Notification Settings</Text>}
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

        <View style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textItemAction]}>Mute Chat Room</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(10) }} />
        <Text style={[styles.textDescription]}>Mute a server prevents unread indicators and notifications from appearing unless you are mentioned.</Text>

        <View style={{ height: Responsive.height(20) }} />
        <Text style={[styles.textSubHeader]}>Server Notification Settings</Text>
        <View style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <TouchableOpacity
            onPress={() => setNotificationType(0)}
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textItemAction]}>All Messages</Text>
            {
              notificationType === 0 && (
                <CustomImage
                  width={Responsive.height(16)}
                  height={Responsive.height(16)}
                  source={Images.icCheck2}
                  tintColor={'#5D5FEF'}
                  style={{ paddingHorizontal: Responsive.width(20) }} />
              )
            }
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => setNotificationType(1)}
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textItemAction]}>Only @mentions</Text>
            {
              notificationType === 1 && (
                <CustomImage
                  width={Responsive.height(16)}
                  height={Responsive.height(16)}
                  source={Images.icCheck2}
                  tintColor={'#5D5FEF'}
                  style={{ paddingHorizontal: Responsive.width(20) }} />
              )
            }
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => setNotificationType(2)}
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textItemAction]}>Nothing</Text>
            {
              notificationType === 2 && (
                <CustomImage
                  width={Responsive.height(16)}
                  height={Responsive.height(16)}
                  source={Images.icCheck2}
                  tintColor={'#5D5FEF'}
                  style={{ paddingHorizontal: Responsive.width(20) }} />
              )
            }
          </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(20) }} />

        <View style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
          <TouchableOpacity style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textItemAction]}>Suppress @everyone and @here</Text>
            <Switch
              renderActiveText={false}
              renderInActiveText={false}
              backgroundInactive='#A2A9B0'
              backgroundActive='#5E60EB'
              circleBorderInactiveColor='#A2A9B0'
              circleBorderActiveColor='#5E60EB'
              circleBorderWidth={2}
              onValueChange={(val) => console.log(val)}
              value={false}
              circleSize={30}
            />
            <View style={{ width: Responsive.width(10) }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textItemAction]}>Suppress All Role @mentions</Text>
            <Switch
              renderActiveText={false}
              renderInActiveText={false}
              backgroundInactive='#A2A9B0'
              backgroundActive='#5E60EB'
              circleBorderInactiveColor='#A2A9B0'
              circleBorderActiveColor='#5E60EB'
              circleBorderWidth={2}
              onValueChange={(val) => console.log(val)}
              value={false}
              circleSize={30}
            />
            <View style={{ width: Responsive.width(10) }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textItemAction]}>Mobile Push Notifications</Text>
            <Switch
              renderActiveText={false}
              renderInActiveText={false}
              backgroundInactive='#A2A9B0'
              backgroundActive='#5E60EB'
              circleBorderInactiveColor='#A2A9B0'
              circleBorderActiveColor='#5E60EB'
              circleBorderWidth={2}
              onValueChange={(val) => console.log(val)}
              value={true}
              circleSize={30}
            />
            <View style={{ width: Responsive.width(10) }} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default SettingNotificationContainer

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
    fontFamily: 'Poppins-Medium',
    lineHeight: Responsive.width(22),
    color: '#30333E',
    paddingHorizontal: Responsive.width(10),
  },
  line: {
    backgroundColor: '#292D36',
    height: Responsive.height(1),
    opacity: 0.15
  },
  textDescription: {
    fontSize: Responsive.font(10),
    fontFamily: 'Poppins-Regular',
    lineHeight: Responsive.width(15),
    color: '#3B454E',
    paddingHorizontal: Responsive.width(10),
  },
});

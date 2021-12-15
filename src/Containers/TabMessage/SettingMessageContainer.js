import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const SettingMessageContainer = ({ navigation }) => {
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
      left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
      right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
      center={<Text style={styles.textTitle}>Direct Messages</Text>}
    />
    <Text style={[Layout.fullWidth, styles.textMention]}>@WaivToken</Text>
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container]}
        style={[Layout.fill]}>

        <Text style={[Layout.fullWidth, styles.textHeaderOne]}>Manage who can message you directly</Text>
        <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(21) }]}>
          <Text style={[Layout.fill, styles.textHeader]}>Allow message requests from everyone</Text>
          <Switch
            style={styles.switch}
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
        </View>

        <Text style={styles.textDescription}>Let people who you don’t follow send you message requests and add you to group conversations. To reply to their messages, you need to accept the request</Text>

        <View style={[Layout.fullWidth, styles.lineItem]} />

        <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(12) }]}>
          <Text style={[Layout.fill, styles.textHeader]}>Show read receipts</Text>
          <Switch
            style={styles.switch}
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
        </View>

        <Text style={styles.textDescription}>Let people you’re messaging know when you have seen their messages. Read receipts are not shown on message requests.</Text>

        <View style={Layout.fill}/>

      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default SettingMessageContainer

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
  textMention: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(12),
    textAlign: 'center',
    marginTop: -Responsive.height(12),
    color: '#787C92'
  },
  textHeaderOne: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(12),
    lineHeight: Responsive.width(18),
    color: '#525563',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Responsive.height(23)
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(14),
    color: '#30333E',
  },
  switch: {
    width: Responsive.width(51),
    height: Responsive.height(30),
  },
  textDescription: {
    fontFamily: 'NotoSans-Regular',
    fontSize: Responsive.font(13),
    lineHeight: Responsive.width(17),
    color: '#8184A3',
    marginTop: Responsive.height(20)
  },
  lineItem: {
    backgroundColor: '#D5DDE5',
    height: Responsive.height(1),
    marginTop: Responsive.height(20)
  },
});

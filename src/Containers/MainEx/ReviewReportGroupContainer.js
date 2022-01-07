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
import EventBus from 'react-native-event-bus'
import { EVENTS } from '@/Constants'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const ReviewReportGroupContainer = ({ navigation }) => {
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
          <Text style={[Layout.fullWidth, styles.textHeader]}>Report Summary</Text>

          <Text style={[Layout.fullWidth, styles.textSubHeader]}>Review your report before submitting.</Text>
        </View>
        <View style={{ height: Responsive.height(20) }} />

        <Text style={styles.textTitle}>Report Category</Text>
        <View style={{ height: Responsive.height(10) }} />
        <View style={[Layout.fullWidth, Layout.rowHCenter]}>
          <View style={{ height: Responsive.height(4), width: Responsive.height(4), borderRadius: Responsive.height(2), backgroundColor: '#5D5FEF' }} />
          <View style={{ width: Responsive.width(10) }} />
          <Text style={styles.textItem}>Promoting or encouraging spam</Text>
        </View>



        <View style={Layout.fill} />

        <Text style={styles.textDecsription}>
          By submitting this report you confirm that it is truthful and made in good faith. Please follow your
          <Text style={styles.textDecsriptionHeightLight}> Community Guidelines </Text>
          and fo not submit failse or duplicate reports.</Text>
        <View style={{ height: Responsive.height(20) }} />
        <View style={[Layout.rowHCenter, { height: Responsive.height(46) }]}>
          <View style={{ width: Responsive.width(50) }} />
          <TouchableOpacity
            style={[Layout.fill, Common.button.rounded, styles.buttonSubmit]}
            onPress={() => {
              navigate('GroupConversation')
              EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_OPTION_DIALOG, {})
            }}>
            <Text style={styles.textButtonSubmit}>Submit Report</Text>
          </TouchableOpacity>
          <View style={{ width: Responsive.width(50) }} />
        </View>
        <View style={{ height: Responsive.height(42) }} />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default ReviewReportGroupContainer

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
    textAlign: 'center'
  },
  textTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#242A31',
    textTransform: 'uppercase',
  },
  textItem: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(12),
    color: '#3B454E',
  },
  textDecsription: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(12),
    color: '#242A31',
    textAlign: 'center'
  },
  textDecsriptionHeightLight: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(12),
    color: '#5D5FEF',
    textAlign: 'center'
  },
  buttonSubmit: {
    height: Responsive.height(46),
    borderRadius: Responsive.height(23),
    backgroundColor: 'transparent',
    backgroundColor: '#DA1E28'
  },
  textButtonSubmit: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(14),
    lineHeight: Responsive.width(22),
    color: '#FFFFFF',
  },
});

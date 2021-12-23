import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, CustomImage, Avatar, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'
import _ from 'lodash'
import EventBus from 'react-native-event-bus'
import { EVENTS } from '@/Constants'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CreateNewEventStep3Container = ({ navigation }) => {
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
      left={
        <BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />
      }
      center={
        <Text style={styles.textTitle}>Step 3 of 3</Text>
      }
      right={
        <CustomImage width={28} height={28} source={Images.icClose2} onPress={goBack} />
      }
    />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >


      <View style={{ height: Responsive.height(20) }} />
      <Text style={[Layout.fullWidth, styles.textHeader]}>Here’s a preview of your event.</Text>
      <View style={{ height: Responsive.height(5) }} />
      <Text style={[Layout.fullWidth, styles.textSubHeader]}>This event will auto start when it’s time.</Text>
      <View style={{ height: Responsive.height(30) }} />





      <TouchableOpacity disabled={true} style={{ paddingHorizontal: Responsive.width(20) }}>
        <View style={[Layout.fullWidth, Layout.column, Layout.alignItemsCenter, styles.itemWapper]}>
          <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(18) }]}>
            <CustomImage width={Responsive.height(22)} height={Responsive.height(22)} tintColor={'#242A31'} source={Images.icCalendar} />
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textTime]}>Today at 3:00 PM</Text>
            <Avatar
              isShowDot={false}
              source={Images.onBoarding3}
              imageWrapperStyle={{ height: Responsive.height(26), width: Responsive.height(26), borderRadius: Responsive.height(13) }}
              imageStyle={{ height: Responsive.height(26), width: Responsive.height(26), borderRadius: Responsive.height(13) }}
              url={'https://picsum.photos/200/200'}
              textStyle={{ fontSize: Responsive.font(13), marginTop: Responsive.height(2) }}
              firstName={'Linnie'}
              lastName={'Summers'} />
            <View style={{ width: Responsive.width(15) }} />
            <CustomImage width={Responsive.height(16)} height={Responsive.height(16)} source={Images.ic2Person} />
            <View style={{ width: Responsive.width(4) }} />
            <Text style={styles.textTime}>1</Text>
          </View>
          <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(13) }]}>
            <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus nunc auctor.</Text>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { marginTop: Responsive.height(20) }]}>
              <CustomImage width={Responsive.height(22)} height={Responsive.height(22)} tintColor={'#242A31'} source={Images.icLocation} />
              <View style={{ width: Responsive.width(10) }} />
              <Text style={[Layout.fill, styles.textTime]}>R163, Kells Co. Meath</Text>
            </View>

          </View>

        </View>

      </TouchableOpacity >

      <View style={Layout.fill} />

      <View style={{ paddingHorizontal: Responsive.width((24)) }}>
        <TouchableOpacity
          onPress={() => {
            navigate('GroupConversation')
            EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_EVENT_DIALOG, {})
          }}
          style={[Layout.fullWidth, Common.button.rounded, styles.buttonNext]}
        >
          <Text style={styles.textButtonNext}>Create Event</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: Responsive.height(40) }} />

    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default CreateNewEventStep3Container

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
    fontSize: Responsive.font(16),
    color: '#242A31',
    textAlign: 'center',
  },
  textSubHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(14),
    color: '#242A31',
    textAlign: 'center',
  },
  buttonNext: {
    height: Responsive.height(52),
    borderRadius: Responsive.height(14),
    backgroundColor: '#5D5FEF',
  },
  textButtonNext: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    color: '#FFFFFF',
  },
  itemWapper: {
    backgroundColor: '#F0F3F8',
    height: Responsive.height(171),
    borderRadius: Responsive.height(24)
  },
  textTime: {
    color: '#242A31',
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Medium',
    textAlignVertical: 'center',
  },
  textDescription: {
    color: '#3B454E',
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
  },
});

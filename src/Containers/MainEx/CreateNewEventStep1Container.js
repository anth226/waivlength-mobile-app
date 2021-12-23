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
const CreateNewEventStep1Container = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [channelType, setChannelType] = useState("voice");
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
        <View style={{ width: Responsive.height(36), height: Responsive.height(36) }} />
      }
      center={
        <Text style={styles.textTitle}>Step 1 of 3</Text>
      }
      right={
        <CustomImage width={28} height={28} source={Images.icClose2} onPress={goBack} />
      }
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
        <Text style={[Layout.fullWidth, styles.textHeader]}>What is your event?</Text>
        <View style={{ height: Responsive.height(5) }} />
        <Text style={[Layout.fullWidth, styles.textSubHeader]}>So no one gets lost on where to go.</Text>
        <View style={{ height: Responsive.height(20) }} />
        <TouchableOpacity
          onPress={() => setChannelType('voice')}
          style={[Layout.fullWidth, Layout.rowHCenter, { paddingVertical: Responsive.height(15) }]}>

          <CustomImage
            width={Responsive.height(20)}
            height={Responsive.height(20)}
            source={Images.icVolume} />
          <View style={{ width: Responsive.width(15) }} />
          <View style={[Layout.fill, Layout.column]}>
            <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>Voice Channel</Text>
            <Text style={[Layout.fullWidth, styles.textSubHeaderLabel]}>Hange out with voice, video, screenshare and Go Live.</Text>
          </View>
          <View style={{ width: Responsive.width(5) }} />
          <RadioButton
            selected={channelType === 'voice'}
            size={22}
            onPress={() => setChannelType('voice')}
            text={``}
            isHtml={false}
            textStyle={styles.textRadioButton}
            style={{}}
          />

        </TouchableOpacity>
        <View style={[Layout.fullWidth, styles.line]} />

        <TouchableOpacity
          onPress={() => setChannelType('other')}
          style={[Layout.fullWidth, Layout.rowHCenter, { paddingVertical: Responsive.height(15) }]}>

          <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icLocation2} />
          <View style={{ width: Responsive.width(15) }} />
          <View style={[Layout.fill, Layout.column]}>
            <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>Somewhere Else</Text>
            <Text style={[Layout.fullWidth, styles.textSubHeaderLabel]}>Text channel, external link or in-person location.</Text>
          </View>
          <View style={{ width: Responsive.width(5) }} />
          <RadioButton
            selected={channelType === 'other'}
            size={22}
            onPress={() => setChannelType('other')}
            text={``}
            isHtml={false}
            textStyle={styles.textRadioButton}
            style={{}}
          />

        </TouchableOpacity>


        <View style={{ height: Responsive.height(20) }} />
        <Text style={styles.textDescription}>
          You can give other people permission to create events in
          <Text style={styles.textDescriptionHeightLight}> Server Settings &gt; Roles.</Text>
        </Text>

        <View style={Layout.fill} />


        <TouchableOpacity
          onPress={() => {
            if (channelType === 'voice') {
              EventBus.getInstance().fireEvent(EVENTS.OPEN_CREATE_AUDIO_ROOM_DIALOG, {})
            } else {
              navigate('CreateNewEventStep2')
            }
          }}
          style={[Layout.fullWidth, Common.button.rounded, styles.buttonNext]}
        >
          <Text style={styles.textButtonNext}>Next</Text>
        </TouchableOpacity>
        <View style={{ height: Responsive.height(40) }} />

      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default CreateNewEventStep1Container

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
  line: {
    height: Responsive.height(1),
    backgroundColor: '#BFCBD6'
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
  textHeaderLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    color: '#242A31',
  },
  switch: {
    width: Responsive.width(51),
    height: Responsive.height(30),
  },
  textSubHeaderLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(12),
    color: '#242A31',
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(14),
    color: '#242A31',
    paddingHorizontal: Responsive.width(10)
  },
  textDescriptionHeightLight: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(14),
    color: '#5D5FEF',
    paddingHorizontal: Responsive.width(10)
  },
  buttonNext: {
    height: Responsive.height(52),
    borderRadius: Responsive.height(14),
    backgroundColor: '#5D5FEF'
  },
  textButtonNext: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    color: '#FFFFFF',
  }
});

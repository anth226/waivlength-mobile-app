import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import Slider from '@react-native-community/slider';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const SettingOverviewContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [channelName, setChannelName] = useState("Waivlength");
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
      center={<Text style={styles.textTitle}>Overview</Text>}
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
        <Text style={[Layout.fullWidth, styles.textHeader]}>Server Name</Text>
        <View style={{ height: Responsive.height(5) }} />
        <View style={Layout.fullWidth, styles.searchWrapper}>
          <TextInput
            onChangeText={text => setChannelName(text)}
            editable={true}
            value={channelName}
            editable={false}
            placeholder={'Enter channel name'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput, styles.inputText]}
          />
        </View>

        <View style={{ height: Responsive.height(20) }} />
        <Text style={[Layout.fullWidth, styles.textHeader]}>System message settings</Text>




        <View style={[Layout.fullWidth, Layout.column, { marginTop: Responsive.height(5), backgroundColor: '#ffffff', alignItems: 'center', borderRadius: Responsive.height(12), paddingHorizontal: Responsive.width(10) }]}>
          <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', height: Responsive.height(64) }]}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Send a random welcome message when someone joins this server.</Text>
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
          <View style={[Layout.fullWidth, styles.line]} />
          <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', height: Responsive.height(64) }]}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Prompt members to reply to welcome messages with a sticker.</Text>
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

          <View style={[Layout.fullWidth, styles.line]} />
          <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', height: Responsive.height(64) }]}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Send a message when someone boosts this server.</Text>
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

          <View style={[Layout.fullWidth, styles.line]} />
          <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', height: Responsive.height(52) }]}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Send helpful tips for server setup.</Text>
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

        </View>
        <View style={{ height: Responsive.height(5) }} />
        <Text style={styles.textDescription}>This is the channel we send system event messages to. These can be turned off at any time.</Text>

        <View style={{ height: Responsive.height(15) }} />
        <Text style={[Layout.fullWidth, styles.textHeader]}>Default notification settings</Text>
        <View style={{ height: Responsive.height(5) }} />
        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textHeader]}>All messages</Text>
            <View style={{ width: Responsive.width(5) }} />
            <RadioButton
              selected={true}
              size={22}
              onPress={() => { }}
              text={``}
              isHtml={false}
              textStyle={styles.textRadioButton}
              style={{}}
            />
          </TouchableOpacity>
          <View style={[Layout.fullWidth, styles.line]} />
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(10) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Only @mentions</Text>
            <View style={{ width: Responsive.width(5) }} />
            <RadioButton
              selected={false}
              size={22}
              onPress={() => { }}
              text={``}
              isHtml={false}
              textStyle={styles.textRadioButton}
              style={{}}
            />
          </TouchableOpacity>
        </View>

        <View style={{ height: Responsive.height(10) }} />
        <Text style={styles.textDescription}>This will determine whether members who have not explicitly set their notification settings receive a notification for every message sent in this server or not. We highly recommend setting this to only @mentions for a public Discord.</Text>

        <View style={{ height: Responsive.height(20) }} />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default SettingOverviewContainer

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
    fontSize: Responsive.font(14),
    color: '#30333E',
  },
  searchWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: Responsive.height(12),
    borderColor: '#E1E2EF',
    borderWidth: Responsive.height(1),
    alignItems: 'center',
    paddingHorizontal: Responsive.width(10)
  },
  inputText: {
    borderBottomWidth: 0,
    fontSize: Responsive.font(14),
    height: Responsive.height(52),
    fontFamily: 'Poppins-SemiBold',
  },
  switch: {
    width: Responsive.width(51),
    height: Responsive.height(30),
  },
  textSubHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(12),
    color: '#30333E',
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(10),
    color: '#242A31',
    paddingHorizontal: Responsive.width(10)
  }
});

import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import Slider from '@react-native-community/slider';
import { ExampleContainer } from '@/Containers'

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon } from '@/Components'
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
    <GradientBackgroundAngle style={{ position: 'absolute' }} />
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

        <View style={{ height: Responsive.height(23) }} />
        <Text style={[Layout.fullWidth, styles.textHeader, {marginLeft: Responsive.width(8)}]}>Server Name</Text>
        <View style={{ height: Responsive.height(10) }} />
        <View style={Layout.fullWidth, styles.searchWrapper}>
          <TextInput
            onChangeText={text => setChannelName(text)}
            editable={true}
            value={channelName}
            placeholder={'Enter channel name'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput, styles.inputText]}
          />
          {
            _.isEmpty(channelName) ? (
              null
            ) : (
              <CustomImage width={Responsive.height(25)} height={Responsive.height(25)} source={Images.icClose} onPress={() => setChannelName('')} />
            )
          }
        </View>

        <View style={{ height: Responsive.height(15) }} />
        <Text style={[Layout.fullWidth, styles.textHeader, {marginLeft: Responsive.width(8)}]}>System message settings</Text>


        <View style={[Layout.fullWidth, Layout.column, { marginTop: Responsive.height(5), backgroundColor: 'rgba(249,250,252,1.0)', alignItems: 'center', borderRadius: Responsive.height(16) }]}>
          <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', height: Responsive.height(78) }]}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textSwitch]}>Send a random welcome message when someone joins this server.</Text>
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
            <View style={{ width: Responsive.width(16) }} />
          </View>
        </View>

        <View style={{ height: Responsive.height(15) }} />
        <Text style={[Layout.fullWidth, styles.textHeader, {marginLeft: Responsive.width(8)}]}>Default notification settings</Text>
        <View style={{ height: Responsive.height(5) }} />
        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column, {paddingHorizontal: 0, borderRadius: Responsive.height(16)}]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(16) }} />
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
            <View style={{ width: Responsive.width(8) }} />
          </TouchableOpacity>
          <View style={[Layout.fullWidth, styles.line]} />
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(16) }} />
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
            <View style={{ width: Responsive.width(8) }} />
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
    paddingHorizontal: Responsive.width(16)
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
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#272D37',
  },
  searchWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(249,250,252,1.0)',
    borderRadius: Responsive.height(12),
    alignItems: 'center',
    paddingHorizontal: Responsive.width(16)
  },
  inputText: {
    borderBottomWidth: 0,
    fontSize: Responsive.font(14),
    height: Responsive.height(52),
    fontFamily: 'Poppins-Regular',
    color: '#242A31',
  },
  textSwitch: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#242A31',
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

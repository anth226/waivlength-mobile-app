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

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const SettingModerationContainer = ({ navigation }) => {
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
      center={<Text style={styles.textTitle}>Moderation</Text>}
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

        <Text style={[Layout.fullWidth, styles.textSubHeader]}>Explicit media content filter</Text>


        <View style={{ height: Responsive.height(5) }} />
        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={styles.viewTouchItem}>
            <View style={[Layout.fill, Layout.column]}>
              <Text style={[styles.textHeader]}>Don't scan any media content</Text>
              <Text style={[styles.textDescription, styles.textSub]}>My friends are nice most of the time.</Text>
            </View>
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
            style={styles.viewTouchItem}>
            <View style={[Layout.fill, Layout.column]}>
              <Text style={[styles.textHeader]}>Scan media content from members without a role</Text>
              <Text style={[styles.textDescription, styles.textSub]}>Recommended option for servers that use roles for trusted membership.</Text>
            </View>
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
          <View style={[Layout.fullWidth, styles.line]} />
          <TouchableOpacity
            style={styles.viewTouchItem}>
            <View style={[Layout.fill, Layout.column]}>
              <Text style={[styles.textHeader]}>Scan media content from all members</Text>
              <Text style={[styles.textDescription, styles.textSub]}>Recommended option for when you want that squeaky clean shine.</Text>
            </View>
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
        <Text style={[styles.textDescription, {marginHorizontal: Responsive.width(33)}]}>Automatically scan and delete media sent in this server that contains explicit content. Please choose how broadly the filter will apply to members in your server. We recommend setting a filter for a public Waivlength chat room.</Text>

        <View style={{ height: Responsive.height(20) }} />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default SettingModerationContainer

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
    backgroundColor: 'rgba(217,220,222,1.0)'
  },
  textHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#242A31',
  },
  textSub: { 
    fontSize: Responsive.font(12),  
    color: '#787C92', 
    fontFamily: 'Poppins-Medium' 
  },
  textSubHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#272D37',
    marginLeft: Responsive.width(8),
  },
  searchWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(249, 250, 252, 1.0)',
    borderRadius: Responsive.height(16),
    alignItems: 'center',
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
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(10),
    color: '#242A31',
  },
  viewTouchItem: {
    minHeight: Responsive.height(59),
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: Responsive.width(16),
    paddingRight: Responsive.width(8),
    paddingVertical: Responsive.height(13)
  }
});

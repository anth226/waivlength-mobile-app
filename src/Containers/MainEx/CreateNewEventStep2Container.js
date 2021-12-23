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
const CreateNewEventStep2Container = ({ navigation }) => {
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
        <Text style={styles.textTitle}>Step 2 of 3</Text>
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
        <Text style={[Layout.fullWidth, styles.textHeader]}>What’s your event about?</Text>
        <View style={{ height: Responsive.height(5) }} />
        <Text style={[Layout.fullWidth, styles.textSubHeader]}>So no one gets lost on where to go.</Text>
        <View style={{ height: Responsive.height(20) }} />
        <View style={[Layout.fullWidth, Layout.colHCenter, { paddingVertical: Responsive.height(15) }]}>

          <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>Event Topic</Text>
          <TextInput
            onChangeText={text => { }}
            editable={true}
            placeholder={'What’s your event?'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput, styles.inputText]}
          />
        </View>

        <View
          style={[Layout.fullWidth, Layout.rowHCenter, { paddingVertical: Responsive.height(15) }]}>
          <View style={[Layout.colHCenter, { flex: 0.6 }]}>
            <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>Start Date</Text>
            <TextInput
              onChangeText={text => { }}
              editable={true}
              placeholder={'Nov 21st 2021'}
              placeholderTextColor={'#7C8093'}
              selectTextOnFocus
              style={[Layout.fill, Common.textInput, styles.inputText]}
            />
          </View>
          <View style={{ width: Responsive.width(20) }} />
          <View style={[Layout.colHCenter, { flex: 0.4 }]}>
            <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>Start Time</Text>
            <TextInput
              onChangeText={text => { }}
              editable={true}
              placeholder={'11:00 PM'}
              placeholderTextColor={'#7C8093'}
              selectTextOnFocus
              style={[Layout.fill, Common.textInput, styles.inputText]}
            />
          </View>
        </View>

        <View
          style={[Layout.fullWidth, Layout.rowHCenter, { paddingVertical: Responsive.height(15) }]}>
          <View style={[Layout.colHCenter, { flex: 0.6 }]}>
            <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>End Date</Text>
            <TextInput
              onChangeText={text => { }}
              editable={true}
              placeholder={'Nov 21st 2021'}
              placeholderTextColor={'#7C8093'}
              selectTextOnFocus
              style={[Layout.fill, Common.textInput, styles.inputText]}
            />
          </View>
          <View style={{ width: Responsive.width(20) }} />
          <View style={[Layout.colHCenter, { flex: 0.4 }]}>
            <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>End Time</Text>
            <TextInput
              onChangeText={text => { }}
              editable={true}
              placeholder={'12:00 AM'}
              placeholderTextColor={'#7C8093'}
              selectTextOnFocus
              style={[Layout.fill, Common.textInput, styles.inputText]}
            />
          </View>
        </View>

        <View style={[Layout.fullWidth, Layout.colHCenter, { paddingVertical: Responsive.height(15) }]}>

          <Text style={[Layout.fullWidth, styles.textHeaderLabel]}>Description</Text>
          <View style={{ height: Responsive.height(12) }} />
          <TextInput
            onChangeText={text => { }}
            editable={true}
            placeholder={'Tell people a little more about your event. Markdown, new lines and links are supported.'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            multiline
            style={[Layout.fill, Common.textInput, styles.inputTextMultiline]}
          />
        </View>

        <View style={Layout.fill} />


        <TouchableOpacity
          onPress={() => {
            navigate('CreateNewEventStep3')
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

export default CreateNewEventStep2Container

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
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: '#BFCBD6',
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Regular'
  },
  inputTextMultiline: {
    height: Responsive.height(155),
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0,
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'top',
    borderRadius: Responsive.height(12),
    paddingVertical: Responsive.height(15),
    paddingHorizontal: Responsive.width(15)
  },
  textHeaderLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(14),
    color: '#242A31',
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

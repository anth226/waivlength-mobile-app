import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, CustomImage, RadioButton } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CreateNewChannelContainer = ({ navigation }) => {
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
      left={
        <TouchableOpacity style={styles.buttonTextActionBar} onPress={goBack} >
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      }
      center={<Text style={styles.textTitle}>Create Chancel</Text>}
      right={
        <TouchableOpacity style={styles.buttonTextActionBar} onPress={goBack} >
          <Text style={styles.textCreate}>Create</Text>
        </TouchableOpacity>
      }
    />
    <View style={styles.line} />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container]}
        style={[Layout.fill]}>

        <View style={{ height: Responsive.height(20) }} />
        <Text style={[Layout.fullWidth, styles.textHeader]}>Channel Name</Text>
        <View style={{ height: Responsive.height(5) }} />
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

        <View style={{ height: Responsive.height(20) }} />
        <Text style={[Layout.fullWidth, styles.textHeader]}>Channel Type</Text>
        <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingVertical: Responsive.height(15) }]}>

          <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icChatRoom} />
          <View style={{ width: Responsive.width(15) }} />
          <View style={[Layout.fill, Layout.column]}>
            <Text style={[Layout.fullWidth, styles.textHeader]}>Text Channel</Text>
            <Text style={[Layout.fullWidth, styles.textSubHeader]}>Post images, GIFs, stickers, opinions and puns</Text>
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

        </View>
        <View style={[Layout.fullWidth, styles.line]} />

        <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingVertical: Responsive.height(15) }]}>

          <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icVolume} />
          <View style={{ width: Responsive.width(15) }} />
          <View style={[Layout.fill, Layout.column]}>
            <Text style={[Layout.fullWidth, styles.textHeader]}>Voice Channel</Text>
            <Text style={[Layout.fullWidth, styles.textSubHeader]}>Connect to live audio for group conversations</Text>
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

        </View>
        <View style={[Layout.fullWidth, styles.line]} />


        <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingVertical: Responsive.height(15) }]}>

          <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icAnnouncement} />
          <View style={{ width: Responsive.width(15) }} />
          <View style={[Layout.fill, Layout.column]}>
            <Text style={[Layout.fullWidth, styles.textHeader]}>Announcement Channel</Text>
            <Text style={[Layout.fullWidth, styles.textSubHeader]}>A text channel that can post to servers following it</Text>
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

        </View>






        <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(15), backgroundColor: '#ffffff', height: Responsive.height(52), alignItems: 'center', borderRadius: Responsive.height(12), paddingHorizontal: Responsive.width(10) }]}>
          <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} tintColor={'#44486E'} source={Images.icLock} />
          <View style={{ width: Responsive.width(5) }} />
          <Text style={[Layout.fill, styles.textHeader]}>Private Channel</Text>
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
        <View style={{ height: Responsive.height(10) }} />
        <Text style={styles.textDescription}>By making a channel private, only members and roles will be able to view this channel.</Text>




      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default CreateNewChannelContainer

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
  buttonTextActionBar: {
    height: Responsive.height(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCancel: {
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Medium',
    color: '#272D37',
  },
  textCreate: {
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Medium',
    color: '#5D5FEF',
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
    height: Responsive.height(52),
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

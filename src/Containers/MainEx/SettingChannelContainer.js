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
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'
import _ from 'lodash'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const SettingChannelContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [channelName, setChannelName] = useState("Chat Room");
  const { t } = useTranslation()
  const { width } = useWindowDimensions();

  const onOpenAddMemberRole = () => {
    EventBus.getInstance().fireEvent(EVENTS.OPEN_ADD_MEMBER_ROLE_DIALOG, {})
};

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
      center={<Text style={styles.textTitle}>Channel Settings</Text>}
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
        <Text style={[Layout.fullWidth, styles.textHeader]}>Channel Name</Text>
        <View style={{ height: Responsive.height(10) }} />
        <View style={[Layout.fullWidth, styles.searchWrapper, {paddingLeft: Responsive.width(16), paddingRight: Responsive.width(14)}]}>
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
        <Text style={[Layout.fullWidth, styles.textHeader]}>Description</Text>
        <View style={{ height: Responsive.height(10) }} />
        <View style={Layout.fullWidth}>
          <TextInput
            onChangeText={text => { }}
            editable={true}
            placeholder={''}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            multiline
            style={[Layout.fullWidth, Common.textInput, styles.inputTextMultiline]}
          />
          <Text style={[styles.textDescription, { position: 'absolute', right: Responsive.width(5), bottom: Responsive.height(5), color: '#ADAEC4' }]}>1024</Text>
        </View>

        <View style={{ height: Responsive.height(15) }} />

        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }} onPress={onOpenAddMemberRole}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Add Members or Roles</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
        </View>

        <View style={{ height: Responsive.height(15) }} />

        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}
            onPress={()=> navigate('ChangeCategory')}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Category</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
        </View>

        <View style={{ height: Responsive.height(15) }} />

        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }} onPress={()=> navigate('ChannelPermission')}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Channel Permission</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(5) }} />
        <Text style={styles.textDescription}>Change privacy settings and customize how members can interact with this channel.</Text>

        <View style={{ height: Responsive.height(20) }} />
        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}
            onPress={()=> navigate('ChannelNotificationSettings')}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Notification Settings</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
          <View style={[Layout.fullWidth, styles.line]} />
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}
            onPress={()=> navigate('PinnedMessage')}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>Pinned Messages</Text>
            <CustomImage
              width={Responsive.height(12)}
              height={Responsive.height(12)}
              source={Images.icArrowDown2}
              tintColor={'#8F95A6'}
              style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
          </TouchableOpacity>
        </View>






        <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(15), backgroundColor: 'rgba(252, 252, 254, 1.0)', height: Responsive.height(52), alignItems: 'center', borderRadius: Responsive.height(12) }]}>
          <View style={{ width: Responsive.width(16) }} />
          <Text style={[Layout.fill, styles.textHeader]}>Announcement Channel</Text>
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
          <View style={{ width: Responsive.width(14) }} />
        </View>

        <View style={{ height: Responsive.height(5) }} />
        <Text style={styles.textDescription}>Post messages that reach servers outside your own. Users can opt into “Following” this channel, so select posts you “Publish” from here will appear directly in their own servers. Announcement channels will not receive messages from other Announcement channels.</Text>

        <View style={{ height: Responsive.height(13) }} />

        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column, {paddingTop: Responsive.height(15)}]}>
          <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(16) }]}>
            <Text style={[styles.textHeader]}>Slowmode Cooldown</Text>
            <View style={Layout.fill} />
            <Text style={[styles.textSlowmodeOff]}>Slowmode is off.</Text>
          </View>
          <View style={{ height: Responsive.height(15) }} />
          <View style={[Layout.fullWidth, Layout.row, {marginBottom: Responsive.height(10)}]}>
            <Slider
              style={[Layout.fullWidth, { height: Responsive.height(21) }]}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#5D5FEF"
              maximumTrackTintColor="#E1E2EF"
            />
          </View>
        </View>

        <View style={{ height: Responsive.height(5) }} />
        <Text style={styles.textDescription}>Members will be restricted to sending one message and creating one thread per this interval, unless they have Manage Channel or Manage Message permissions.</Text>

        <View style={{ height: Responsive.height(20) }} />

        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>1 Hour</Text>
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
            <View style={{ width: Responsive.width(5) }} />
          </TouchableOpacity>
          <View style={[Layout.fullWidth, styles.line]} />
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>24 Hours</Text>
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
            <View style={{ width: Responsive.width(5) }} />
          </TouchableOpacity>
          <View style={[Layout.fullWidth, styles.line]} />
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>3 Days</Text>
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
            <View style={{ width: Responsive.width(5) }} />
          </TouchableOpacity>
          <View style={[Layout.fullWidth, styles.line]} />
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: Responsive.width(16) }} />
            <Text style={[Layout.fill, styles.textHeader]}>1 Week</Text>
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
            <View style={{ width: Responsive.width(5) }} />
          </TouchableOpacity>
        </View>

        <View style={{ height: Responsive.height(10) }} />
        <Text style={styles.textDescription}>New threads will be set to archive after specified duration of inactivity.</Text>

        <View style={{ height: Responsive.height(15) }} />
        <View style={[Layout.fullWidth, styles.searchWrapper, Layout.column]}>
          <TouchableOpacity
            style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={[styles.textHeader, { color: '#DA1E28' }]}>Delete Channel</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(20) }} />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default SettingChannelContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Responsive.width((24))
  },
  textTitle: {
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-SemiBold',
    color: '#272D37',
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
    backgroundColor: 'rgba(220, 221, 224, 1.0)',
  },
  textHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#242A31',
  },
  textSlowmodeOff: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(12),
    color: '#242A31',
  },
  searchWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(252, 252, 254, 1.0)',
    borderRadius: Responsive.height(12),
    borderColor: '#E1E2EF',
    borderWidth: Responsive.height(1),
    alignItems: 'center',
  },
  inputText: {
    borderBottomWidth: 0,
    fontSize: Responsive.font(14),
    height: Responsive.height(52)
  },
  inputTextMultiline: {
    height: Responsive.height(155),
    backgroundColor: 'rgba(252, 252, 254, 1.0)',
    borderBottomWidth: 0,
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'top',
    borderRadius: Responsive.height(12),
    paddingVertical: Responsive.height(15),
    paddingHorizontal: Responsive.width(15)
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

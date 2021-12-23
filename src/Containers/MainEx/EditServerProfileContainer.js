import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, CustomImage, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const EditServerProfileContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [nickname, setNickname] = useState("ChiefWaiver");
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
      center={<Text style={styles.textTitle}>Edit Server Profile</Text>}
    />
    <Text style={[Layout.fullWidth, styles.textChatRoom]}>Chat Room</Text>
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container]}
        style={[Layout.fill]}>

        <View style={{ height: Responsive.height(20) }} />
        <Text style={[Layout.fullWidth, styles.textSubHeader]}>You can change how others see you inside this server by setting a server nickname and avatar.</Text>
        <View style={{ height: Responsive.height(20) }} />
        <Text style={[Layout.fullWidth, styles.textHeader]}>Nickname</Text>
        <View style={{ height: Responsive.height(5) }} />
        <View style={Layout.fullWidth, styles.searchWrapper}>
          <TextInput
            onChangeText={text => setNickname(text)}
            editable={true}
            value={nickname}
            placeholder={'Enter nickname'}
            placeholderTextColor={'#7C8093'}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput, styles.inputText]}
          />
          {
            _.isEmpty(nickname) ? (
              null
            ) : (
              <CustomImage width={Responsive.height(25)} height={Responsive.height(25)} source={Images.icClose} onPress={() => setNickname('')} />
            )
          }
        </View>

        <View style={{ height: Responsive.height(40) }} />
        <Text style={[Layout.fullWidth, styles.textHeader]}>Server Avatar</Text>
        <View style={{ height: Responsive.height(12) }} />
        <View>
          <CustomImage height={Responsive.height(84)} width={Responsive.height(84)} source={{ uri: 'https://picsum.photos/200/200' }} styleImage={{ borderRadius: Responsive.height(42)}}/>
          <CustomImage height={Responsive.height(24)} width={Responsive.height(24)} source={Images.icEdit2} style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => {}}/>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default EditServerProfileContainer

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
  textChatRoom: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(12),
    textAlign: 'center',
    marginTop: -Responsive.height(12),
    color: '#787C92'
  },
  line: {
    height: Responsive.height(1),
    backgroundColor: '#BFCBD6'
  },
  textHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(14),
    color: '#000000',
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
    fontSize: Responsive.font(14),
    color: '#242A31',
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(10),
    color: '#242A31',
    paddingHorizontal: Responsive.width(10)
  }
});

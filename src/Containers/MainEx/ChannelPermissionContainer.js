import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const ChannelPermissionContainer = ({ navigation }) => {
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
    <GradientBackgroundAngle style={{ position: 'absolute' }} />
    <ActionBar
      left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
      right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
      center={<Text style={styles.textTitle}>Permissions</Text>}
    />
    <View style={{height: Responsive.height(23)}} />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container]}
        style={[Layout.fill]}>

        <View style={[Layout.fullWidth, Layout.row, { backgroundColor: 'rgba(245, 246, 249, 1.0)', height: Responsive.height(52), alignItems: 'center', borderRadius: Responsive.height(12), paddingHorizontal: Responsive.width(10) }]}>
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
        <View style={{ height: Responsive.height(5) }} />
        <Text style={styles.textDescription}>By making a channel private, only select members and roles will be able to view this channel.</Text>




      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default ChannelPermissionContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Responsive.width((16))
  },
  textTitle: {
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-SemiBold',
    color: '#272D37',
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(14),
    color: '#30333E',
  },
  switch: {
    width: Responsive.width(51),
    height: Responsive.height(30),
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(10),
    color: '#3B454E',
    paddingHorizontal: Responsive.width(33)
  }
});

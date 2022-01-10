import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';

import { ActionBar, GradientBackgroundAngle, CustomImage, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CreateNewCategoryContainer = ({ navigation }) => {
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
      center={<Text style={styles.textTitle}>Create Category</Text>}
      right={
        <TouchableOpacity style={styles.buttonTextActionBar} onPress={goBack} >
          <Text style={styles.textCreate}>Create</Text>
        </TouchableOpacity>
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
        <Text style={[Layout.fullWidth, styles.textHeader, {marginHorizontal: Responsive.width(8)}]}>Category Name</Text>
        <View style={{ height: Responsive.height(5) }} />
        <View style={Layout.fullWidth, styles.searchWrapper}>
          <TextInput
            onChangeText={text => setChannelName(text)}
            editable={true}
            value={channelName}
            placeholder={'Enter category name'}
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

  



        <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(15), backgroundColor: '#ffffff', height: Responsive.height(52), alignItems: 'center', borderRadius: Responsive.height(12), paddingHorizontal: Responsive.width(10) }]}>
          <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} tintColor={'#44486E'} source={Images.icLock} />
          <View style={{ width: Responsive.width(5) }} />
          <Text style={[Layout.fill, styles.textHeader]}>Private Category</Text>
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
        <Text style={styles.textDescription}>By making a category private, only select members and roles will be able to view this category. Synced channels in this category will automatically match to this settings.</Text>




      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default CreateNewCategoryContainer

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
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-Medium',
    color: '#5D5FEF',
  },
  line: {
    height: Responsive.height(1),
    backgroundColor: '#BFCBD6'
  },
  textHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#242A31',
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
    paddingHorizontal: Responsive.width(16)
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

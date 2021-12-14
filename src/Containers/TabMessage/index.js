import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleContainer, MessageContainer } from '@/Containers'

import { CustomImage, ActionBar, ButtonNext, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const Tab = createMaterialTopTabNavigator();


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const TabMessageContainer = ({ goBack }) => {
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
      left={<CustomImage width={Responsive.height(40)} height={Responsive.height(40)} styleImage={{ borderRadius: Responsive.height(40) }} source={{ uri: 'https://picsum.photos/200/200' }} />}
      right={<CustomImage width={Responsive.height(40)} height={Responsive.height(40)} source={Images.icSetting} />}
    />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
        style={[Layout.fill]}>

        <Tab.Navigator
          style={[Layout.fullWidth, { marginTop: Responsive.height(5) }]}
          screenOptions={{
            tabBarActiveTintColor: '#5D5FEF',
            tabBarInactiveTintColor: '#272D37',
            tabBarStyle: styles.tabBar,
            tabBarIndicatorStyle: styles.tabIndicator,
            tabBarLabelStyle: styles.textTabLabel,
          }}
        >
          <Tab.Screen name="Message" component={MessageContainer} options={{ tabBarLabel: 'Messages' }} />
          <Tab.Screen name="Audio" component={ExampleContainer} options={{ tabBarLabel: 'Audio Rooms' }} />
        </Tab.Navigator>


        <View style={[Layout.row, styles.floatingActionWrapper, { bottom: 0 }]}>
          <ButtonNext disabled={false} width={Responsive.height(56)} height={Responsive.height(56)}
            iconStyle={{
              width: Responsive.height(19),
              height: Responsive.height(18)
            }}
            icon={Images.icMessage} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default TabMessageContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  textTitle: {
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-Medium',
    color: '#242332',
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(24),
    lineHeight: Responsive.width(36),
    color: '#242332',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  textDescription: {
    fontFamily: 'NotoSans-Regular',
    fontSize: Responsive.font(14),
    lineHeight: Responsive.width(19),
    color: '#8184A3',
    paddingHorizontal: Responsive.width(34),
    marginTop: Responsive.height(10),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  tabBar: {
    height: Responsive.height(48),
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    elevation: 0,
  },
  textTabLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    lineHeight: Responsive.width(22),
    textTransform: 'none'
  },
  tabIndicator: {
    backgroundColor: '#5D5FEF',
    height: Responsive.height(2)
  },
  floatingActionWrapper: {
    marginBottom: Responsive.width(27),
    marginRight: Responsive.width(24),
    position: 'absolute',
    right: 0
  }
});

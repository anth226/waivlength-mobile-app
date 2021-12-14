import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer, TabMessageContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import { CustomImage } from '@/Components'
import Responsive from 'react-native-lightweight-responsive'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarInactiveTintColor: '#00ff00',
        headerShown: false,
        tabBarStyle: {
          height: Responsive.height(88),
          borderTopColor: 'transparent',
          backgroundColor: 'transparent',
          elevation: 0,
        },
        tabBarBackground: () => (<CustomImage mode='stretch' width={'100%'} height={Responsive.height(88)} source={Images.bgTab} />)
      }}
    >
      <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => focused ?
            (<CustomImage
              height={Responsive.height(51)}
              width={Responsive.width(51)}
              source={Images.icTabHomeFocused} />
            ) :
            (<CustomImage
              height={Responsive.height(23)}
              width={Responsive.width(21)}
              source={Images.icTabHome} />)
        }} />
      <Tab.Screen
        name="Message"
        component={TabMessageContainer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => focused ?
            (<CustomImage
              height={Responsive.height(51)}
              width={Responsive.width(51)}
              source={Images.icTabMesaageFocused} />) :
            (<CustomImage
              height={Responsive.height(23)}
              width={Responsive.width(21)}
              source={Images.icTabMessage} />)
        }}
      />
      <Tab.Screen
        name="Notification"
        component={ExampleContainer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => focused ?
            (<CustomImage

              height={Responsive.height(51)}
              width={Responsive.width(51)}
              source={Images.icTabNotificationFocused} />) :
            (<CustomImage
              height={Responsive.height(23)}
              width={Responsive.width(21)}
              source={Images.icTabNotification} />)
        }}
      />
      <Tab.Screen
        name="Challenge"
        component={ExampleContainer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => focused ?
            (<CustomImage
              height={Responsive.height(51)}
              width={Responsive.width(51)}
              source={Images.icTabChallengeFocused} />) :
            (<CustomImage
              height={Responsive.height(23)}
              width={Responsive.width(21)}
              source={Images.icTabChallenge} />)
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator

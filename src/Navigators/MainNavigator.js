import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  ExampleContainer,
  CalendarEventContainer,
  ConversationContainer,
  NewMessageContainer,
  SearchMessageContainer,
  ConversationAudioContainer,
  CreateNewAudioRoomContainer,
  GroupConversationContainer,
  CreateNewChannelContainer,
  PinnedMessageContainer,
  ReportServerContainer,
  CreateNewEventStep1Container,
  CreateNewEventStep2Container,
  CreateNewEventStep3Container,
  SettingServerContainer,
  SettingNotificationContainer,
  CreateNewCategoryContainer,
  EditServerProfileContainer,
  ReviewReportGroupContainer
} from '@/Containers'
import { useTheme } from '@/Hooks'
import { CustomImage } from '@/Components'
import Responsive from 'react-native-lightweight-responsive'
import { View } from 'react-native'
import TabHomeNavigator from './TabHomeNavigator'
import TabMessageNavigator from './TabMessageNavigator'
import TabNotificationNavigator from './TabNotificationNavigator'
import TabChallengeNavigator from './TabChallengeNavigator'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// @refresh reset
const MainTabNavigator = () => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarInactiveTintColor: '#00ff00',
        headerShown: false,
        lazy: true,
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
        component={TabHomeNavigator}
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
        component={TabMessageNavigator}
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
        component={TabNotificationNavigator}
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
        component={TabChallengeNavigator}
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


const MainNavigator = () => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()

  return (
    <Stack.Navigator initialRouteName="MainTab" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
      <Stack.Screen name="CalendarEvent" component={CalendarEventContainer} />
      <Stack.Screen name="Conversation" component={ConversationContainer} />
      <Stack.Screen name="NewMessage" component={NewMessageContainer} />
      <Stack.Screen name="SearchMessage" component={SearchMessageContainer} />
      <Stack.Screen name="ConversationAudio" component={ConversationAudioContainer} />
      <Stack.Screen name="CreateNewAudioRoom" component={CreateNewAudioRoomContainer} />
      <Stack.Screen name="GroupConversation" component={GroupConversationContainer} />
      <Stack.Screen name="CreateNewChannel" component={CreateNewChannelContainer} />
      <Stack.Screen name="PinnedMessage" component={PinnedMessageContainer} />
      <Stack.Screen name="ReportServer" component={ReportServerContainer} />
      <Stack.Screen name="CreateNewEventStep1" component={CreateNewEventStep1Container} />
      <Stack.Screen name="CreateNewEventStep2" component={CreateNewEventStep2Container} />
      <Stack.Screen name="CreateNewEventStep3" component={CreateNewEventStep3Container} />
      <Stack.Screen name="SettingServer" component={SettingServerContainer} />
      <Stack.Screen name="SettingNotification" component={SettingNotificationContainer} />
      <Stack.Screen name="CreateNewCategory" component={CreateNewCategoryContainer} />
      <Stack.Screen name="EditServerProfile" component={EditServerProfileContainer} />
      <Stack.Screen name="ReviewReportGroup" component={ReviewReportGroupContainer} />
      
    </Stack.Navigator>
  )
}


export default MainNavigator

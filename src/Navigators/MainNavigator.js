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
  ReviewReportGroupContainer,
  ReviewReportGroupSomethingElseContainer,
  SettingChannelContainer,
  ListOfDailyChallengeContainer,
  ListOfActiveChallengeContainer,
  CreateNewWalletContainer,
  ImportWalletContainer,
  ConfirmWalletContainer,
  DeFiDetailContainer,
  ReceiveWalletAddressContainer,
  SendWalletAddressContainer,
  SettingOptionWalletContainer,
  ListOfTokenToSendContainer,
  AddCustomTokenContainer,
  StakingDeFiContainer,
  ScanQRContainer,
  OtherProfileContainer,
  NewPostContainer,
  InviteFriendsContainer,
  SettingsContainer,
  GroupMessagingOverviewContainer,
  UserChannelOverviewContainer,
  AdminChannelOverviewContainer,
  ChannelPermissionContainer,
  ChangeCategoryContainer,
  ChannelNotificationSettingsContainer,
  BansSettingServerContainer,
  RolesSettingServerContainer,
  RolesDetailSettingServerContainer,
  SettingOverviewContainer,
  SettingModerationContainer,
  LanguageContainer,
  MembersContainer,
  MemberDetailsContainer,
  BanMembersContainer,
  KickMembersContainer,
  EditRolesContainer,
  AddRoleStep1Container,
  AddRoleStep2Container,
  AddRoleStep3Container,
} from '@/Containers'
import { DrawerLeftProfile } from '@/Components'
import { useTheme } from '@/Hooks'
import { CustomImage } from '@/Components'
import Responsive from 'react-native-lightweight-responsive'
import { View } from 'react-native'
import TabHomeNavigator from './TabHomeNavigator'
import TabMessageNavigator from './TabMessageNavigator'
import TabNotificationNavigator from './TabNotificationNavigator'
import TabChallengeNavigator from './TabChallengeNavigator'
import { createDrawerNavigator } from "@react-navigation/drawer"


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerMainNavigator = () => {
  const drawerContent = (props) => {
    return (
      <View style={{backgroundColor: 'rgba(231, 235, 243, 1.0)', flex: 1}}>
         <DrawerLeftProfile {...props} />
      </View> 
    )
}
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerPosition: 'left',
        drawerStyle: {
          backgroundColor: 'rgba(231, 235, 243, 1.0)',
          width: Responsive.width(291),
        },
        lazy: true
      }}
      drawerContent={drawerContent} 
      initialRouteName="MainTab" >
      <Drawer.Screen name="MainTab" component={MainTabNavigator} />
    </Drawer.Navigator>
  );
}


// @refresh reset
const MainTabNavigator = ({ navigation }) => {
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
        initialParams={{ leftNavigation: navigation }}
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
    <Stack.Navigator initialRouteName="DrawerMainTab" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerMainTab" component={DrawerMainNavigator} />
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
      <Stack.Screen name="ReviewReportGroupSomethingElse" component={ReviewReportGroupSomethingElseContainer} />
      <Stack.Screen name="SettingChannel" component={SettingChannelContainer} />
      <Stack.Screen name="ListOfDailyChallenge" component={ListOfDailyChallengeContainer} />
      <Stack.Screen name="ListOfActiveChallenge" component={ListOfActiveChallengeContainer} />
      <Stack.Screen name="CreateNewWallet" component={CreateNewWalletContainer} />
      <Stack.Screen name="ImportWallet" component={ImportWalletContainer} />
      <Stack.Screen name="ConfirmWallet" component={ConfirmWalletContainer} />
      <Stack.Screen name="DeFiDetail" component={DeFiDetailContainer} />
      <Stack.Screen name="SendWalletAddress" component={SendWalletAddressContainer} />
      <Stack.Screen name="ReceiveWalletAddress" component={ReceiveWalletAddressContainer} />
      <Stack.Screen name="SettingOptionWallet" component={SettingOptionWalletContainer} />
      <Stack.Screen name="ListOfTokenToSend" component={ListOfTokenToSendContainer} />
      <Stack.Screen name="AddCustomToken" component={AddCustomTokenContainer} />
      <Stack.Screen name="StakingDeFi" component={StakingDeFiContainer} />
      <Stack.Screen name="ScanQR" component={ScanQRContainer} />
      <Stack.Screen name="OtherProfile" component={OtherProfileContainer} />
      <Stack.Screen name="NewPost" component={NewPostContainer} />
      <Stack.Screen name="InviteFriends" component={InviteFriendsContainer} />
      <Stack.Screen name="Settings" component={SettingsContainer} />
      <Stack.Screen name="GroupMessagingOverview" component={GroupMessagingOverviewContainer} />
      <Stack.Screen name="UserChannelOverview" component={UserChannelOverviewContainer} />
      <Stack.Screen name="AdminChannelOverview" component={AdminChannelOverviewContainer} />
      <Stack.Screen name="ChannelPermission" component={ChannelPermissionContainer} />
      <Stack.Screen name="ChangeCategory" component={ChangeCategoryContainer} />
      <Stack.Screen name="ChannelNotificationSettings" component={ChannelNotificationSettingsContainer} />
      <Stack.Screen name="BansSettingServer" component={BansSettingServerContainer} />
      <Stack.Screen name="RolesSettingServer" component={RolesSettingServerContainer} />
      <Stack.Screen name="RolesDetailSettingServer" component={RolesDetailSettingServerContainer} />
      <Stack.Screen name="Language" component={LanguageContainer} />
      <Stack.Screen name="Members" component={MembersContainer} />
      <Stack.Screen name="MemberDetails" component={MemberDetailsContainer} />
      <Stack.Screen name="BanMembers" component={BanMembersContainer} />
      <Stack.Screen name="KickMembers" component={KickMembersContainer} />
      <Stack.Screen name="EditRoles" component={EditRolesContainer} />
      <Stack.Screen name="AddRoleStep1" component={AddRoleStep1Container} />
      <Stack.Screen name="AddRoleStep2" component={AddRoleStep2Container} />
      <Stack.Screen name="AddRoleStep3" component={AddRoleStep3Container} />

      <Stack.Screen name="SettingOverview" component={SettingOverviewContainer} />
      <Stack.Screen name="SettingModeration" component={SettingModerationContainer} />


    </Stack.Navigator>
  )
}


export default MainNavigator

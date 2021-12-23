import React, { useRef, useEffect } from 'react'
import { StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Modalize } from 'react-native-modalize';
import { OnBoardingContainer, LoginContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './MainNavigator'
import AuthNavigator from './AuthNavigator'
import { navigationRef } from './utils'
import { EVENTS } from '@/Constants';
import EventBus from 'react-native-event-bus';
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'

import {
  CustomImage,
  DialogCreateAudioRoom,
  DialogGroupConversationOption,
  DialogGroupConversationInvite,
  DialogGroupConversationEvent,
  DialogGroupConversationNotification,
  DialogGroupConversationLeaveGroup
} from '@/Components'
import Responsive from 'react-native-lightweight-responsive';

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme, Images, Common } = useTheme()
  const { colors } = NavigationTheme
  const modalizeCreateAudioRoomRef = useRef(null);
  const modalizeGroupConversationOptionRef = useRef(null);
  const modalizeGroupConversationInviteRef = useRef(null);
  const modalizeGroupConversationEventRef = useRef(null);
  const modalizeGroupConversationNotificationRef = useRef(null);
  const modalizeGroupConversationLeaveGroupRef = useRef(null);

  const onOpenAudioRoomDialog = () => {
    modalizeCreateAudioRoomRef.current?.open();
  };

  const onCloseAudioRoomDialog = () => {
    modalizeCreateAudioRoomRef.current?.close();
  };

  const onOpenGroupConversationOptionDialog = () => {
    modalizeGroupConversationOptionRef.current?.open();
  };

  const onCloseAGroupConversationOptionDialog = () => {
    modalizeGroupConversationOptionRef.current?.close();
  };

  const onOpenGroupConversationInviteDialog = () => {
    modalizeGroupConversationInviteRef.current?.open();
  };

  const onCloseAGroupConversationInviteDialog = () => {
    modalizeGroupConversationInviteRef.current?.close();
  };

  const onOpenGroupConversationEventDialog = () => {
    modalizeGroupConversationEventRef.current?.open();
  };

  const onCloseAGroupConversationEventDialog = () => {
    modalizeGroupConversationEventRef.current?.close();
  };

  const onOpenGroupConversationNotificationDialog = () => {
    modalizeGroupConversationNotificationRef.current?.open();
  };

  const onCloseAGroupConversationNotificationDialog = () => {
    modalizeGroupConversationNotificationRef.current?.close();
  };

  const onOpenGroupConversationLeaveGroupDialog = () => {
    modalizeGroupConversationLeaveGroupRef.current?.open();
  };

  const onCloseAGroupConversationLeaveGroupDialog = () => {
    modalizeGroupConversationLeaveGroupRef.current?.close();
  };


  useEffect(() => {
    EventBus.getInstance().addListener(EVENTS.OPEN_CREATE_AUDIO_ROOM_DIALOG, onOpenAudioRoomDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_OPTION_DIALOG, onOpenGroupConversationOptionDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_INVITE_DIALOG, onOpenGroupConversationInviteDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_EVENT_DIALOG, onOpenGroupConversationEventDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_NOTIFICATION_DIALOG, onOpenGroupConversationNotificationDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_LEAVE_GROUP_DIALOG, onOpenGroupConversationLeaveGroupDialog)
    return () => {
      EventBus.getInstance().removeListener(onOpenAudioRoomDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationOptionDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationInviteDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationEventDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationNotificationDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationLeaveGroupDialog)
    };
  });


  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={[Layout.fill, { backgroundColor: colors.card }]}
    >
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="OnBoarding" component={OnBoardingContainer} /> */}
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <DialogCreateAudioRoom
        handlePosition="inside"
        modalizeRef={modalizeCreateAudioRoomRef}
        adjustToContentHeight={true}
        onPressAddATopic={() => {

        }}
        onPressLetGo={() => {
          onCloseAudioRoomDialog();
          navigate('CreateNewAudioRoom');
        }} />
      <DialogGroupConversationOption
        handlePosition="inside"
        modalizeRef={modalizeGroupConversationOptionRef}
        modalTopOffset={Responsive.height(35)} />
      <DialogGroupConversationInvite
        handlePosition="inside"
        modalTopOffset={Responsive.height(35)}
        modalizeRef={modalizeGroupConversationInviteRef} />
      <DialogGroupConversationEvent
        handlePosition="inside"
        modalTopOffset={Responsive.height(35)}
        modalizeRef={modalizeGroupConversationEventRef} />
      <DialogGroupConversationNotification
        handlePosition="inside"
        adjustToContentHeight={true}
        modalizeRef={modalizeGroupConversationNotificationRef} />
      <DialogGroupConversationLeaveGroup
        handlePosition="inside"
        adjustToContentHeight={true}
        modalizeRef={modalizeGroupConversationLeaveGroupRef} />
    </SafeAreaProvider>
  )
}

export default ApplicationNavigator



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

import { CustomImage, DialogCreateAudioRoom } from '@/Components'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme, Images, Common } = useTheme()
  const { colors } = NavigationTheme
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };


  useEffect(() => {
    EventBus.getInstance().addListener(EVENTS.OPEN_CREATE_AUDIO_ROOM_DIALOG, onOpen)
    return () => {
      EventBus.getInstance().removeListener(onOpen)
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
        modalizeRef={modalizeRef}
        adjustToContentHeight={true}
        onPressAddATopic={() => {

        }}
        onPressLetGo={() => {
          onClose();
          navigate('CreateNewEvent');
        }} />
    </SafeAreaProvider>
  )
}

export default ApplicationNavigator



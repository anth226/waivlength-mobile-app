import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  TabMessageContainer,
  SettingMessageContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const TabChallengeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabMessage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabMessage" component={TabMessageContainer} />
      <Stack.Screen name="SettingMessage" component={SettingMessageContainer} />
    </Stack.Navigator>
  )
}

export default TabChallengeNavigator

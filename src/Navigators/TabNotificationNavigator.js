import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  TabNotificationContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const TabNotificationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabMessage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabMessage" component={TabNotificationContainer} />
    </Stack.Navigator>
  )
}

export default TabNotificationNavigator

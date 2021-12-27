import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  TabChallengeContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const TabChallengeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabMessage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabMessage" component={TabChallengeContainer} />
    </Stack.Navigator>
  )
}

export default TabChallengeNavigator

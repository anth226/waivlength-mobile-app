import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  TabHomeContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const TabHomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabMessage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabMessage" component={TabHomeContainer} />
    </Stack.Navigator>
  )
}

export default TabHomeNavigator

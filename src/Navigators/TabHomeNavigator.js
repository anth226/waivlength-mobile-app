import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  ExampleContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const TabHomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabMessage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabMessage" component={ExampleContainer} />
    </Stack.Navigator>
  )
}

export default TabHomeNavigator

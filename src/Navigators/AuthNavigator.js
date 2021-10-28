import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginContainer } from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginContainer} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

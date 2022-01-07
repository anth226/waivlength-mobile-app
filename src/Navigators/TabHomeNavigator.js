import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  TabHomeContainer,
  MonetizationContainer,
  PrivacySafetyContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const TabHomeNavigator = ({route}) => {
  const { leftNavigation } = route.params;
  return (
    <Stack.Navigator initialRouteName="TabHome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabHome" component={TabHomeContainer} initialParams={{leftNavigation}}/>
      <Stack.Screen name="Monetization" component={MonetizationContainer} />
      <Stack.Screen name="PrivacySafety" component={PrivacySafetyContainer} />
    </Stack.Navigator>
  )
}

export default TabHomeNavigator

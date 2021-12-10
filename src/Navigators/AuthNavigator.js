import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  StartContainer,
  CreateAccountContainer,
  LoginContainer,
  SignUpContainer,
  VerificationContainer,
  ProffVerificationContainer,
  UploadSelfieContainer,
  UploadDocumentContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartContainer} />
      <Stack.Screen name="CreateAccount" component={CreateAccountContainer} />

      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="SignUp" component={SignUpContainer} />
      <Stack.Screen name="Verification" component={VerificationContainer} />
      <Stack.Screen name="ProffVerification" component={ProffVerificationContainer} />
      <Stack.Screen name="UploadSelfie" component={UploadSelfieContainer} />
      <Stack.Screen name="UploadDocument" component={UploadDocumentContainer} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

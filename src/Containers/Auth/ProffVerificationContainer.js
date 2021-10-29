import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Back, RadioButton, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-SemiBold'];

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0

const ProffVerificationContainer = () => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const [isCheckRemember, setCheckRemember] = useState(false)

  const { width } = useWindowDimensions();

  const { t } = useTranslation()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: false })
    //navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })


  return (
    <KeyboardAvoidingView
      style={{
        flexGrow: 1
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        style={[Layout.fill, Layout.column, styles.container]}>

        <View style={[Layout.fullWidth, Layout.rowHCenter]}>
          <TouchableOpacity onPress={() => navigateAndSimpleReset('Verification')}>
            <Back width={42} height={42} />
          </TouchableOpacity>
          <View style={Layout.fill} />
          <TouchableOpacity
            onPress={() => navigateAndSimpleReset('Main')}>
            <Text style={styles.textAction}>Next</Text>
          </TouchableOpacity>
        </View>



        <RenderHtml
          tagsStyles={tagsStyles}
          contentWidth={width}
          systemFonts={systemFonts}
          source={{ html: `<p>In order to completed your registation, <span>please upload your indentity with a clear selfie photo of proof the document holder</span></p>` }}
        />

        <Text style={[Fonts.textLeft, Gutters.largeTMargin, styles.textChooseType]}>Choose your identify type</Text>

        <View style={[Layout.fullWidth, Layout.rowHCenter, { marginTop: 15 }]}>
          <View style={[Layout.fill, Layout.alignItemsCenter, styles.radioButtonWrappper]} >

            <RadioButton
              selected={true}
              size={22}
              onPress={() => { }}
              text={`NID Card`}
              isHtml={false}
              textStyle={styles.textRadioButton}
              style={Layout.fill}
            />

          </View>
          <View style={{ width: 15 }} />
          <View style={[Layout.fill, Layout.alignItemsCenter, styles.radioButtonWrappper]} >

            <RadioButton
              selected={false}
              size={22}
              onPress={() => { }}
              text={`Others`}
              isHtml={false}
              textStyle={styles.textRadioButton}
              style={Layout.fill}
            />

          </View>
        </View>

        <View style={[Layout.fullWidth, Layout.rowHCenter, Gutters.regularVPadding, Gutters.regularHPadding, styles.dashWrapper]}>

          <View style={[Layout.fill, Layout.column]}>
            <Text style={[Fonts.textLeft, styles.textProofIdentify]}>Upload Proof identify</Text>
            <Text style={[Fonts.textLeft, styles.textSubProofIdentify]}>We Accept only</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigateAndSimpleReset('UploadDocument')}>
            <CustomImage width={42} height={42} source={Images.icIdentify} />
          </TouchableOpacity>
        </View>

        <Text style={[Fonts.textLeft, Gutters.largeTMargin, styles.textChooseType]}>A Selfie with your identify</Text>


        <Text style={[Fonts.textLeft, styles.textPleaseMakeSure]}>Please make sure that every details of the ID
          documents is clearly visible</Text>


        <View style={[Layout.fullWidth, Layout.rowHCenter, Gutters.regularVPadding, Gutters.regularHPadding, styles.dashWrapper]}>

          <View style={[Layout.fill, Layout.column]}>
            <Text style={[Fonts.textLeft, styles.textSelfieIdentify]}>Take selfie with identify</Text>
            <Text style={[Fonts.textLeft, styles.textSubSelfieIdentify]}>Please note screenshot, mobile
              phone bills</Text>
          </View>

          <View style={{ width: 25 }} />
          <TouchableOpacity
            onPress={() => navigateAndSimpleReset('UploadSelfie')}>
            <CustomImage width={39} height={39} source={Images.icSelfieIdentify} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[Common.button.rounded, Gutters.largeTMargin, Gutters.regularBMargin, { width: '100%' }]}
          onPress={() => navigateAndSimpleReset('Main')}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ProffVerificationContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    paddingTop: 20
  },
  textAction: {
    color: '#5D5FEF',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    fontSize: 16
  },
  textTitle: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold'
  },
  textChooseType: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  radioButtonWrappper: {
    height: 53,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#000000'
  },
  textRadioButton: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Poppins-Regular'
  },
  dashWrapper: {
    marginTop: 20,
    borderStyle: 'dashed',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBCBCB'
  },
  textProofIdentify: {
    color: '#121F2F',
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  textSubProofIdentify: {
    color: '#868686',
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  },
  textPleaseMakeSure: {
    color: '#868686',
    fontSize: 13,
    marginTop: 5,
    fontFamily: 'Poppins-Regular'
  },
  textSelfieIdentify: {
    color: '#121F2F',
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  textSubSelfieIdentify: {
    color: '#868686',
    fontSize: 13,
    fontFamily: 'Poppins-Regular'
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 16,
  },

});

const tagsStyles = {
  p: {
    fontSize: 20,
    color: '#1E293B',
    fontFamily: 'Poppins-Regular'
  },
  span: {
    fontFamily: 'Poppins-SemiBold'
  }
}

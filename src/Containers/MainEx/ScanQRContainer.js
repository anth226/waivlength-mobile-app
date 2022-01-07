import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomImage, ActionBar, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from 'react-native-camera';

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const ScanQRContainer = ({ }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const { width, height } = useWindowDimensions();
  const { t } = useTranslation()
  const [cameraType, setCameraType] = useState('back');

  const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

  const rectDimensions = width * 0.65; // this is equivalent to 255 from a 393 device width
  const vectorWidth = Responsive.height(-5);

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: false })
  }

  const onSuccess = (e) => {
    alert(e);
  }

  useEffect(() => {
    init()
  })

  return (<SafeAreaView edges={['top']} style={[Layout.fill]} >
    <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}>
      <QRCodeScanner
        showMarker
        onRead={onSuccess}
        containerStyle={{ height: height }}
        cameraStyle={{ height: height }}
        flashMode={RNCamera.Constants.FlashMode.auto}
        cameraType={cameraType}
        customMarker={
          <View style={styles.rectangleContainer}>
            {/* Top overlay */}
            <View style={{
              flex: 1,
              height: width,
              width: width,
              backgroundColor: overlayColor,
              justifyContent: "center",
              alignItems: "center"
            }} />

            <View style={{ flexDirection: "row" }}>
              {/* Left overlay */}
              <View style={{
                height: width * 0.65,
                width: width,
                backgroundColor: overlayColor
              }} />


              {/* Rectangle */}
              <View style={{
                height: rectDimensions,
                width: rectDimensions,
                borderWidth: Responsive.height(5),
                borderColor: overlayColor,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}>
                <CustomImage source={Images.icQrscanLeftTop} width={Responsive.height(30)} height={Responsive.height(30)}
                  style={{ position: 'absolute', left: vectorWidth, top: vectorWidth }} />
                <CustomImage source={Images.icQrscanRightTop} width={Responsive.height(30)} height={Responsive.height(30)}
                  style={{ position: 'absolute', right: vectorWidth, top: vectorWidth }} />
                <CustomImage source={Images.icQrscanLeftBottom} width={Responsive.height(30)} height={Responsive.height(30)}
                  style={{ position: 'absolute', left: vectorWidth, bottom: vectorWidth }} />
                <CustomImage source={Images.icQrscanRightBottom} width={Responsive.height(30)} height={Responsive.height(30)}
                  style={{ position: 'absolute', right: vectorWidth, bottom: vectorWidth}} />
              </View>

              {/* Right overlay */}
              <View style={{
                height: width * 0.65,
                width: width,
                backgroundColor: overlayColor
              }} />
            </View>

            {/* Bottom overlay */}
            <View style={{
              flex: 1,
              height: width,
              width: width,
              backgroundColor: overlayColor,
            }} />
          </View>
        }
      />
    </View>
    <ActionBar
      left={<CustomImage source={Images.icBackWhite} onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
      center={<Text style={styles.textHeaderTitle}>Scan QR</Text>}
      right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
    />

    <View style={[Layout.rowCenter, {
      position: 'absolute', bottom: Responsive.height(82), left: 0, right: 0
    }]}>

      <CustomImage source={Images.icCameraSwitch} width={Responsive.height(34)} height={Responsive.height(34)} 
      onPress={()=> {
        if (cameraType == 'back') {
          setCameraType('front');
        } else {
          setCameraType('back');
        }
      }}/>
    </View>

  </SafeAreaView>)
}


export default ScanQRContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Responsive.width((24))
  },
  textHeaderTitle: {
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
});

import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, ActionBar, BackIcon, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const ReceiveWalletAddressContainer = ({ }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <LinearGradient
            colors={['#ebeff5', '#DED8F3']}
            useAngle={true} angle={-45} angleCenter={{ x: 0.2, y: 0.2 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>
        <ActionBar
            left={<BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
            center={<Text style={styles.textHeaderTitle}>Your Wallet Address</Text>}
            right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView nestedScrollEnabled={true} style={Layout.fill}>
                <View style={[Layout.fullWidth, Layout.column]}>
                    <View style={styles.viewQrContainer}>
                        <View style={[Layout.rowHCenter, { alignSelf: 'center' }]}>
                            <CustomImage source={Images.icWaivlength} width={Responsive.width(40)} height={Responsive.width(24)} />
                            <Text style={styles.textWAIV}>WAIV</Text>
                        </View>
                        <View style={[styles.viewQrCode, Layout.fill,
                        { marginTop: Responsive.height(22), marginBottom: Responsive.height(10), alignItems: 'center' }]}>
                            <QRCode
                                size={Responsive.height(230)}
                                value="0x19B2295E14C643Ec2B23FEcC91954BF611f64cFc"
                            // getRef={(c) => (this.svg = c)}
                            />
                        </View>
                        <Text style={styles.textTapShareImage}>Tap to share image</Text>

                    </View>

                    <Text style={styles.textCode}>0x19B2295E14C643Ec2B23FEcC91954BF611f64cFc</Text>
                    <TouchableOpacity style={[Layout.rowCenter, styles.viewCopyButton]}>
                        <CustomImage source={Images.icCopyWallet} width={Responsive.width(14)}
                            height={Responsive.width(14)} tintColor={'#5D5FEF'} />
                        <Text style={styles.textCopy}>Copy</Text>
                    </TouchableOpacity>

                    <View style={[Layout.rowHCenter, styles.viewWarningContainer]}>
                        <CustomImage source={Images.icAlertCircle} width={Responsive.width(24)}
                            height={Responsive.width(24)} />
                        <Text style={styles.textMessageError}>You can send only BSC tokens to this address. Do not send ETC tokens.</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={[Layout.fullWidth, {height: Responsive.height(52), marginBottom: Responsive.height(26),}]}>
                <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewShareButton]}>
                    <CustomImage source={Images.icExportWallet} width={Responsive.width(20)}
                        height={Responsive.width(20)} />
                    <Text style={styles.textShare}>Share</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default ReceiveWalletAddressContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    textHeaderTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B3F51',
    },
    viewQrContainer: {
        width: Responsive.width(286),
        height: Responsive.height(364),
        backgroundColor: 'white',
        borderRadius: Responsive.height(20),
        paddingHorizontal: Responsive.width(20),
        paddingTop: Responsive.height(29),
        paddingBottom: Responsive.height(15),
        alignSelf: 'center',
        marginTop: Responsive.height(30),
    },
    textWAIV: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-Bold',
        color: '#242A31',
    },
    textTapShareImage: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#ADAEC4',
        marginTop: Responsive.height(10),
        textAlign: 'center',
    },
    viewQrCode: {

    },
    textCode: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        textAlign: 'center',
        flex: 1,
        marginHorizontal: Responsive.width(27),
        marginVertical: Responsive.height(20),

    },
    viewCopyButton: {
        backgroundColor: 'rgba(221, 226, 242, 1.0)',
        width: Responsive.width(96),
        height: Responsive.height(30),
        borderRadius: Responsive.height(8),
        alignSelf: 'center',
    },
    textCopy: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
        marginLeft: Responsive.width(6),
    },
    viewWarningContainer: {
        backgroundColor: 'rgba(235, 228, 223, 1.0)',
        minHeight: Responsive.height(66),
        marginHorizontal: Responsive.width(27),
        marginTop: Responsive.height(20),
        marginBottom: Responsive.height(20),
        borderRadius: Responsive.height(20),
        paddingVertical: Responsive.height(15),
        paddingHorizontal: Responsive.width(19),
    },
    textMessageError: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        marginLeft: Responsive.width(13),
        flex: 1,
    },
    viewShareButton: {
        backgroundColor: '#5D5FEF',
        marginHorizontal: Responsive.width(27),
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
    },
    textShare: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        marginLeft: Responsive.width(5),
        lineHeight: Responsive.height(28),
    },

});

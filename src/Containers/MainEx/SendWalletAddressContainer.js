import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, ActionBar, BackIcon, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const SendWalletAddressContainer = ({ }) => {
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
            center={<Text style={styles.textHeaderTitle}>Send ETH</Text>}
            right={<CustomImage source={Images.icSettingsSendWallet} width={Responsive.height(36)} height={Responsive.height(36)} onPress={() => {
                navigate('SettingOptionWallet')
            }} />}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView nestedScrollEnabled={true} style={Layout.fill}>
                <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(18) }]}>
                    <Text style={styles.textTitle}>Send to</Text>
                    <View style={[Layout.row, styles.viewSendToContainer]}>
                        <View style={Layout.fill}>
                            <TextInput
                                onChangeText={text => { }}
                                editable={true}
                                placeholder={'Public address (0x...)'}
                                placeholderTextColor={'#ADAEC4'}
                                selectTextOnFocus
                                style={[Layout.fullWidth, styles.viewTextInputSendTo]} />
                        </View>
                        <View style={{ marginRight: Responsive.width(15) }}>
                            <View style={[styles.viewPurpleCorner, Layout.rowCenter, { marginBottom: Responsive.height(14) }]}>
                                <CustomImage source={Images.icCopySendWallet} width={Responsive.height(14)} height={Responsive.height(14)} />
                            </View>
                            <View style={[styles.viewPurpleCorner, Layout.rowCenter]}>
                                <CustomImage source={Images.icScanSendWallet} width={Responsive.height(14)} height={Responsive.height(14)} />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.textTitle}>Asset</Text>
                    <View style={[Layout.row, styles.viewAssetsContainer]}>
                        <View style={Layout.fill}>
                            <TextInput
                                onChangeText={text => { }}
                                editable={true}
                                placeholder={'0 ETH'}
                                placeholderTextColor={'#ADAEC4'}
                                selectTextOnFocus
                                style={[Layout.fullWidth, styles.viewTextInputSendTo]} />
                            <Text style={styles.textCurrency}>~ US$0.00</Text>
                        </View>
                        <TouchableOpacity style={{ marginRight: Responsive.width(15) }} onPress={() => {
                            navigate('ListOfTokenToSend')
                        }}>
                            <View style={[Layout.rowCenter, { marginBottom: Responsive.height(14) }]}>
                                <CustomImage source={Images.icCryptocurrencyEth} width={Responsive.height(32)} height={Responsive.height(32)} />
                                <CustomImage source={Images.icPolygonSendWallet} width={Responsive.height(12)} height={Responsive.height(8)}
                                    style={{ marginLeft: Responsive.width(11) }} />
                            </View>
                            <Text style={styles.textETH}>ETH</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <View style={[Layout.fullWidth, { height: Responsive.height(52), marginBottom: Responsive.height(26), }]}>
                <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewShareButton]}>
                    <CustomImage source={Images.icSendWhiteWallet} width={Responsive.width(20)}
                        height={Responsive.width(20)} />
                    <Text style={styles.textShare}>Send</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default SendWalletAddressContainer

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
    textTitle: {
        marginTop: Responsive.height(20),
        marginBottom: Responsive.height(12),
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#2B2F3F',
    },
    viewSendToContainer: {
        backgroundColor: 'rgba(249, 250, 252, 1.0)',
        minHeight: Responsive.height(98),
        borderRadius: Responsive.height(20),
        paddingVertical: Responsive.height(12),
    },
    viewAssetsContainer: {
        backgroundColor: 'rgba(249, 250, 252, 1.0)',
        minHeight: Responsive.height(98),
        borderRadius: Responsive.height(20),
        paddingVertical: Responsive.height(12),
    },
    viewPurpleCorner: {
        width: Responsive.height(30),
        height: Responsive.height(30),
        borderRadius: Responsive.height(8),
        backgroundColor: 'rgba(233, 235, 250, 1.0)'
    },
    viewTextInputSendTo: {
        paddingVertical: Responsive.height(10),
        paddingHorizontal: Responsive.width(20),
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.height(27),
    },
    textETH: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
    },
    textCurrency: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        marginLeft: Responsive.width(20)
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

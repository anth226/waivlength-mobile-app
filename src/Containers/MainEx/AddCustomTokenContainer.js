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

const AddCustomTokenContainer = ({ }) => {
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
            center={<Text style={styles.textHeaderTitle}>Add custom token</Text>}
            right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView nestedScrollEnabled={true} style={Layout.fill}>
                <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(18) }]}>
                    <Text style={styles.textTitle}>Token address</Text>
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
                        </View>
                    </View>
                    <View style={styles.viewInfoContainer}>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between' }]}>
                            <Text style={styles.textInfoLabel}>Token Icon</Text>
                            <View style={[Layout.rowCenter, {
                                width: Responsive.height(32),
                                height: Responsive.height(32), borderRadius: Responsive.height(16), backgroundColor: '#ADAEC4'
                            }]}>
                                <CustomImage source={Images.icEmojioneQuestionMark} width={Responsive.height(16)} height={Responsive.height(16)} />
                            </View>
                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(18) }]}>
                            <Text style={styles.textInfoLabel}>Token Symbol</Text>
                            <View style={[Layout.rowCenter, { width: Responsive.height(32), height: Responsive.height(32) }]}>
                                <Text style={styles.textUnknown}>-</Text>
                            </View>
                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(18) }]}>
                            <Text style={styles.textInfoLabel}>Token Name</Text>
                            <View style={[Layout.rowCenter, { width: Responsive.height(32), height: Responsive.height(32) }]}>
                                <Text style={styles.textUnknown}>-</Text>
                            </View>
                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(18) }]}>
                            <Text style={styles.textInfoLabel}>Token Decimals</Text>
                            <View style={[Layout.rowCenter, { width: Responsive.height(32), height: Responsive.height(32) }]}>
                                <Text style={styles.textUnknown}>-</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[Layout.fullWidth, { height: Responsive.height(52), marginBottom: Responsive.height(26), }]}>
                        <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewAddTokenButton]}>
                            <Text style={styles.textAddToken}>Add Token</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default AddCustomTokenContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    textHeaderTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#242332',
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
    viewInfoContainer: {
        minHeight: Responsive.height(175),
        borderRadius: Responsive.height(20),
        borderWidth: Responsive.height(1),
        borderColor: '#BFCBD6',
        marginVertical: Responsive.height(20),
        paddingLeft: Responsive.height(20),
        paddingRight: Responsive.height(16),
        paddingTop: Responsive.height(20),
        paddingBottom: Responsive.height(16),
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
    viewAddTokenButton: {
        backgroundColor: '#5D5FEF',
        marginHorizontal: Responsive.width(27),
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
    },
    textAddToken: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        marginLeft: Responsive.width(5),
        lineHeight: Responsive.height(28),
    },
    textInfoLabel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
    },
    textUnknown: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
    },

});

import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { CustomImage, ActionBar, BackIcon, GradientBackground, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const ImportWalletContainer = ({ }) => {
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
            colors={['#ebeff5', '#dfdaf2']}
            useAngle={true} angle={-60} angleCenter={{ x: 0.05, y: 0.05 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>
        <ActionBar
            left={<BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
            center={<Text style={styles.textHeaderTitle}>Import Existing Wallet</Text>}
            right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
        />

        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>

                <CustomImage source={Images.icShieldSecurity} width={Responsive.height(44)} height={Responsive.height(44)}
                    style={{ marginTop: Responsive.height(30), alignSelf: 'center'}} />
                <Text style={styles.textRecoveryPhrase}>Recovery Phrase</Text>
                <Text style={styles.textNote}>In the correct order, type your secret wallet recovery phrase to import your wallet</Text>

                <View style={[Layout.row, Layout.fullWidth]}>
                    <View style={[Layout.fill]}>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>1.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>2.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>3.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>4.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>5.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>6.</Text>
                        </View>
                    </View>

                    <View style={[Layout.fill, {marginLeft: Responsive.width(24)}]}>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>7.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>8.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>9.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>10.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>11.</Text>
                        </View>
                        <View style={[Layout.rowHCenter, styles.viewInputContainer]}>
                            <Text style={styles.textInputNumber}>12.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity
                onPress={() => {
                    navigate('ScanQR')
                }}
                style={[Common.button.rounded, styles.buttonNext]}
            >
                <Text style={styles.textButtonNext}>Confirm</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default ImportWalletContainer

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
    textRecoveryPhrase: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Bold',
        color: '#242A31',
        marginHorizontal: Responsive.width(20),
        marginTop: Responsive.height(24),
        alignSelf: 'center',
    },
    textNote: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: Responsive.width(20),
        marginTop: Responsive.height(15),
        marginBottom: Responsive.height(39),
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    itemStyleWrapper: {
        borderRadius: Responsive.height(18),
        paddingHorizontal: Responsive.height(21),
    },
    viewInputContainer: {
        backgroundColor: '#f5f8fa',
        borderWidth: Responsive.height(1),
        borderColor: '#E1E2EF',
        borderRadius: Responsive.width(24),
        height: Responsive.height(36),
        marginHorizontal: Responsive.width(20),
        width: '100%',
    },
    textInputNumber: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        flex: 1,
    },
    buttonNext: {
        height: Responsive.height(52),
        borderRadius: Responsive.height(14),
        backgroundColor: '#5D5FEF'
    },
    viewInputContainer: {
        backgroundColor: '#f5f8fa',
        borderWidth: Responsive.height(1),
        borderColor: '#E1E2EF',
        borderRadius: Responsive.width(24),
        height: Responsive.height(36),
        paddingHorizontal: Responsive.width(20),
        marginBottom: Responsive.height(15)
    },
    textInputNumber: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
    },
    buttonNext: {
        height: Responsive.height(52),
        borderRadius: Responsive.height(40),
        backgroundColor: '#5D5FEF',
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.height(20),
    },
    textButtonNext: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
    },
});

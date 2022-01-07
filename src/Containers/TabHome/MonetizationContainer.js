import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, ActionBar, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const MonetizationContainer = ({ }) => {
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
            center={<View style={[Layout.fill, { marginTop: Responsive.height(10), }]}>
                <Text style={styles.textHeaderSettings}>Monetization</Text>
                <Text style={styles.textHeaderUsername}>@muhdsalim456</Text>
            </View>}
            right={<View style={{ width: Responsive.height(36) }} />}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView nestedScrollEnabled={true} style={Layout.fill}>
                <View style={[Layout.fullWidth, Layout.column]}>
                    <Text style={[styles.textGetHelp]}>Get Help</Text>

                    <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow]} onPress={() => {}}>
                        <View style={[Layout.rowCenter, { width: Responsive.width(56)}]}>
                            <CustomImage source={Images.icDollarCircle} width={Responsive.height(24)} height={Responsive.height(24)} />
                        </View>
                        <View style={[Layout.fill, Layout.rowHCenter]}>
                            <View style={Layout.fill}>
                                <Text style={styles.textTitle}>Monetization</Text>
                                <Text style={styles.textContent}>Visit the help center for further information on how to monetize your account with Waivlength</Text>
                            </View>
                            <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    </SafeAreaView>)
}

export default MonetizationContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    textHeaderSettings: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Bold',
        color: '#242332',
        lineHeight: Responsive.height(20),
        textAlign: 'center'
    },
    textHeaderUsername: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3F464E',
        lineHeight: Responsive.height(20),
        textAlign: 'center'
    },
    textGetHelp: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Medium',
        color: '#525563',
        marginTop: Responsive.height(23),
        marginHorizontal: Responsive.width(24),
    },
    viewButtonRow: {
        minHeight: Responsive.height(54),
        marginTop: Responsive.height(20),
        paddingEnd: Responsive.width(24),
    },
    textTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#30333E',
        flex: 1
    },
    textContent: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(13),
        color: '#525563',
        flex: 1
    },

});

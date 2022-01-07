import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
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

const InviteFriendsContainer = ({ }) => {
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
            center={<Text style={styles.textHeaderTitle}>Free Tokens</Text>}
            right={<View style={{ width: Responsive.height(36) }} />}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView nestedScrollEnabled={true} style={Layout.fill}>
                <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(18) }]}>
                    <View style={[Layout.fullWidth, Layout.rowCenter]}>
                        <CustomImage source={Images.icReferAFriend} width={Responsive.height(159)} height={Responsive.height(149)} style={styles.viewIconBg} />
                    </View>

                    <Text style={[styles.text242A31Bold16]}>Invite friends to get free tokens</Text>
                    <Text style={[styles.text242A31Regular14, styles.viewPadding12px, { textAlign: 'center' }]}>Get 200 WAIV Tokens when you invite a friend to join WAIVLENGTH</Text>

                </View>
            </ScrollView>

        </KeyboardAvoidingView>

        <Text style={styles.textYourInviteCode}>Your Invite Code</Text>
        <View style={[Layout.fullWidth, { height: Responsive.height(52), marginBottom: Responsive.height(16), }]}>
            <View style={[Layout.fill, Layout.rowCenter, styles.viewCopyButton]}>
                <Text style={styles.textCode}>2XAH4B</Text>

                <TouchableOpacity style={[Layout.rowCenter, styles.copyButton]}>
                    <Text style={styles.textCopy}>Copy</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={[Layout.fullWidth, { height: Responsive.height(52), marginBottom: Responsive.height(26), }]}>
            <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewInviteButton]}>
                <Text style={styles.textAddToken}>Invite Friends</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>)
}

export default InviteFriendsContainer

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
    viewCopyButton: {
        marginHorizontal: Responsive.width(27),
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
        borderWidth: Responsive.height(2),
        borderColor: '#E1E2EF',
    },
    copyButton: {
        height: Responsive.height(52),
        minWidth: Responsive.height(52),
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        paddingHorizontal: Responsive.width(12)
    },
    textCopy: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
        lineHeight: Responsive.height(28)
    },
    textCode: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#242A31',
        lineHeight: Responsive.height(28),
    },
    textYourInviteCode: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(24),
        marginBottom: Responsive.height(15),
        textAlign: 'center'
    },
    viewInviteButton: {
        backgroundColor: '#5D5FEF',
        marginHorizontal: Responsive.width(27),
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
    },
    textAddToken: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: Responsive.height(28),
    },
    viewIconBg: {
        marginVertical: Responsive.height(40),
        alignContent: 'center'
    },
    text242A31Bold16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.height(24),
        color: '#242A31',
        textAlign: 'center'
    },
    text242A31Regular14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.height(21),
        color: '#242A31',
        textAlign: 'center',
        marginHorizontal: Responsive.width(20)
    },
    viewPadding12px: {
        marginTop: Responsive.height(12),
    }

});

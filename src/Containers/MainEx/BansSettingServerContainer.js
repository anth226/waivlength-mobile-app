import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, CustomImage, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const BansSettingServerContainer = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [channelName, setChannelName] = useState("");
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }


    useEffect(() => {
        init()
    })

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<Text style={styles.textTitle}>Bans</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>

                <View style={[Layout.fullWidth, Layout.rowCenter, {marginTop: Responsive.height(90)}]}>
                    <CustomImage source={Images.icBansBg} width={Responsive.height(274)} height={Responsive.height(292)} />
                </View>
                <View style={[Layout.fullWidth, Layout.rowCenter]}>
                    <Text style={styles.textNoBans}>NO BANS</Text>
                </View>
                <View style={[Layout.fullWidth, Layout.rowCenter]}>
                    <Text style={styles.textNote}>You haven’t banned anybody...{'\n'}but if and when you must, do not hesitate!</Text>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default BansSettingServerContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((16))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
    },
    textSubTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#272D37',
        marginLeft: Responsive.width(26),
    },
    textNoBans: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: '#525563',
        textAlign: 'center'
    },
    textNote: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#525563',
        textAlign: 'center',
        marginTop: Responsive.height(10),
        flex: 1
    }

});

import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const ChannelNotificationSettingsContainer = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [channelName, setChannelName] = useState("");
    const { t } = useTranslation()
    const { width } = useWindowDimensions();
    const [notificationType, setNotificationType] = useState(0);

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
            center={<Text style={styles.textTitle}>Notification Settings</Text>}
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

                <View style={[Layout.fullWidth, { marginBottom: Responsive.height(10) }]}>
                    <Text style={[Layout.fill, styles.textSubTitle]}>Notification Settings</Text>
                </View>
                <View style={[Layout.fullWidth, Layout.column, styles.actionWrapper]}>
                    <TouchableOpacity
                        onPress={() => setNotificationType(0)}
                        style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: Responsive.width(10) }} />
                        <Text style={[Layout.fill, styles.textItemAction]}>All Messages</Text>
                        <RadioButton
                            selected={notificationType === 0}
                            size={22}
                            onPress={() => { }}
                            text={``}
                            isHtml={false}
                            textStyle={styles.textRadioButton}
                            style={{}}
                        />
                        <View style={{ width: Responsive.width(15) }} />
                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity
                        onPress={() => setNotificationType(1)}
                        style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: Responsive.width(10) }} />
                        <Text style={[Layout.fill, styles.textItemAction]}>Only @mentions</Text>
                        <RadioButton
                            selected={notificationType === 1}
                            size={22}
                            onPress={() => { }}
                            text={``}
                            isHtml={false}
                            textStyle={styles.textRadioButton}
                            style={{}}
                        />
                        <View style={{ width: Responsive.width(15) }} />
                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity
                        onPress={() => setNotificationType(2)}
                        style={{ height: Responsive.height(52), alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: Responsive.width(10) }} />
                        <Text style={[Layout.fill, styles.textItemAction]}>Nothing</Text>
                        <RadioButton
                            selected={notificationType === 2}
                            size={22}
                            onPress={() => { }}
                            text={``}
                            isHtml={false}
                            textStyle={styles.textRadioButton}
                            style={{}}
                        />
                        <View style={{ width: Responsive.width(15) }} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default ChannelNotificationSettingsContainer

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
    actionWrapper: {
        backgroundColor: 'rgba(252, 252, 254, 1.0)',
        borderRadius: Responsive.height(16)
    },
    textItemAction: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        paddingHorizontal: Responsive.width(10),
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: 'rgba(220, 221, 224, 1.0)',
    },
});

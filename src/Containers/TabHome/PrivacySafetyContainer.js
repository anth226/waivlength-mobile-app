import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
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

const PrivacySafetyContainer = ({ }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

    const DATA = [
        {
            id: 1,
            title: "Audience and Tagging",
            content: "Manage what information you allow other people on Waivlength to see.",
            iconName: "ic_privacy_people",
            iconWidth: Responsive.height(13),
            iconHeight: Responsive.height(17),
        },
        {
            id: 2,
            title: "Your Posts",
            content: "Manage the information associated with your Posts.",
            iconName: "ic_privacy_edit",
        },
        {
            id: 3,
            title: "Content you see",
            content: "Decide what you see on Waivlength based on your preferences like Topics and Interests.",
            iconName: "ic_privacy_subtitle",
        },
        {
            id: 4,
            title: "Mute and block",
            content: "Manage the accounts, words and notifications that you’ve muted or blocked.",
            iconName: "ic_privacy_volume_slash",
        },
        {
            id: 5,
            title: "Direct Messages",
            content: "Manage who can message you directly.",
            iconName: "ic_privacy_message",
        },
        {
            id: 6,
            title: "Audio Rooms",
            content: "Manage who can see your Audio Rooms listening activity.",
            iconName: "ic_privacy_microphone",
        },
        {
            id: 7,
            title: "Discoverability and Contacts",
            content: "Control your discoverability settings and manage contacts you have imported.",
            iconName: "ic_privacy_user_search",
        },
        {
            id: 8,
            title: "Off-Waivlength activity",
            content: "Manage how Waivlength users your online activity outside of Waivlength, such as the websites you visit, to personalize your experience",
            iconName: "ic_privacy_off_activity",
        },
        {
            id: 9,
            title: "Location Information",
            content: "Manage the location information Waivlength uses to personalize your experience",
            iconName: "ic_privacy_location",
        },
    ];

    const icon = (iconName) => {
        switch (iconName) {
            case "ic_privacy_people":
                return require("@/Assets/Icons/ic_privacy_people.png")
            case "ic_privacy_edit":
                return require("@/Assets/Icons/ic_privacy_edit.png")
            case "ic_privacy_subtitle":
                return require("@/Assets/Icons/ic_privacy_subtitle.png")
            case "ic_privacy_volume_slash":
                return require("@/Assets/Icons/ic_privacy_volume_slash.png")
            case "ic_privacy_message":
                return require("@/Assets/Icons/ic_privacy_message.png")
            case "ic_privacy_microphone":
                return require("@/Assets/Icons/ic_privacy_microphone.png")
            case "ic_privacy_user_search":
                return require("@/Assets/Icons/ic_privacy_user_search.png")
            case "ic_privacy_off_activity":
                return require("@/Assets/Icons/ic_privacy_off_activity.png")
            case "ic_privacy_location":
                return require("@/Assets/Icons/ic_privacy_location.png")
            default:
                return require("@/Assets/Icons/ic_display_blue.png")
        }
    }

    const renderItem = ({ item, index }) => {
        const { title, content, iconName, iconWidth } = item;

        return (
            <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow]} onPress={() => { }}>
                <View style={[Layout.rowCenter, { width: Responsive.width(56) }]}>
                    <CustomImage source={icon(iconName)} width={Responsive.height(24)} height={Responsive.height(24)} />
                </View>
                <View style={[Layout.fill, Layout.rowHCenter]}>
                    <View style={Layout.fill}>
                        <Text style={styles.textTitle}>{title}</Text>
                        <Text style={styles.textContent}>{content}</Text>
                    </View>
                    <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
                </View>

            </TouchableOpacity>
        );
    };

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <LinearGradient
            colors={['#ebeff5', '#DED8F3']}
            useAngle={true} angle={-45} angleCenter={{ x: 0.2, y: 0.2 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>
        <ActionBar
            left={<BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
            center={<View style={[Layout.fill, { marginTop: Responsive.height(10), }]}>
                <Text style={styles.textHeaderSettings}>Privacy and Safety</Text>
                <Text style={styles.textHeaderUsername}>@WaivToken</Text>
            </View>}
            right={<View style={{ width: Responsive.height(36) }} />}
        />
        <Text style={[styles.textGetHelp]}>Manage what information you see and share on Waivlength</Text>
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >

            <FlatList nestedScrollEnabled={true}
                style={[Layout.fullWidth]}
                data={DATA}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                keyExtractor={(item) => item.id} />
        </KeyboardAvoidingView>

    </SafeAreaView>)
}

export default PrivacySafetyContainer

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
        marginBottom: Responsive.height(5),
    },
    viewButtonRow: {
        minHeight: Responsive.height(54),
        marginVertical: Responsive.height(20),
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
    line: {
        backgroundColor: 'rgba(206, 210, 216, 1.0)',
        height: Responsive.height(1),
    }

});

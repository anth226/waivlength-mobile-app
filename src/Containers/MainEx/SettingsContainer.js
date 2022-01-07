import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, ActionBar, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const SettingsContainer = ({ }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    }, [])

    const DATA = [
        {
            id: 1,
            title: "Your account",
            content: "See information your account, download an archive of your data, or learn about your account deactivation options.",
            iconName: "ic_profile_menu",
            iconWidth: Responsive.height(13),
            iconHeight: Responsive.height(17),
        },
        {
            id: 2,
            title: "Security and account access",
            content: "manage your account’s security and keep track of your accounts usage including apps that you have connected to your account.",
            iconName: "ic_lock_pink_18",
        },
        {
            id: 3,
            title: "Monitization",
            content: "See how you can make money on Waivlength and manager your monitization options. ",
            iconName: "ic_monitization_green",
        },
        {
            id: 4,
            title: "Privacy and safety",
            content: "Manage what information you see and share on Waivlength.",
            iconName: "ic_add_user_setting",
        },
        {
            id: 5,
            title: "Notications",
            content: "Select the kinds of notifications you get about your activities, interests, and recommendations.",
            iconName: "ic_notification_yellow",
        },
        {
            id: 6,
            title: "Accessibility , display and languages",
            content: "Manage how Waivlength content is displayed to you.",
            iconName: "ic_display_blue",
        },
    ];

    const icon = (iconName) => {
        switch (iconName) {
            case "ic_profile_menu":
                return require("@/Assets/Icons/ic_profile_menu.png")
            case "ic_lock_pink_18":
                return require("@/Assets/Icons/ic_lock_pink_18.png")
            case "ic_monitization_green":
                return require("@/Assets/Icons/ic_monitization_green.png")
            case "ic_add_user_setting":
                return require("@/Assets/Icons/ic_add_user_setting.png")
            case "ic_notification_yellow":
                return require("@/Assets/Icons/ic_notification_yellow.png")
            default:
                return require("@/Assets/Icons/ic_display_blue.png")
        }
    }

    const itemClick = (item) => {
        const { iconName } = item;
        switch (iconName) {
            case "ic_profile_menu":

                break
            case "ic_lock_pink_18":
                break
            case "ic_monitization_green":
                navigate('Monetization')
                break
            case "ic_add_user_setting":
                navigate('PrivacySafety')
                break
            case "ic_notification_yellow":
                break
            default:
                break
        }
    }

    const renderItem = ({ item, index }) => {
        const { title, content, iconName, iconWidth } = item;
        return (
            <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow]} onPress={()=> itemClick(item)}>
                <View style={{ width: Responsive.width(40) }}>
                    <CustomImage source={icon(iconName)} width={Responsive.height(25)} height={Responsive.height(25)} />
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
        <View style={[Layout.rowHCenter, { marginHorizontal: Responsive.width(24), marginTop: Responsive.height(10) }]}>
            <BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />
            <View style={[Layout.fill, { marginLeft: Responsive.width(28) }]}>
                <Text style={styles.textHeaderSettings}>Settings</Text>
                <Text style={styles.textHeaderUsername}>@muhdsalim456</Text>
            </View>
        </View>
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <FlatList nestedScrollEnabled={true}
                style={[Layout.fullWidth]}
                data={DATA}
                renderItem={renderItem}
                ListHeaderComponent={<View style={{ height: Responsive.height(35) }} />}
                ListFooterComponent={<View style={{ height: Responsive.height(70) }} />}
                ItemSeparatorComponent={() => (<View style={[styles.line, { height: Responsive.height(27) }]} />)}
                keyExtractor={(item) => item.id} />

        </KeyboardAvoidingView>

    </SafeAreaView>)
}

export default SettingsContainer

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
        textAlign: 'left'
    },
    textHeaderUsername: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3F464E',
        lineHeight: Responsive.height(20),
        textAlign: 'left'
    },
    viewButtonRow: {
        minHeight: Responsive.height(54),
        marginHorizontal: Responsive.width(22),
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
    }

});

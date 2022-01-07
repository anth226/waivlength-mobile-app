import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, SectionList, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { CustomImage, ActionBar, BackIcon, Avatar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const UserChannelOverviewContainer = ({ }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const onOpenGroupConversationNotification = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_NOTIFICATION_DIALOG, {})
    };

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

    let INTERNAL_LIST = [
        { id: '1', name: 'ChiefWaiver', isVerified: true },
    ];
    let WELCOME_WAIVERS = [
        { id: '1', name: 'WAIVmeister', isVerified: true},
    ];
    let WELCOME_WAIVERS_1 = [
        { id: '1', name: 'Faruk Alvi', isVerified: false},
        { id: '2', name: 'Muhammad Salim', isVerified: true},
        { id: '3', name: 'Masum Parvej', isVerified: true},
    ];

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={styles.listItemSeparatorStyle} />
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
            center={<View style={styles.viewStrokeCircle}>
                <CustomImage height={Responsive.width(62)} width={Responsive.width(62)} source={Images.icStrokeGradient} style={{ position: 'absolute' }} />
                <CustomImage height={Responsive.width(56)} width={Responsive.width(56)} source={Images.icGradientCircle} style={{ position: 'absolute' }} />
                <CustomImage height={Responsive.width(35)} width={Responsive.width(30)} source={Images.icWaivlength} style={{ position: 'absolute' }} />
            </View>}
            right={<TouchableOpacity style={{ width: Responsive.height(36) }} />}
        />
        <Text style={styles.textWaivlength}>Waivlength</Text>
        <View style={[Layout.rowCenter]}>
            <CustomImage height={Responsive.height(15)} width={Responsive.width(20)} source={Images.icChatRoom} style={{ paddingHorizontal: Responsive.width(15) }} />
            <Text style={styles.text44486FSemiBold14}>Chat Room</Text>
        </View>
        <Text style={[styles.text272D37Regular12, { marginTop: Responsive.height(7), marginBottom: Responsive.height(16) }]}>This chat room is for talking about the future of decentralization</Text>
        <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20) }]}>

            <TouchableOpacity
                style={[styles.buttonTab]}
                onPress={() => navigate('PinnedMessage')}
            >
                <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icPinDrawerRight} />
                <Text style={[styles.textButtonTab, { marginTop: Responsive.height(5) }]}>Pins</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.buttonTab]}
                onPress={onOpenGroupConversationNotification}
            >
                <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icNotificationDrawerRight} />
                <Text style={[styles.textButtonTab, { marginTop: Responsive.height(5) }]}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigate('SettingChannel')}
                style={[styles.buttonTab]}
            >
                <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icSettingDrawerRight} />
                <Text style={[styles.textButtonTab, { marginTop: Responsive.height(5) }]}>Settings</Text>
            </TouchableOpacity>

        </View>
        <View style={[Layout.row, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(10) }]}>
            <TouchableOpacity
                style={[styles.buttonInvite]}
            >
                <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icInviteDrawerRight} />
                <Text style={styles.textButtonInvite}>Invite Members</Text>
            </TouchableOpacity>

        </View>
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <SectionList
                ItemSeparatorComponent={FlatListItemSeparator}
                sections={[
                    { index: 0, title: 'WAIV CORE TEAM - CEO - 1', data: INTERNAL_LIST },
                    { index: 1, title: 'WAIV CORE TEAM - CMO - 1', data: WELCOME_WAIVERS },
                    { index: 2, title: 'OFFLINE - 3', data: WELCOME_WAIVERS_1 },
                ]}
                renderSectionHeader={({ section }) => (
                    <View style={[Layout.fullWidth, Layout.rowHCenter, styles.viewSectionHeader]}>
                        <Text style={[styles.textChatRoom, {}]}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(27), marginBottom: Responsive.height(10) }]}>
                    <View style={{ marginRight: Responsive.width(3.33) }}>
                        <Avatar
                            isShowDot={false}
                            imageStyle={styles.avatarImage}
                            url={'https://picsum.photos/200/200'}
                            firstName={"A"}
                            lastName={"A"} />
                        <View style={styles.viewVerifiedWrapper}>
                            <CustomImage source={item.isVerified ? Images.icUserChatVerified : Images.icUserChatNotVerified} width={Responsive.height(12)} height={Responsive.height(12)} />
                        </View>
                    </View>
                    <Text style={[styles.textChatRoom, {}]}>{item.name}</Text>

                </View>}
                keyExtractor={(item, index) => index}
            />

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default UserChannelOverviewContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    viewStrokeCircle: {
        width: Responsive.width(62),
        height: Responsive.width(62),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Responsive.height(10),
        marginRight: Responsive.width(10),
    },
    textWaivlength: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        color: '#272D37',
        textAlign: 'center',
        marginTop: Responsive.height(22),
    },
    text44486FSemiBold14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#44486F',
        lineHeight: Responsive.height(22)
    },
    text272D37Regular12: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#272D37',
        textAlign: 'center',
        marginHorizontal: Responsive.width(20)
    },
    textInvite: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
    },
    textChatRoom: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#44486F',
        flex: 1,
    },
    viewSectionHeader: {
        paddingHorizontal: Responsive.width(28),
        marginBottom: Responsive.height(10),
        marginTop: Responsive.height(20),
    },
    buttonTab: {
        borderRadius: Responsive.height(10),
        height: Responsive.height(46),
        alignItems: 'center',
        flex: 1,
    },
    textButtonTab: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
        color: '#44486F',
    },
    buttonInvite: {
        height: Responsive.height(43),
        flexDirection: 'row',
        paddingVertical: Responsive.height(10),
        paddingHorizontal: Responsive.height(5),
    },
    textButtonInvite: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        marginLeft: Responsive.width(10)
    },
    avatarImage: {
        width: Responsive.width(26),
        height: Responsive.width(26),
        borderRadius: Responsive.width(13),
        marginRight: Responsive.width(6),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
        position: 'absolute',
        bottom: 0,
        right: 0
    }

});

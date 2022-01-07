import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, SectionList, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, ActionBar, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const GroupMessagingOverviewContainer = ({ }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

    const onOpenSettingDialog = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_OPTION_DIALOG, {})
    };

    let INTERNAL_LIST = [
        { id: '1', name: 'admin-only', type: 'internal' },
        { id: '2', name: 'moderator group', type: 'internal' },
    ];
    let WELCOME_WAIVERS = [
        { id: '1', name: '📄-rules', type: 'welcome' },
        { id: '2', name: '📢-announcement', type: 'welcome' },
        { id: '3', name: '👋-welcome', type: 'welcome' },
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
            right={<CustomImage source={Images.icMoreCircle} height={Responsive.width(24)} width={Responsive.width(24)} onPress={onOpenSettingDialog} />}
        />
        <Text style={styles.textWaivlength}>Waivlength</Text>
        <View style={[Layout.rowCenter]}>
            <CustomImage height={Responsive.height(15)} width={Responsive.width(20)} source={Images.icChatRoom} style={{ paddingHorizontal: Responsive.width(15) }} />
            <Text style={styles.text44486FSemiBold14}>Chat Room</Text>
        </View>
        <View style={[Layout.rowCenter, { marginTop: Responsive.height(16) }]}>
            <TouchableOpacity
                style={[Layout.rowCenter, styles.buttonInvite]}
                onPress={() => {
                    EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_INVITE_DIALOG, {})
                }}>
                <CustomImage height={Responsive.height(18)} width={Responsive.width(18)} source={Images.icProfileAdd} style={{ marginRight: Responsive.width(9) }} />
                <Text style={styles.textInvite}>Invite</Text>
            </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <SectionList
                ItemSeparatorComponent={FlatListItemSeparator}
                sections={[
                    { index: 0, title: 'INTERNAL SPACE', data: INTERNAL_LIST },
                    { index: 1, title: 'WELCOME WAIVERS', data: WELCOME_WAIVERS },
                ]}
                renderSectionHeader={({ section }) => (
                    <View style={[Layout.fullWidth, Layout.rowHCenter, styles.viewSectionHeader]}>
                        <Text style={[styles.textChatRoom, {}]}>{section.title}</Text>

                        <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} styleImage={{ width: Responsive.height(12), height: Responsive.height(12) }} source={Images.icPlus} onPress={() => { navigate('CreateNewChannel') }} />
                    </View>
                )}
                renderItem={({ item }) => item.type === 'internal' ? (
                    // Item for the FlatListItems
                    <View style={[Layout.fullWidth, Layout.rowHCenter]}>
                        <View style={[Layout.fill, styles.viewChildItem, Layout.rowHCenter]}>
                            <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} source={Images.icChatRoomLock} />
                            <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginLeft: Responsive.width(3) }]}>
                                <Text style={[styles.textChatRoom, {}]}>{item.name}</Text>
                                <View style={[Layout.rowHCenter]}>
                                    <View style={[Layout.rowCenter, styles.viewCount]}>
                                        <Text style={styles.textCount}>+2</Text>
                                    </View>
                                    <CustomImage height={Responsive.height(8.44)} width={Responsive.height(4.99)} source={Images.icChatroomArrowRight} />
                                </View>

                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={[Layout.fullWidth, Layout.rowHCenter]}>
                        <View style={[Layout.fill, styles.viewChildItem, Layout.rowHCenter]}>
                            <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} source={Images.icChatRoomLock} />
                            <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginLeft: Responsive.width(3) }]}>
                                <Text style={[styles.textChatRoom, {}]}>{item.name}</Text>
                                <View style={[Layout.rowHCenter]}>
                                    <View style={[Layout.rowCenter, styles.viewCount]}>
                                        <Text style={styles.textCount}>+2</Text>
                                    </View>
                                    <CustomImage height={Responsive.height(8.44)} width={Responsive.height(4.99)} source={Images.icChatroomArrowRight} />
                                </View>

                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index}
            />

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default GroupMessagingOverviewContainer

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
    buttonInvite: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(27),
        height: Responsive.height(46),
        width: Responsive.width(214),
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
    viewChildItem: {
        backgroundColor: 'white',
        borderRadius: Responsive.height(16),
        height: Responsive.height(53),
        paddingHorizontal: Responsive.width(14),
        marginHorizontal: Responsive.width(16),
        marginBottom: Responsive.height(6)
    },
    viewCount: {
        backgroundColor: '#5D5FEF',
        minWidth: Responsive.height(18),
        minHeight: Responsive.height(18),
        marginRight: Responsive.width(7),
        borderRadius: Responsive.width(16),
        paddingHorizontal: Responsive.width(3)
    },
    textCount: {
        fontSize: Responsive.font(11),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
    }

});

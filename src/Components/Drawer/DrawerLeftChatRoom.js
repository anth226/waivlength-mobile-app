import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { CustomImage } from '@/Components'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'

const DrawerLeftChatRoom = ({ style, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const onOpenGroupConversationOption = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_OPTION_DIALOG, {})
    };

    const onOpenGroupConversationInvite = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_INVITE_DIALOG, {})
    };

    const onOpenGroupConversationEvent = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_EVENT_DIALOG, {})
    };

    return (<View style={[Layout.fill, Layout.row]}>
        <View style={styles.listTabWrapper}>
            <View style={{ marginLeft: Responsive.width(2) }}>
                <View style={styles.listTabWrapperCircleWhite}>
                    <CustomImage height={Responsive.width(26)} width={Responsive.width(26)} source={Images.icMessagesTab} />
                </View>
                <View style={styles.circleUnread}>
                    <Text style={styles.textUnread}>12</Text>
                </View>
            </View>

            <View style={styles.viewStrokeCircle}>
                <CustomImage height={Responsive.width(62)} width={Responsive.width(62)} source={Images.icStrokeGradient} style={{ position: 'absolute' }} />
                <CustomImage height={Responsive.width(56)} width={Responsive.width(56)} source={Images.icGradientCircle} style={{ position: 'absolute' }} />
                <CustomImage height={Responsive.width(35)} width={Responsive.width(30)} source={Images.icWaivlength} style={{ position: 'absolute' }} />
            </View>

            <View>
                <View style={styles.listTabWrapperCircleWhite}>
                    <CustomImage height={Responsive.width(56)} width={Responsive.width(56)} source={Images.icCircleTab1506} />
                </View>
                <View style={styles.circleUnread}>
                    <Text style={styles.textUnread}>12</Text>
                </View>
            </View>

            <View>
                <View style={styles.listTabWrapperCircleWhite}>
                    <CustomImage height={Responsive.width(56)} width={Responsive.width(56)} source={Images.icCircleTab1507} />
                </View>
                <View style={styles.circleUnread}>
                    <Text style={styles.textUnread}>12</Text>
                </View>
            </View>

            <View style={styles.listTabWrapperBoundButtonAdd}>
                <CustomImage height={Responsive.width(30)} width={Responsive.width(30)} source={Images.icAddTab} />
            </View>
        </View>
        <View style={styles.listContentWrapper}>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(12) }]}>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icChatRoom} style={{ paddingHorizontal: Responsive.width(15) }} />
                <Text style={styles.textChatRoom}>Chat Room</Text>
                <CustomImage height={Responsive.height(24)} width={Responsive.height(24)} source={Images.icActionOption} onPress={onOpenGroupConversationOption} />
            </View>
            <View style={{ paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(8) }}>
                <TouchableOpacity
                    style={[Layout.fullWidth, Common.button.outlineRounded, styles.buttonInvite]}
                    onPress={onOpenGroupConversationInvite}
                >
                    <CustomImage height={Responsive.height(18)} width={Responsive.height(18)} source={Images.icAddProfile} />
                    <Text style={styles.textButtonInvite}>Invite</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(30) }]}
                onPress={onOpenGroupConversationEvent}
            >
                <CustomImage height={Responsive.height(24)} width={Responsive.height(24)} source={Images.icCalendar} tintColor={'#44486F'} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={styles.textChatRoom}>EVENTS</Text>
            </TouchableOpacity>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(10) }]}>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icChatRoom} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={styles.textChatRoom}>Group Chat</Text>
            </View>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginTop: Responsive.height(34) }]}>
                <CustomImage height={Responsive.height(10)} width={Responsive.height(10)} source={Images.icArrowDown2} tintColor={'#737892'} style={{ paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {}]}>INTERNAL SPACE</Text>
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} styleImage={{ width: Responsive.height(12), height: Responsive.height(12) }} source={Images.icPlus} onPress={() => { navigate('CreateNewChannel') }} />
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icChatRoomLock} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>admin-only</Text>
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icChatRoomLock} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>admin-only</Text>
            </View>


            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginTop: Responsive.height(34) }]}>
                <CustomImage height={Responsive.height(10)} width={Responsive.height(10)} source={Images.icArrowDown2} tintColor={'#737892'} style={{ paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {}]}>VERIFY YOURSELF FIRST</Text>
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} styleImage={{ width: Responsive.height(12), height: Responsive.height(12) }} source={Images.icPlus} onPress={() => { navigate('CreateNewChannel') }} />
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icChatRoomLock} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>verify</Text>
            </View>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginTop: Responsive.height(34) }]}>
                <CustomImage height={Responsive.height(10)} width={Responsive.height(10)} source={Images.icArrowDown2} tintColor={'#737892'} style={{ paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {}]}>WELCOME WAIVERS</Text>
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} styleImage={{ width: Responsive.height(12), height: Responsive.height(12) }} source={Images.icPlus} onPress={() => { navigate('CreateNewChannel') }} />
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icRules} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>📄 -rules</Text>
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icAnnouncement} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>📢-announcement</Text>
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icChatRoomLock} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>👋-welcome</Text>
            </View>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginTop: Responsive.height(34) }]}>
                <CustomImage height={Responsive.height(10)} width={Responsive.height(10)} source={Images.icArrowDown2} tintColor={'#737892'} style={{ paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {}]}>WAIVLENGTH</Text>
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} styleImage={{ width: Responsive.height(12), height: Responsive.height(12) }} source={Images.icPlus} onPress={() => { navigate('CreateNewChannel') }} />
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icChatRoomLock} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>🔍 - about-us</Text>
            </View>

        </View>
    </View>)
}

DrawerLeftChatRoom.propTypes = {
    style: PropTypes.any,
}

DrawerLeftChatRoom.defaultProps = {
    style: {}
}

export default DrawerLeftChatRoom


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    listTabWrapper: {
        width: Responsive.width(79),
        height: '100%',
    },
    listTabWrapperCircleWhite: {
        height: Responsive.width(56),
        width: Responsive.width(56),
        backgroundColor: '#ffffff',
        borderRadius: Responsive.width(56 / 2.0),
        marginTop: Responsive.height(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewStrokeCircle: {
        width: Responsive.width(62),
        height: Responsive.width(62),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Responsive.height(10),
        marginRight: Responsive.width(10),
    },
    circleUnread: {
        backgroundColor: '#FA4D56', width: Responsive.width(20), height: Responsive.width(20), position: 'absolute',
        right: Responsive.width(20), top: Responsive.height(5), zIndex: 2,
        borderRadius: Responsive.width(10), alignItems: 'center',
        justifyContent: 'center',
    },
    textUnread: {
        color: '#ffffff',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
    },
    listTabWrapperBoundButtonAdd: {
        height: Responsive.width(56),
        width: Responsive.width(56),
        backgroundColor: '#ffffff',
        borderRadius: Responsive.width(56 / 2.0),
        marginTop: Responsive.height(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#24A148',
        borderWidth: Responsive.width(2),
    },
    listContentWrapper: {
        flex: 1,
        height: '100%',
        backgroundColor: '#ffffff',
        borderRadius: Responsive.height(10),
        flexDirection: 'column'
    },
    textChatRoom: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#272D37',
        flex: 1
    },
    buttonInvite: {
        backgroundColor: '#fff',
        borderColor: '#5D5FEF',
        borderRadius: Responsive.height(10),
        height: Responsive.height(46),
        flexDirection: 'row'
    },
    textButtonInvite: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        marginLeft: Responsive.width(10)
    }

});
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet, SectionList } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { CustomImage, Avatar } from '@/Components'
import EventBus from 'react-native-event-bus';
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import { EVENTS } from '@/Constants';

const DrawerRightChatRoom = ({ style, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const onOpenGroupConversationNotification = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_NOTIFICATION_DIALOG, {})
    };


    let A = [
        { id: '1', value: 'Afghanistan', type: 'text' },
        { id: '2', value: 'Afghanistan', type: 'text' },
        { id: '3', value: 'Afghanistan', type: 'text' },
    ];
    let B = [
        { id: '4', value: 'Benin', type: 'bot' },
        { id: '5', value: 'Bhutan', type: 'bot' },
        { id: '6', value: 'Bosnia', type: 'bot' },
        { id: '7', value: 'Botswana', type: 'bot' },
        { id: '8', value: 'Brazil', type: 'bot' },
        { id: '9', value: 'Brunei', type: 'bot' },
        { id: '10', value: 'Bulgaria', type: 'bot' },
    ];
    let C = [
        { id: '11', value: 'Cambodia', type: 'text' },
        { id: '12', value: 'Cameroon', type: 'text' },
        { id: '13', value: 'Canada', type: 'text' },
        { id: '14', value: 'Cabo', type: 'text' },
    ];

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={styles.listItemSeparatorStyle} />
        );
    };


    return (<View style={[Layout.fill, Layout.row]}>

        <View style={styles.listContentWrapper}>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(12) }]}>
                <CustomImage height={Responsive.height(15)} width={Responsive.width(20)} source={Images.icChatRoom} style={{ paddingHorizontal: Responsive.width(15) }} />
                <Text style={styles.textChatRoom}>Chat Room</Text>
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(24) }]}>

                <TouchableOpacity
                    style={[styles.buttonTab]}
                    onPress={() => navigate('PinnedMessage')}
                >
                    <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icPinDrawerRight} />
                    <Text style={[styles.textButtonTab, { marginTop: Responsive.height(5) }]}>Pins</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={[styles.buttonTab, { flex: 1 }]}
                    onPress={onOpenGroupConversationNotification}
                >
                    <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icNotificationDrawerRight} />
                    <Text style={[styles.textButtonTab, { marginTop: Responsive.height(5) }]}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonTab]}
                >
                    <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icSettingDrawerRight} />
                    <Text style={[styles.textButtonTab, { marginTop: Responsive.height(5) }]}>Settings</Text>
                </TouchableOpacity>

            </View>
            <View style={{ paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(28) }}>
                <TouchableOpacity
                    style={[Layout.fullWidth, styles.buttonInvite]}
                >
                    <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icInviteDrawerRight} />
                    <Text style={styles.textButtonInvite}>Invite Members</Text>
                </TouchableOpacity>

            </View>

            <View style={{ flex: 1, paddingHorizontal: Responsive.width(20)}}>

                <SectionList
                    ItemSeparatorComponent={FlatListItemSeparator}
                    sections={[
                        { index: 0, title: 'WAIV CORE TEAM - CEO - 1', data: A },
                        { index: 1, title: 'WAIV CORE TEAM - CMO - 1', data: B },
                        { index: 2, title: 'BOTS - 3', data: C },
                    ]}
                    renderSectionHeader={({ section }) => (
                        
                        <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginTop: section.index === 0 ? 0 : Responsive.height(34),
                        marginBottom: Responsive.height(10) }]}>
                            <Text style={[styles.textChatRoom, {}]}>{section.title}</Text>
                        </View>
                    )}
                    renderItem={({ item }) => item.type === 'bot' ? (
                        // Item for the FlatListItems
                        <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginBottom: Responsive.height(10) }]}>
                            <Avatar
                                isShowDot={false}
                                imageStyle={[styles.avatarImage, { width: Responsive.width(26), height: Responsive.width(26), borderRadius: Responsive.width(15) }]}
                                url={'https://picsum.photos/200/200'}
                                firstName={"A"}
                                lastName={"A"} />

                            <View style={[Layout.fullWidth]}>
                                <View style={[Layout.row]}>
                                    <Text style={[styles.textWrapChatRoom, {}]}>{item.value}</Text>
                                    <View style={{
                                        minWidth: Responsive.width(20),
                                        paddingVertical: Responsive.height(2),
                                        borderRadius: Responsive.width(6),
                                        backgroundColor: '#5b63e6',
                                        marginLeft: Responsive.width(5),
                                        marginRight: Responsive.width(5),
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingHorizontal: Responsive.width(5),
                                    }}>
                
                                        <CustomImage height={Responsive.height(10)} width={Responsive.width(12)} source={Images.icCheckBot} />
                                        <Text style={[styles.textBot, {marginLeft: Responsive.width(5), marginTop: Responsive.height(3)}]}>BOT</Text>
                                    </View>
                                </View>
                                <Text style={styles.textMessageChatRoom}>{item.value}</Text>
                            </View>


                        </View>
                    ) : (
                        <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginBottom: Responsive.height(10) }]}>
                            <Avatar
                                isShowDot={false}
                                imageStyle={styles.avatarImage}
                                url={'https://picsum.photos/200/200'}
                                firstName={"A"}
                                lastName={"A"} />
                            <Text style={[styles.textChatRoom, {}]}>{item.value}</Text>

                        </View>
                    )}
                    keyExtractor={(item, index) => index}
                />

            </View>

        </View>
    </View>)
}

DrawerRightChatRoom.propTypes = {
    style: PropTypes.any,
}

DrawerRightChatRoom.defaultProps = {
    style: {}
}

export default DrawerRightChatRoom


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    listTabWrapper: {
        width: Responsive.width(79),
        height: '100%',
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
        color: '#44486F',
        flex: 1
    },
    textWrapChatRoom: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#44486F',
    },
    textMessageChatRoom: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(11),
        color: '#787C92',
        flex: 1
    },
    textBot: {
        color: '#ffffff', fontSize: Responsive.font(10),
        fontFamily: 'Poppins-SemiBold',
    },
    buttonTab: {
        backgroundColor: '#fff',
        borderColor: '#5D5FEF',
        borderRadius: Responsive.height(10),
        height: Responsive.height(46),
        alignItems: 'center',
    },
    textButtonTab: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
        color: '#44486F',
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
    },
    avatarImage: {
        width: Responsive.width(26),
        height: Responsive.width(26),
        borderRadius: Responsive.width(13),
        marginRight: Responsive.width(9),
    }

});
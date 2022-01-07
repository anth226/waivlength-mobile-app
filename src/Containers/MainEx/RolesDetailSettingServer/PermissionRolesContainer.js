import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, SectionList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';

import { CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const PermissionRolesContainer = ({ goBack }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const onOpen = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_CREATE_AUDIO_ROOM_DIALOG, {})
    };

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

    const GENERAL_LIST = [
        { id: '1', name: 'View channels', description: 'Allow members to view channels by default(excluding private channels).', selected: true },
        { id: '2', name: 'Manage channels', description: 'Allows members to create, edit, or delete channels.', selected: false },
        { id: '3', name: 'Manage roles', description: 'Allows members to create new roles and edit or delete roles lower than their highest role. Also allows members to change permissions of individual channels that they have access to.', selected: false },
        { id: '4', name: 'Manage server', description: 'Allows members to change this server’s name and switch regions.', selected: false },
    ];

    const MEMBERSHIP_LIST = [
        { id: '1', name: 'Create invite', description: 'Allows members to invite new people to this server.', selected: true },
        { id: '2', name: 'Kick members', description: 'Allows members to remove other members from this server. Kicked members will be able to rejoin if they have another invite.', selected: false },
        { id: '3', name: 'Ban members', description: 'Allows members to permanently ban other member from this server.', selected: false },
    ];

    const TEXT_CHANNEL_LIST = [
        { id: '1', name: 'Send messages', description: 'Allows members to send messages in text channels.', selected: true },
        { id: '2', name: 'Send messages in threads', description: 'Allows members to send messages in threads.', selected: false },
        { id: '3', name: 'Create public threads', description: 'Allows members to create threads that everyone in a channel can view.', selected: false },
        { id: '4', name: 'Embed links', description: 'Allows links that members share to show embedded content in text channels.', selected: false },
        { id: '5', name: 'Attach files', description: 'Allows members to upload files or media in text channels.', selected: false },
        { id: '6', name: 'Add reactions', description: 'Allows members to add new emoji reactions to a message. If this permission is disabled, members can still react using any existing reactions on a message.', selected: false },
        { id: '7', name: 'Mention @everyone, @here, and all roles', description: 'Allows members to use @everyone(everyone in the server) or @here(only online members in that channel). They can also @mention all roles, even if the role’s ”Allow anyone to mention this role” permission is disabled.', selected: false },
        { id: '8', name: 'Manage messages', description: 'Allows members to delete messages by other members or pin any message.', selected: false },
        { id: '9', name: 'Manage threads', description: 'Allows members to rename, delete, archive/unarchive, and turn on slow mode for threads. They can also view private threads.', selected: false },
        { id: '10', name: 'Read message history', description: 'Allows members to read previous messages sent in channels. If this permission is disabled, members only see messages sent when they are online and focused on that channel.', selected: false },
    ];

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={[styles.line, { marginHorizontal: Responsive.width(16) }]} />
        );
    };

    const FlatListItemFooterComponent = () => {
        return (
            <View style={[{ height: Responsive.height(20) }]} />
        );
    }


    return (<View style={[Layout.fill, styles.parentContainer]} >
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: '#e9eef5' }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <SectionList
                ItemSeparatorComponent={FlatListItemSeparator}
                ListFooterComponent={FlatListItemFooterComponent}
                sections={[
                    {
                        index: 0, title: 'General server permissions', data: GENERAL_LIST.map((item, index) => {
                            item.index = index;
                            item.isLastIndex = (index === (GENERAL_LIST.length > 0 ? GENERAL_LIST.length - 1 : 0))
                            return item;
                        })
                    },
                    {
                        index: 0, title: 'Membership permissions', data: MEMBERSHIP_LIST.map((item, index) => {
                            item.index = index;
                            item.isLastIndex = (index === (MEMBERSHIP_LIST.length > 0 ? MEMBERSHIP_LIST.length - 1 : 0))
                            return item;
                        })
                    },
                    {
                        index: 0, title: 'Text channel permissions', data: TEXT_CHANNEL_LIST.map((item, index) => {
                            item.index = index;
                            item.isLastIndex = (index === (TEXT_CHANNEL_LIST.length > 0 ? TEXT_CHANNEL_LIST.length - 1 : 0))
                            return item;
                        })
                    }
                ]}
                renderSectionHeader={({ section }) => (
                    <View style={[Layout.fullWidth, Layout.rowHCenter, styles.viewSectionHeader]}>
                        <Text style={[styles.textSectionHeader, {}]}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    // Item for the FlatListItems
                    <View style={[Layout.fullWidth]}>
                        <View style={[Layout.fill, Layout.rowHCenter, styles.viewItemWrapper, {
                            borderTopLeftRadius: item.index === 0 ? Responsive.height(16) : 0,
                            borderTopRightRadius: item.index === 0 ? Responsive.height(16) : 0,
                            borderBottomLeftRadius: item.isLastIndex ? Responsive.height(16) : 0,
                            borderBottomRightRadius: item.isLastIndex ? Responsive.height(16) : 0,
                        }]}>
                            <View style={Layout.fill}>
                                <Text style={[styles.textSectionHeader, {}]}>{item.name}</Text>
                                <Text style={[styles.textDescription, {}]}>{item.description}</Text>
                            </View>
                            <Switch
                                style={styles.switch}
                                renderActiveText={false}
                                renderInActiveText={false}
                                backgroundInactive='#A2A9B0'
                                backgroundActive='#5E60EB'
                                circleBorderInactiveColor='#A2A9B0'
                                circleBorderActiveColor='#5E60EB'
                                circleBorderWidth={2}
                                onValueChange={(val) => console.log(val)}
                                value={false}
                                circleSize={30}
                            />
                        </View>

                    </View>
                )}
                keyExtractor={(item, index) => index}
            />
        </KeyboardAvoidingView>
    </View>)
}

export default PermissionRolesContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    parentContainer: {
        backgroundColor: 'transparent'
    },

    text242A31Medium14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.width(22),
    },
    text242A31Regular12: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.width(22),
    },
    viewSectionHeader: {
        paddingHorizontal: Responsive.width(17),
        marginTop: Responsive.height(15),
    },
    textSectionHeader: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        flex: 1,
    },
    textDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        color: '#525563',
        flex: 1,
    },
    viewItemWrapper: {
        paddingHorizontal: Responsive.width(16),
        paddingVertical: Responsive.height(15),
        backgroundColor: 'rgba(247, 249, 250, 1.0)',
        marginHorizontal: Responsive.height(16),
    },
    line: {
        backgroundColor: 'rgba(220, 221, 223, 1.0)',
        height: Responsive.height(1)
    },
    switch: {
        width: Responsive.width(51),
        height: Responsive.height(30),
    },

});

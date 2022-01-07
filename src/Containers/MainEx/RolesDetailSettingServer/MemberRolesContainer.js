import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';

import { CustomImage, Avatar, AvatarGroup, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const MemberRolesContainer = ({ goBack }) => {
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

    const DATA = [
        {
            id: 1,
            name: "Linnie",
            url: "https://picsum.photos/200/200",
            bio: "I am the sunshine",
            unRead: 4,
            time: "02:17",
            isVerified: true
        },
        {
            id: 2,
            name: "Ruth",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            unRead: 4,
            time: "02:17",
            isVerified: true
        },
        {
            id: 3,
            name: "Edgar",
            url: "",
            bio: "Change ain't easy",
            unRead: 4,
            time: "02:17",
            isVerified: true
        },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[Layout.fullWidth, styles.viewItemWrapper, Layout.rowHCenter, {paddingHorizontal: Responsive.width(16)}]}>
                <Avatar
                    isShowDot={false}
                    imageStyle={styles.avatarImage}
                    url={'https://picsum.photos/200/200'}
                    firstName={"A"}
                    lastName={"A"} />
                <View style={{ width: Responsive.width(14) }} />
                <Text style={[styles.text242A31Medium14, {}]}>{item.name}</Text>
                <Text style={[styles.textUsername, {}]}> @username</Text>
                <View style={[styles.viewVerifiedWrapper, { marginLeft: Responsive.width(3) }]}>
                    <CustomImage source={item.isVerified ? Images.icUserChatVerified : Images.icUserChatNotVerified} width={Responsive.height(12)} height={Responsive.height(12)} />
                </View>
                <View style={Layout.fill} />
                <CustomImage width={Responsive.height(25)} height={Responsive.height(25)} source={Images.icClose} />
            </TouchableOpacity>
        )
    }

    return (<View style={[Layout.fill, styles.parentContainer]} >
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: '#e9eef5' }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill, { paddingHorizontal: Responsive.width(16), paddingTop: Responsive.height(15) }]}>
                <View style={[Layout.fullWidth, { paddingHorizontal: Responsive.width(4) }]}>
                    <View style={[Layout.fill, styles.searchWrapper, Layout.rowHCenter]}>
                        <TextInput
                            //onChangeText={text => setChannelName(text)}
                            editable={true}
                            //value={channelName}
                            placeholder={'Invite your friends to join Waivlength'}
                            placeholderTextColor={'#ADAEC4'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <CustomImage width={Responsive.height(16)} height={Responsive.height(16)} source={Images.icSearch} />
                    </View>
                </View>
                <View style={{ height: Responsive.height(15) }} />
                <View style={[styles.viewActionWrapper, Layout.rowHCenter, Layout.fullWidth, { justifyContent: 'space-between' }]}>
                    <View style={[Layout.rowHCenter]}>
                        <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icInviteDrawerRight} tintColor={'#5D5FEF'} />
                        <Text style={[styles.text5D5FEFSemiBold14, { marginLeft: Responsive.width(7) }]}>Add members</Text>
                    </View>
                    <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
                </View>
                <View style={{ height: Responsive.height(10) }} />
                <View style={[styles.viewActionWrapper, Layout.fullWidth, {paddingHorizontal: 0}]}>
                    <FlatList
                        nestedScrollEnabled={true}
                        style={[Layout.fill]}
                        data={DATA}
                        renderItem={renderItem}
                        //ListHeaderComponent={<View style={{ height: Responsive.height(10) }} />}
                        ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                        keyExtractor={(item) => item.id} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </View>)
}

export default MemberRolesContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    parentContainer: {
        backgroundColor: 'transparent'
    },
    searchWrapper: {
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        borderRadius: Responsive.height(24),
        borderWidth: Responsive.height(1),
        borderColor: '#E1E2EF',
        height: Responsive.height(44),
        paddingHorizontal: Responsive.width(16)
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(12),
        height: Responsive.height(44),
        fontFamily: 'Poppins-Medium',
    },
    text242A31Medium14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(22),
    },
    textUsername: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'rgba(125,128,147,1.0)'
    },
    text5D5FEFSemiBold14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#5D5FEF',
        lineHeight: Responsive.height(22),
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        paddingHorizontal: Responsive.width(16),
    },
    text242A31Regular12: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.width(22),
    },
    line: {
        backgroundColor: 'rgba(220, 221, 223, 1.0)',
        height: Responsive.height(1)
    },
    viewItemWrapper: {
        paddingVertical: Responsive.height(15),
    },
    avatarImage: {
        width: Responsive.width(26),
        height: Responsive.width(26),
        borderRadius: Responsive.width(13),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
    },

});

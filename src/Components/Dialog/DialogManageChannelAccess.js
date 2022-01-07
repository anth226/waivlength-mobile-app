import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, KeyboardAvoidingView, SectionList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage, Avatar } from '@/Components'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DialogManageChannelAccess = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const ROLE_LIST = [
        { id: '1', name: 'Admin', selected: true, role: 'Manager', type: 'role' },
        { id: '2', name: 'WAIV CORE TEAM - COO', selected: false, role: 'Moderator',type: 'role' },
        { id: '3', name: 'Team Leader', selected: false, role: 'Manager',type: 'role' },
    ];
    const MEMBER_LIST = [
        { id: '1', name: 'Faruk Alvi', selected: false, role: 'Manager', type: 'member' },
    ];

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={[styles.line, { marginHorizontal: Responsive.width(16) }]} />
        );
    };

    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textHeader}>Who can access?</Text>
                    <View style={Layout.fill} />
                </View>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <CustomImage width={Responsive.height(18)} height={Responsive.height(18)} source={Images.icChatRoomLock} />
                    <View style={{ width: Responsive.width(5) }} />
                    <Text style={styles.textSubHeader}>admin-only</Text>
                    <View style={Layout.fill} />
                </View>
                <View style={{ height: Responsive.height(25) }} />
                <View style={[Layout.fullWidth, styles.line]} />
                <View style={{ height: Responsive.height(20) }} />
                <View style={[Layout.fullWidth, Layout.rowCenter, { paddingHorizontal: Responsive.width(20) }]}>
                    <TouchableOpacity style={[styles.buttonAdd, Layout.rowCenter]}>
                        <CustomImage height={Responsive.height(22)} width={Responsive.height(22)} source={Images.icInviteDrawerRight} tintColor={'white'} />
                        <Text style={styles.textAdd}>Add members or roles</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView
                    {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                    style={[Layout.fill]}
                >
                    <SectionList
                        ItemSeparatorComponent={FlatListItemSeparator}
                        sections={[
                            {
                                index: 0, title: 'ROLES - 3', data: ROLE_LIST.map((item, index) => {
                                    item.index = index;
                                    item.isLastIndex = (index === (ROLE_LIST.length > 0 ? ROLE_LIST.length - 1 : 0))
                                    return item;
                                })
                            },
                            {
                                index: 1, title: 'MEMBERS - 1', data: MEMBER_LIST.map((item, index) => {
                                    item.index = index;
                                    item.isLastIndex = index === (MEMBER_LIST.length > 0 ? MEMBER_LIST.length - 1 : 0);
                                    return item;
                                })
                            },
                        ]}
                        renderSectionHeader={({ section }) => (
                            <View style={[Layout.fullWidth, Layout.rowHCenter, styles.viewSectionHeader]}>
                                <Text style={[styles.textSectionHeader, {}]}>{section.title}</Text>
                            </View>
                        )}
                        renderItem={({ item }) => item.type === 'role' ? (
                            // Item for the FlatListItems
                            <View style={[Layout.fullWidth]}>
                                <View style={[Layout.fill, Layout.rowHCenter, styles.viewItemWrapper, {
                                    borderTopLeftRadius: item.index === 0 ? Responsive.height(16) : 0,
                                    borderTopRightRadius: item.index === 0 ? Responsive.height(16) : 0,
                                    borderBottomLeftRadius: item.isLastIndex ? Responsive.height(16) : 0,
                                    borderBottomRightRadius: item.isLastIndex ? Responsive.height(16) : 0,
                                }]}>
                                    <View style={{ marginRight: Responsive.width(5) }}>
                                        <CustomImage source={Images.icAdminRole} width={Responsive.height(28)}
                                            height={Responsive.height(28)} />
                                    </View>
                                    <View style={Layout.fill}>
                                        <Text style={[styles.textChatRoom, {}]}>{item.name}</Text>
                                        <Text style={[styles.textRole, {}]}>{item.role}</Text>
                                    </View>
                                    <CustomImage width={Responsive.height(25)} height={Responsive.height(25)} source={Images.icClose} />
                                </View>

                            </View>
                        ) : (
                            <View style={[Layout.fullWidth]}>
                                <View style={[Layout.fill, Layout.rowHCenter, styles.viewItemWrapper, {
                                    borderTopLeftRadius: item.index === 0 ? Responsive.height(16) : 0,
                                    borderTopRightRadius: item.index === 0 ? Responsive.height(16) : 0,
                                    borderBottomLeftRadius: item.isLastIndex ? Responsive.height(16) : 0,
                                    borderBottomRightRadius: item.isLastIndex ? Responsive.height(16) : 0,
                                }]}>
                                    <View>
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
                                    <Text style={[styles.textChatRoom, {}]}>{item.name}{item.index}</Text>
                                    <CustomImage width={Responsive.height(25)} height={Responsive.height(25)} source={Images.icClose} />
                                </View>

                            </View>
                        )}
                        keyExtractor={(item, index) => index}
                    />

                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    </Modalize>)
}

DialogManageChannelAccess.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogManageChannelAccess.defaultProps = {
    style: {}
}

export default DialogManageChannelAccess


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textHeader: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        marginTop: Responsive.height(40),
    },
    textSubHeader: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        lineHeight: Responsive.width(22),
        color: '#44486F',
    },
    line: {
        backgroundColor: 'rgba(220, 221, 223, 1.0)',
        height: Responsive.height(1)
    },
    buttonAdd: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(27),
        height: Responsive.height(46),
        width: Responsive.width(214),
    },
    textAdd: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: 'white',
        marginLeft: Responsive.width(2)
    },
    textChatRoom: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        flex: 1,
        marginLeft: Responsive.width(13)
    },
    textRole: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#787C92',
        marginLeft: Responsive.width(13)
    },
    viewSectionHeader: {
        paddingHorizontal: Responsive.width(17),
        marginTop: Responsive.height(20),
    },
    textSectionHeader: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        flex: 1,
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
    },
    viewItemWrapper: {
        paddingHorizontal: Responsive.width(16),
        paddingVertical: Responsive.height(15),
        backgroundColor: 'white',
        marginHorizontal: Responsive.height(16),
    }

});
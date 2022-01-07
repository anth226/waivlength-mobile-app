import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, KeyboardAvoidingView, SectionList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage, Avatar } from '@/Components'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DialogAddMemberRole = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const ROLE_LIST = [
        { id: '1', name: 'Admin', selected: true, type: 'role' },
        { id: '2', name: 'WAIV CORE TEAM - COO', selected: false, type: 'role' },
        { id: '3', name: 'Team Leader', selected: false, type: 'role' },
    ];
    const MEMBER_LIST = [
        { id: '1', name: 'Faruk Alvi', selected: false, type: 'member' },
    ];

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={[styles.line, {marginLeft: Responsive.width(66)}]} />
        );
    };

    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textHeader}>Add members or roles</Text>
                    <View style={Layout.fill} />
                    <Text style={styles.textAdd}>Add</Text>
                </View>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <CustomImage width={Responsive.height(18)} height={Responsive.height(18)} source={Images.icChatRoomLock} />
                    <View style={{ width: Responsive.width(5) }} />
                    <Text style={styles.textSubHeader}>admin-only</Text>
                    <View style={Layout.fill} />
                </View>
                <View style={{ height: Responsive.height(25) }} />
                <View style={[Layout.fullWidth, styles.line]} />
                <View style={{ height: Responsive.height(18) }} />
                <View style={[Layout.fullWidth, { paddingHorizontal: Responsive.width(20) }]}>
                    <View style={[Layout.fill, styles.searchWrapper, Layout.rowHCenter]}>
                        <TextInput
                            //onChangeText={text => setChannelName(text)}
                            editable={true}
                            //value={channelName}
                            placeholder={'Search for Channel Roles or Members'}
                            placeholderTextColor={'#ADAEC4'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <CustomImage width={Responsive.height(16)} height={Responsive.height(16)} source={Images.icSearch} />
                    </View>
                </View>
                <KeyboardAvoidingView
                    {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                    style={[Layout.fill]}
                >
                    <SectionList
                        ItemSeparatorComponent={FlatListItemSeparator}
                        sections={[
                            { index: 0, title: 'ROLES - 3', data: ROLE_LIST },
                            { index: 1, title: 'MEMBERS - 1', data: MEMBER_LIST },
                        ]}
                        renderSectionHeader={({ section }) => (
                            <View style={[Layout.fullWidth, Layout.rowHCenter, styles.viewSectionHeader]}>
                                <Text style={[styles.textSectionHeader, {}]}>{section.title}</Text>
                            </View>
                        )}
                        renderItem={({ item }) => item.type === 'role' ? (
                            // Item for the FlatListItems
                            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(15) }]}>
                                <View style={{ marginRight: Responsive.width(10) }}>
                                    <CustomImage source={Images.icAdminRole} width={Responsive.height(28)}
                                        height={Responsive.height(28)} />
                                </View>
                                <Text style={[styles.textChatRoom, {}]}>{item.name}</Text>
                                <Icon
                                    size={Responsive.height(26)}
                                    color={item.selected ? '#5D5FEF' : '#ADAEC4'}
                                    name={item.selected ? 'check-box' : 'check-box-outline-blank'}
                                />
                            </View>
                        ) : (
                            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(15) }]}>
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
                                <Icon
                                    size={Responsive.height(26)}
                                    color={item.selected ? '#5D5FEF' : '#ADAEC4'}
                                    name={item.selected ? 'check-box' : 'check-box-outline-blank'}
                                />
                            </View>
                        )}
                        keyExtractor={(item, index) => index}
                    />

                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    </Modalize>)
}

DialogAddMemberRole.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogAddMemberRole.defaultProps = {
    style: {}
}

export default DialogAddMemberRole


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
    textAdd: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        lineHeight: Responsive.width(22),
        color: '#5D5FEF',
        marginTop: Responsive.height(40),
    },
    line: {
        backgroundColor: 'rgba(194, 199, 204, 1.0)',
        height: Responsive.height(1)
    },
    searchWrapper: {
        backgroundColor: 'white',
        borderRadius: Responsive.height(24),
        borderWidth: Responsive.height(1),
        borderColor: '#E1E2EF',
        height: Responsive.height(44),
        paddingHorizontal: Responsive.width(16)
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(12),
        height: Responsive.height(52),
        fontFamily: 'Poppins-Medium',
    },
    textChatRoom: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        flex: 1,
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


});
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, KeyboardAvoidingView, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage, Avatar, RadioButton} from '@/Components'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DialogAddMembers = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()

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
            <TouchableOpacity style={[Layout.fullWidth, styles.viewItemWrapper, Layout.rowHCenter, { paddingLeft: Responsive.width(16), paddingRight: Responsive.width(8)}]}>
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
                <RadioButton
                    selected={false}
                    size={Responsive.height(24)}
                    onPress={() => { }}
                    text={``}
                    isHtml={false}
                    textStyle={styles.textRadioButton}
                    style={{}}
                />
            </TouchableOpacity>
        )
    }

    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textHeader}>Add members</Text>
                    <View style={Layout.fill} />
                    <Text style={styles.textAdd}>Add</Text>
                </View>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textSubHeader}>WAIV CORE TEAM - CEO</Text>
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
                            placeholder={'Search for Members'}
                            placeholderTextColor={'#ADAEC4'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <CustomImage width={Responsive.height(16)} height={Responsive.height(16)} source={Images.icSearch} />
                    </View>
                </View>
                <View style={{ height: Responsive.height(15) }} />
                <KeyboardAvoidingView
                    {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                    style={[Layout.fill]}
                >
                    <View style={[styles.viewActionWrapper, Layout.fill]}>
                        <FlatList
                            nestedScrollEnabled={true}
                            style={[Layout.fill]}
                            data={DATA}
                            renderItem={renderItem}
                            //ListHeaderComponent={<View style={{ height: Responsive.height(10) }} />}
                            ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                            keyExtractor={(item) => item.id} />
                    </View>

                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    </Modalize>)
}

DialogAddMembers.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogAddMembers.defaultProps = {
    style: {}
}

export default DialogAddMembers


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
        height: Responsive.height(44),
        lineHeight: Responsive.height(44),
        fontFamily: 'Poppins-Medium',
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
    line: {
        backgroundColor: 'rgba(220, 221, 223, 1.0)',
        height: Responsive.height(1)
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        marginHorizontal: Responsive.width(16),
    },
    viewItemWrapper: {
        paddingVertical: Responsive.height(15),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
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


});
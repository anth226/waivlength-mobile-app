import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { Switch } from 'react-native-switch';
import EventBus from 'react-native-event-bus';
import { CustomImage } from '@/Components'
import { EVENTS } from '@/Constants'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'

const DialogGroupConversationOption = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()



    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(30), paddingHorizontal: Responsive.width(20) }]}>
                    <CustomImage width={Responsive.height(56)} height={Responsive.height(56)} source={Images.icLogoDark} />
                    <View style={Layout.fill} />
                </View>
                <Text style={styles.textGroupName}>Waivlength</Text>
                <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', marginTop: Responsive.height(15), paddingHorizontal: Responsive.width(20) }]}>
                    <View style={styles.dotOnline} />
                    <View style={{ width: Responsive.width(6) }} />
                    <Text style={styles.textCount}>11 Online</Text>

                    <View style={{ width: Responsive.width(39) }} />
                    <CustomImage width={Responsive.height(16)} height={Responsive.height(16)} source={Images.ic2Person} />
                    <View style={{ width: Responsive.width(6) }} />
                    <Text style={styles.textCount}>95 Members</Text>
                </View>
                <View style={{ height: Responsive.height(17) }} />
                <View style={[Layout.fullWidth, styles.line]} />

                <View style={[Layout.fullWidth, Layout.row, { paddingVertical: Responsive.height(10), paddingHorizontal: Responsive.width(30) }]}>
                    <TouchableOpacity style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomImage width={Responsive.height(22)} height={Responsive.height(22)} source={Images.icAddProfile2} />
                        <Text style={styles.textAction}>Invite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomImage width={Responsive.height(22)} height={Responsive.height(22)} source={Images.icNotification} />
                        <Text style={styles.textAction}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}
                        onPress={() => {
                            modalizeRef.current?.close();
                            navigate('SettingServer')
                        }}>
                        <CustomImage width={Responsive.height(22)} height={Responsive.height(22)} source={Images.icSetting} />
                        <Text style={styles.textAction}>Settings</Text>
                    </TouchableOpacity>
                </View>


                <View style={[Layout.fullWidth, styles.line]} />

                <View style={[Layout.fill, Layout.column, styles.groupActionWrapper, { marginHorizontal: Responsive.width(20) }]}>

                    <TouchableOpacity style={styles.itemAction}>
                        <Text style={styles.textGroupAction}>Create Channel</Text>
                    </TouchableOpacity>
                    <View style={[Layout.fullWidth, styles.lineAction]} />
                    <TouchableOpacity style={styles.itemAction}>
                        <Text style={styles.textGroupAction}>Create Category</Text>
                    </TouchableOpacity>
                    <View style={[Layout.fullWidth, styles.lineAction]} />
                    <TouchableOpacity style={styles.itemAction}>
                        <Text style={styles.textGroupAction}>Create Event</Text>
                    </TouchableOpacity>

                </View>


                <View style={[Layout.fill, Layout.column, styles.groupActionWrapper, { marginHorizontal: Responsive.width(20) }]}>

                    <TouchableOpacity style={styles.itemAction}>
                        <Text style={styles.textGroupAction}>Edit Server Profile</Text>
                    </TouchableOpacity>
                    <View style={[Layout.fullWidth, styles.lineAction]} />
                    <TouchableOpacity style={[styles.itemAction, { height: Responsive.height(75) }]}>
                        <View style={[Layout.fullWidth, Layout.row, {}]}>
                            <View style={[Layout.fill, Layout.column]}>
                                <Text style={styles.textGroupAction}>Allow Direct Messages</Text>
                                <Text style={styles.textSubGroupAction}>Allow Direct Messages</Text>
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
                    </TouchableOpacity>
                    <View style={[Layout.fullWidth, styles.lineAction]} />
                    <TouchableOpacity
                        style={styles.itemAction}
                        onPress={() => {
                            modalizeRef.current?.close();
                            navigate('ReportServer')
                        }}
                    >
                        <Text style={styles.textGroupAction}>Report Server</Text>
                    </TouchableOpacity>
                    <View style={[Layout.fullWidth, styles.lineAction]} />
                    <TouchableOpacity style={styles.itemAction}
                        onPress={() => {
                            modalizeRef.current?.close();
                            EventBus.getInstance().fireEvent(EVENTS.OPEN_GROUP_CONVERSATION_LEAVE_GROUP_DIALOG, {})
                        }}>
                        <Text style={[styles.textGroupAction, { color: '#DA1E28' }]}>Leave Server</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ height: Responsive.height(44) }} />

            </View>
        </ScrollView>
    </Modalize>)
}

DialogGroupConversationOption.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogGroupConversationOption.defaultProps = {
    style: {}
}

export default DialogGroupConversationOption


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textGroupName: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        marginTop: Responsive.height(15),
        paddingHorizontal: Responsive.width(20)
    },
    dotOnline: {
        width: Responsive.height(8),
        height: Responsive.height(8),
        backgroundColor: '#24A148',
        borderRadius: Responsive.height(4)
    },
    textCount: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31'
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1)
    },
    textAction: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        marginTop: Responsive.height(5)
    },
    groupActionWrapper: {
        marginTop: Responsive.height(20),
        backgroundColor: '#F0F3F8',
        borderRadius: Responsive.height(24)
    },
    itemAction: {
        height: Responsive.height(52),
        justifyContent: 'center',
        paddingHorizontal: Responsive.width(16)
    },
    lineAction: {
        backgroundColor: '#292D36',
        height: Responsive.height(1),
        opacity: 0.15
    },
    textGroupAction: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.width(22),
    },
    textSubGroupAction: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.width(22),
    },
    switch: {
        width: Responsive.width(51),
        height: Responsive.height(30),
    },


});
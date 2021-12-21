import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { CustomImage } from '@/Components'

const DrawerLeftChatRoom = ({ style, ...props }) => {
    const { Layout, Images, Common } = useTheme()




    return (<View style={[Layout.fill, Layout.row]}>
        <View style={styles.listTabWrapper}>
            <Text>HiHI</Text>
        </View>
        <View style={styles.listContentWrapper}>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(12) }]}>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icChatRoom} style={{ paddingHorizontal: Responsive.width(15) }} />
                <Text style={styles.textChatRoom}>Chat Room</Text>
                <CustomImage height={Responsive.height(24)} width={Responsive.height(24)} source={Images.icActionOption} onPress={() => { }} />
            </View>
            <View style={{ paddingHorizontal: Responsive.width(20) }}>
                <TouchableOpacity
                    style={[Layout.fullWidth, Common.button.outlineRounded, styles.buttonInvite]}
                >
                    <CustomImage height={Responsive.height(18)} width={Responsive.height(18)} source={Images.icAddProfile} />
                    <Text style={styles.textButtonInvite}>Invite</Text>
                </TouchableOpacity>

            </View>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(30) }]}>
                <CustomImage height={Responsive.height(24)} width={Responsive.height(24)} source={Images.icCalendar} tintColor={'#44486F'} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={styles.textChatRoom}>EVENTS</Text>
            </View>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(10) }]}>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icChatRoom} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={styles.textChatRoom}>Group Chat</Text>
            </View>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginTop: Responsive.height(34) }]}>
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} source={Images.icArrow} tintColor={'#737892'} style={{ transform: [{ rotate: '90deg' }], paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {  }]}>INTERNAL SPACE</Text>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icPlus} onPress={() => {}} />
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
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} source={Images.icArrow} tintColor={'#737892'} style={{ transform: [{ rotate: '90deg' }], paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {  }]}>VERIFY YOURSELF FIRST</Text>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icPlus} onPress={() => {}} />
            </View>
            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(2) }]}>
                <CustomImage height={Responsive.height(19)} width={Responsive.height(19)} source={Images.icChatRoomLock} style={{ paddingHorizontal: Responsive.width(15) }} />
                <View style={{ width: Responsive.width(10) }} />
                <Text style={[styles.textChatRoom, { paddingTop: Responsive.height(5) }]}>verify</Text>
            </View>

            <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingRight: Responsive.width(20), marginTop: Responsive.height(34) }]}>
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} source={Images.icArrow} tintColor={'#737892'} style={{ transform: [{ rotate: '90deg' }], paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {  }]}>WELCOME WAIVERS</Text>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icPlus} onPress={() => {}} />
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
                <CustomImage height={Responsive.height(20)} width={Responsive.height(20)} source={Images.icArrow} tintColor={'#737892'} style={{ transform: [{ rotate: '90deg' }], paddingHorizontal: Responsive.width(15) }} />
                <Text style={[styles.textChatRoom, {  }]}>WAIVLENGTH</Text>
                <CustomImage height={Responsive.height(12)} width={Responsive.height(12)} source={Images.icPlus} onPress={() => {}} />
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
        width: Responsive.width(60),
        height: '100%'
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
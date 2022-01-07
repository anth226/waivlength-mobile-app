import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { CustomImage, Avatar } from '@/Components'
import { Switch } from 'react-native-switch';
import QRCode from 'react-native-qrcode-svg';
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'

const DrawerLeftProfile = ({ style, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    {/* <TouchableOpacity onPress={() => {
           props.navigation.closeDrawer();
         }}>

         </TouchableOpacity> */}

    return (<View style={[Layout.fill]}>
        <View style={[Layout.fullWidth, styles.viewHeader]}>
            <View style={[Layout.rowHCenter, styles.viewAvatarWrapper, { justifyContent: 'space-between', marginRight: Responsive.width(25) }]}>
                <Avatar
                    isShowDot={false}
                    source={Images.onBoarding3}
                    imageWrapperStyle={[styles.avatar, { borderWidth: 0 }]}
                    imageStyle={[styles.avatarImage]}
                    url={""}
                />
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
            <Text style={styles.textDisplayName}>Muhammad Salim</Text>
            <Text style={styles.textUserName}>@MuhammadSalim</Text>

            <View style={styles.rowHCenter}>
                <TouchableOpacity style={[Layout.rowCenter, styles.buttonIdentify]}>
                    <Text style={styles.textIdentify}>0x1e67..f5a8</Text>
                </TouchableOpacity>
            </View>



        </View>
        <View style={styles.lines} />
        <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow, { marginTop: Responsive.height(15) }]}>
            <View style={{ width: Responsive.width(34) }}>
                <CustomImage source={Images.icProfileMenu} width={Responsive.height(13)} height={Responsive.height(17)} style={{marginLeft: Responsive.width(2)}}/>
            </View>
            <View style={[Layout.fill, Layout.rowHCenter]}>
                <Text style={styles.text30333ERegular13}>Profile</Text>
                <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
            </View>

        </TouchableOpacity>

        <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow]} onPress={()=> navigate('Monetization')}>
            <View style={{ width: Responsive.width(34) }}>
                <CustomImage source={Images.icMonetizationMenu} width={Responsive.height(19)} height={Responsive.height(13)} />
            </View>
            <View style={[Layout.fill, Layout.rowHCenter]}>
                <Text style={styles.text30333ERegular13}>Monetization</Text>
                <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
            </View>

        </TouchableOpacity>

        <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow]} onPress={()=> {
            navigate('InviteFriends')
        }}>
            <View style={{ width: Responsive.width(34) }}>
                <CustomImage source={Images.icInviteFriendMenu} width={Responsive.height(22)} height={Responsive.height(22)} />
            </View>
            <View style={[Layout.fill, Layout.rowHCenter]}>
                <Text style={styles.text30333ERegular13}>Invite Friends</Text>
                <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
            </View>

        </TouchableOpacity>

        <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow]}>
            <View style={{ width: Responsive.width(34) }}>
                <CustomImage source={Images.icBriefcase} width={Responsive.height(20)} height={Responsive.height(20)} />
            </View>
            <View style={[Layout.fill, Layout.rowHCenter]}>
                <Text style={styles.text30333ERegular13}>Set up business account</Text>
                <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
            </View>

        </TouchableOpacity>

        <TouchableOpacity style={[Layout.rowHCenter, styles.viewButtonRow]} onPress={()=> navigate('Settings')}>
            <View style={{ width: Responsive.width(34) }}>
                <CustomImage source={Images.icSettingPink} width={Responsive.height(17)} height={Responsive.height(17)} />
            </View>
            <View style={[Layout.fill, Layout.rowHCenter]}>
                <Text style={styles.text30333ERegular13}>Setting & Privacy</Text>
                <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} />
            </View>

        </TouchableOpacity>

        <View style={[styles.lines, { marginTop: Responsive.height(15) }]} />

        <Text style={styles.text30333ERegualar14}>Share Your Profile</Text>
        <View style={[Layout.rowCenter]}>
            <QRCode
                size={Responsive.height(41)}
                value="0x19B2295E14C643Ec2B23FEcC91954BF611f64cFc"
                color='#5D5FEF'
            // getRef={(c) => (this.svg = c)}
            />
        </View>
    </View>)
}

DrawerLeftProfile.propTypes = {
    style: PropTypes.any,
}

DrawerLeftProfile.defaultProps = {
    style: {}
}

export default DrawerLeftProfile


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textButtonInvite: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        marginLeft: Responsive.width(10)
    },
    viewHeader: {
        height: Responsive.height(254),
        backgroundColor: 'transparent'
    },
    viewAvatarWrapper: {
        height: Responsive.height(89),
        marginTop: Responsive.height(40),
        paddingLeft: Responsive.width(24),
    },
    avatar: {
        width: Responsive.height(89),
        height: Responsive.height(89),
        borderRadius: Responsive.height(89 / 2),
        borderWidth: 2,
        borderColor: '#C665F0',
    },
    avatarImage: {
        width: Responsive.height(87),
        height: Responsive.height(87),
        borderRadius: Responsive.height(87 / 2),
        backgroundColor: '#BBBEDD',
    },
    switch: {
        width: Responsive.width(51),
        height: Responsive.height(30),
    },
    textDisplayName: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(20),
        lineHeight: Responsive.height(40),
        color: '#141735',
        marginTop: Responsive.height(16),
        marginHorizontal: Responsive.width(24),
    },
    textUserName: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        lineHeight: Responsive.height(14),
        color: '#71737D',
        marginHorizontal: Responsive.width(24),
    },
    buttonIdentify: {
        marginTop: Responsive.height(6.9),
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(26),
        height: Responsive.height(28),
        width: Responsive.width(102),
        marginHorizontal: Responsive.width(24),
    },
    textIdentify: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
        lineHeight: Responsive.height(17.5),
        color: 'white',
        marginHorizontal: Responsive.width(13),
    },
    lines: {
        marginHorizontal: Responsive.width(22),
        backgroundColor: '#B7BAD3',
        height: Responsive.height(1),
    },
    viewButtonRow: {
        height: Responsive.height(54),
        marginHorizontal: Responsive.width(22),
    },
    text30333ERegular13: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(13),
        color: '#30333E',
        flex: 1
    },
    text30333ERegualar14: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        color: '#30333E',
        textAlign: 'center'
        ,
        marginTop: Responsive.height(30),
        marginBottom: Responsive.height(20),
    },
});
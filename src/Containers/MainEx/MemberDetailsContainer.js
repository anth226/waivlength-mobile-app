import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, Avatar, BackIcon, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigate, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const MemberDetailsContainer = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [channelName, setChannelName] = useState("");
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }


    useEffect(() => {
        init()
    })

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<Text style={styles.textTitle}>Edit Faruk</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>
                <View style={[Layout.fullWidth, Layout.rowCenter]}>
                    <Avatar
                        isShowDot={false}
                        imageStyle={styles.avatarImage}
                        url={'https://picsum.photos/200/200'}
                        firstName={"A"}
                        lastName={"A"} />
                </View>
                <View style={{ height: Responsive.height(6) }} />
                <View style={[Layout.fullWidth, Layout.rowCenter]}>
                    <View style={Layout.rowHCenter}>
                        <Text style={[styles.text242A31Medium14, {}]}>Faruk</Text>
                        <Text style={[styles.textUsername, {}]}> @username</Text>
                        <View style={[styles.viewVerifiedWrapper, { marginLeft: Responsive.width(3) }]}>
                            {/* <CustomImage source={item.isVerified ? Images.icUserChatVerified : Images.icUserChatNotVerified} width={Responsive.height(12)} height={Responsive.height(12)} /> */}
                            <CustomImage source={Images.icUserChatNotVerified} width={Responsive.height(12)} height={Responsive.height(12)} />
                        </View>
                    </View>

                </View>
                <Text style={styles.textSubTitle}>Roles</Text>
                <View style={[Layout.fullWidth, Layout.rowHCenter]}>
                    <TouchableOpacity style={[Layout.fill, Layout.rowHCenter, styles.viewActionWrapper]} onPress={()=> navigate('EditRoles')}>
                        <Text style={[Layout.fill, styles.textName]}>Edit roles</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </KeyboardAvoidingView>

        <View style={[Layout.fullWidth, Layout.rowCenter]}>
            <TouchableOpacity style={[styles.buttonWhiteWrapper, Layout.rowCenter]} onPress={()=> navigate('KickMembers')}>
                <Text style={styles.textWhiteButton}>Kick ‘Faruk’</Text>
            </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(10) }} />
        <View style={[Layout.fullWidth, Layout.rowCenter]}>
            <TouchableOpacity style={[styles.buttonRedWrapper, Layout.rowCenter]} onPress={()=> navigate('BanMembers')}>
                <Text style={styles.textRedButton}>Ban ‘Faruk’</Text>
            </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(20) }} />
    </SafeAreaView>)
}

export default MemberDetailsContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((16))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
    },
    textSubTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#272D37',
        marginLeft: Responsive.width(8),
        marginTop: Responsive.height(18),
        marginBottom: Responsive.height(10),
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        marginBottom: Responsive.height(5),
        paddingLeft: Responsive.width(16),
        paddingRight: Responsive.width(8)
    },
    textName: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
    },
    avatarImage: {
        width: Responsive.width(60),
        height: Responsive.width(60),
        borderRadius: Responsive.width(30),
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
    buttonWhiteWrapper: {
        backgroundColor: 'rgba(249, 251, 252, 1.0)',
        height: Responsive.height(46),
        borderRadius: Responsive.height(28),
        width: Responsive.width(214),
    },
    buttonRedWrapper: {
        backgroundColor: '#DA1E28',
        height: Responsive.height(46),
        borderRadius: Responsive.height(28),
        width: Responsive.width(214),
    },
    textWhiteButton: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#EC3939',
    },
    textRedButton: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
    },

});

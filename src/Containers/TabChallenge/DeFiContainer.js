import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, Avatar, AvatarGroup, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const DeFiContainer = ({ goBack }) => {
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
    const DATA_REWARD = [
        {
            id: 1,
            firstName: "Linnie",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
            bio: "I am the sunshine",
            unRead: 4,
            time: "02:17",
            type: 'top_post'
        },
    ]

    const DATA = [
        {
            id: 1,
            firstName: "Linnie",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
            bio: "I am the sunshine",
            unRead: 4,
            time: "02:17",
            type: 'top_post'
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            unRead: 4,
            time: "02:17"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            bio: "Change ain't easy",
            unRead: 4,
            time: "02:17"
        },
    ];


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column]}>
                    <View style={[Layout.fill, Layout.rowHCenter, {
                        backgroundColor: '#F3F6FA',
                        marginHorizontal: Responsive.width(20),
                        borderRadius: Responsive.width(16),
                        minHeight: Responsive.height(119)
                    }]}>
                        <View style={{
                            width: Responsive.height(97), height: Responsive.height(100),
                            backgroundColor: '#ffffff',
                            marginVertical: Responsive.height(10),
                            marginHorizontal: Responsive.height(10),
                            borderRadius: Responsive.height(16),
                        }}>
                            <CustomImage source={Images.icCrownChallenge} width={Responsive.height(97)} height={Responsive.height(100)} />
                        </View>

                        <View style={[Layout.fill, { marginTop: Responsive.height(10), marginRight: Responsive.height(10), marginLeft: Responsive.width(12) }]}>

                            <View style={[Layout.fill, Layout.row, { alignItems: 'flex-end' }]}>

                                <View style={[Layout.fill]}>

                                    <View style={[Layout.row]}>
                                        <Avatar
                                            isShowDot={false}
                                            imageStyle={styles.avatarImage}
                                            url={'https://picsum.photos/200/200'}
                                        />

                                        <Text style={styles.textNameLevel} >Bronze Prestige</Text>

                                    </View>


                                    <Text style={styles.textLevel} >Education Titile Gose Here Dummy Text</Text>

                                </View>

                            </View>

                            <View style={[Layout.rowHCenter, Layout.fill]}>
                                <Text style={[styles.textXPBar, { marginRight: Responsive.width(6) }]} >Engage :</Text>
                                <AvatarGroup height={Responsive.height(30)} text={'+40 People'} textStyle={styles.textAvatarGroup} />

                            </View>

                        </View>

                    </View>

                </View>

            </TouchableOpacity >
        );
    };

    return (<View style={[Layout.fill, styles.parentContainer]} >
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: '#e9eef5' }} />
        <View style={{ height: Responsive.height(1), backgroundColor: '#D5DDE5' }} />
        <View style={[Layout.column, {
            marginTop: Responsive.height(19),
            marginHorizontal: Responsive.width(20), backgroundColor: '#F3F6FA',
            borderRadius: Responsive.height(16),
            paddingHorizontal: Responsive.width(19),
            paddingVertical: Responsive.height(10),
        }]}>
            <Text style={styles.textNewWallets}>New Wallets</Text>
            <Text style={styles.textNewWalletsDescription}>You can create a new wallet of connect any existing one</Text>
            <View style={[Layout.rowHCenter, { justifyContent: 'space-between' }]}>
                <TouchableOpacity style={{
                    backgroundColor: '#5D5FEF',
                    borderRadius: Responsive.height(31),
                    width: Responsive.height(141),
                    height: Responsive.height(46),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={
                    () => navigate('CreateNewWallet')
                }>
                    <CustomImage source={Images.icPlusChallenge} width={Responsive.height(15)} height={Responsive.height(15)} />
                    
                    <Text style={styles.textCreate}>Create</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: '#FAFCFE',
                    borderRadius: Responsive.height(31),
                    width: Responsive.height(141),
                    height: Responsive.height(46),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={()=> navigate('ImportWallet')}>
                    <CustomImage source={Images.icImportChallenge} width={Responsive.height(15)} height={Responsive.height(15)} />
                    <Text style={styles.textImport}>Import</Text>
                </TouchableOpacity>
            </View>
        </View>

        <FlatList
            style={[Layout.fullWidth]}
            data={DATA_REWARD}
            renderItem={renderItem}
            scrollEnabled={false}
            ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
            keyExtractor={(item) => item.id} />
        <View style={[Layout.fill]}></View>
    </View>)
}

export default DeFiContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    parentContainer: {
        backgroundColor: 'transparent'
    },
    itemStyleWrapper: {
        borderRadius: Responsive.height(18),
        paddingRight: Responsive.height(13),
    },
    textNewWallets: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#2B2F3F',
    },
    textNewWalletsDescription: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#6A6E7E',
    },
    textCreate: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#ffffff',
        marginLeft: Responsive.width(10),
    },
    textImport: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#758299',
        marginLeft: Responsive.width(10),
    },
    viewCircle: {
        width: Responsive.height(85), height: Responsive.height(85),
        backgroundColor: '#EBE3FF', borderRadius: Responsive.width(67 / 2),
        alignItems: 'center', marginTop: Responsive.height(4),
    },
    textNameLevel: {
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
    },
    textLevel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
    },

    textXPBar: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#616771',
    },
    textClaim: {
        fontSize: Responsive.font(11),
        fontFamily: 'Poppins-Medium',
        color: '#ffffff',
    },
    avatar: {
        width: Responsive.height(20),
        height: Responsive.height(20),
        borderRadius: Responsive.height(10),
        borderWidth: 2,
        borderColor: '#C665F0',
    },
    avatarImage: {
        width: Responsive.height(20),
        height: Responsive.height(20),
        borderRadius: Responsive.height(10),
        backgroundColor: '#BBBEDD',
        marginRight: Responsive.width(6),
    },
    textAvatarGroup: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#616771',
    },
    textCountXp: {
        fontSize: Responsive.font(12.31),
        fontFamily: 'Poppins-SemiBold',
        color: '#ffffff',
        alignSelf: 'center'
    },
    textXp: {
        fontSize: Responsive.font(7),
        fontFamily: 'Poppins-Regular',
        color: '#ffffff',
        alignSelf: 'center'
    },
    textReasonName: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Bold',
        color: '#ffffff',
    },
    textReasonLevel: {
        fontSize: Responsive.font(10),
        fontFamily: 'Poppins-Regular',
        color: '#ffffff',
    }
});

import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleContainer } from '@/Containers'

import { CustomImage, Avatar, AvatarGroup, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import LinearGradient from 'react-native-linear-gradient';


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const MentionContainer = ({ goBack }) => {
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
        {
            id: 4,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 5,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 6,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
    ];


    const renderItem = ({ item, index }) => {
        if (item.type === 'top_post') {
            return (
                <TouchableOpacity disabled={true}>
                    <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper]}>
                        <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { marginTop: Responsive.height(15) }]}>
                            <View style={{ width: Responsive.width(6), height: Responsive.width(6), marginRight: Responsive.width(20) }}>
                                <LinearGradient
                                    colors={['#B8B9F5', '#5D5FEF']}
                                    style={[{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, borderRadius: Responsive.width(3) }]} />
                            </View>
                            <AvatarGroup height={Responsive.height(32)} text={'New Post Notifications'} textStyle={styles.textMediumMessage} />
                        </View>
                        <View style={Layout.fill} />
                    </View>

                </TouchableOpacity >
            );
        }
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper]}>
                    <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(15) }]}>
                        <View style={{ width: Responsive.width(6), height: Responsive.width(6), marginRight: Responsive.width(20), marginTop: Responsive.height(15) }}>
                            <LinearGradient
                                colors={['#B8B9F5', '#5D5FEF']}
                                style={[{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, borderRadius: Responsive.width(3) }]} />
                        </View>
                        <View style={[Layout.fill, { alignItems: 'flex-start' }]}>
                            <View style={[Layout.fill, Layout.rowHCenter]}>
                                <AvatarGroup height={Responsive.height(32)} text={''} textStyle={styles.textMediumMessage} />
                                <View style={{flex: 1}}></View>
                                <CustomImage source={Images.icHorizontalThreeDot} width={Responsive.height(20)} height={Responsive.height(20)} onPress={() => { }} />
                            </View>

                            <Text style={styles.textHightLightMessage} >Waivlength and 2 others followed a16z</Text>
                        </View>

                    </View>

                    <View style={{
                        borderColor: '#DBE2EB', borderWidth: Responsive.width(1),
                        borderRadius: Responsive.width(17), minHeight: 100, width: '100%', marginRight: Responsive.width(20),
                        marginLeft: Responsive.width(25)
                    }}>
                        <View style={[Layout.fill, Layout.rowHCenter, {
                            paddingLeft: Responsive.width(13),
                            height: Responsive.height(58), marginTop: Responsive.width(10)
                        }]}>
                            <Avatar
                                isShowDot={false}
                                imageStyle={[styles.avatarImage]}
                                url={'https://picsum.photos/200/200'}
                            />
                            <View>
                                <Text style={styles.textNameUser}>Salim Blania</Text>
                                <Text style={styles.textUserDescription}>@alexblania</Text>
                            </View>
                            <TouchableOpacity
                                style={[Common.button.rounded, styles.buttonFollow]}
                                onPress={() => navigate('ConversationAudio')}>
                                <Text style={styles.textButtonFollow}>Follow</Text>
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.textUserDesciption} >Designer at halallab</Text>
                        <Text style={styles.textUserNote} >Founder & CEO @Salim @Murad. Building a high bandwidth digital financial system, open to anyone, anywhere, Jalibreaking the smulation.</Text>
                    </View>

                </View>

            </TouchableOpacity >
        );
    };


    return (<View style={[Layout.fill, styles.parentContainer]} >
        <LinearGradient
            colors={['#ebeff5', '#DED8F3']}
            useAngle={true} angle={-45} angleCenter={{ x: 0.2, y: 0.2 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>
        <View style={{ height: Responsive.height(1), backgroundColor: '#D5DDE5' }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <FlatList nestedScrollEnabled={false}
                style={[Layout.fullWidth]}
                data={DATA}
                renderItem={renderItem}
                ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
                ListFooterComponent={<View style={{ height: Responsive.height(65) }} />}
                keyExtractor={(item) => item.id} />
        </KeyboardAvoidingView>
    </View>)

}

export default MentionContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    parentContainer: {
        backgroundColor: 'transparent'
    },
    textTitle: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#15172A',
        marginTop: Responsive.height(2),
        marginBottom: Responsive.height(8)
    },
    itemStyleWrapper: {
        borderRadius: Responsive.height(18),
        marginVertical: Responsive.height(8),
        paddingHorizontal: Responsive.height(20),
    },

    textMediumMessage: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#15172A',
        lineHeight: Responsive.width(21),
    },
    textHightLightMessage: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#15172A',
        lineHeight: Responsive.width(21),
        marginVertical: Responsive.height(8)
    },
    textUserDesciption: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#1D1E2D',
        lineHeight: Responsive.width(21),
        marginTop: Responsive.height(15),
        marginHorizontal: Responsive.width(13),
    },
    textUserNote: {
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Regular',
        color: '#525563',
        lineHeight: Responsive.width(22),
        marginTop: Responsive.height(5),
        marginHorizontal: Responsive.width(13),
        marginBottom: Responsive.width(13),
    },

    textCreateBy: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        lineHeight: Responsive.width(22),
        color: '#6E748B'
    },
    buttonLive: {
        height: Responsive.height(20),
        backgroundColor: '#5D5FEF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Responsive.width(3.77),
        borderRadius: Responsive.height(4),
        justifyContent: 'center',
    },
    textLive: {
        fontFamily: 'Roboto-Regular',
        fontSize: Responsive.font(12),
        color: '#fff',
        textAlign: 'center',
        includeFontPadding: false,
        marginLeft: Responsive.width(3.3)
    },
    lineItem: {
        backgroundColor: '#D5DDE5',
        height: Responsive.height(1)
    },
    avatar: {
        width: Responsive.height(50),
        height: Responsive.height(50),
        borderRadius: Responsive.height(25),
        borderWidth: 2,
        borderColor: '#C665F0',
    },
    avatarImage: {
        width: Responsive.height(58),
        height: Responsive.height(58),
        borderRadius: Responsive.height(58 / 2),
        backgroundColor: '#BBBEDD',
        marginRight: Responsive.width(16),
    },
    dotStyle: {
        right: Responsive.height(0.1),
        bottom: Responsive.height(5),
    },
    textNameUser: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(21),
        color: '#1D1E2D'
    },
    textUserDescription: {
        fontFamily: 'Poppins-Light',
        fontSize: Responsive.font(13),
        lineHeight: Responsive.width(19),
        color: '#6B6D81'
    },
    buttonInfo: {
        height: Responsive.height(21),
        backgroundColor: '#D6DDE9',
        borderRadius: Responsive.height(4),
        paddingHorizontal: Responsive.width(6),
        alignItems: 'center'
    },
    floatingActionWrapper: {
        marginBottom: Responsive.width(11),
        marginHorizontal: Responsive.width(62),
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0
    },
    buttonCreate: {
        height: Responsive.height(50),
        borderRadius: Responsive.height(14)
    },
    textButtonFollow: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#ffffff',
    },
    buttonFollow: {
        height: Responsive.width(31),
        borderRadius: Responsive.height(17),
        position: 'absolute',
        right: Responsive.width(14),
        paddingHorizontal: Responsive.width(18),
        backgroundColor: '#5D5FEF'
    },
});
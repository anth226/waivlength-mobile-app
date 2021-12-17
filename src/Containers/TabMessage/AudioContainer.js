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


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const AudioContainer = ({ goBack }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

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
            time: "02:17"
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
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper]}>
                    <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { marginTop: Responsive.height(18) }]}>
                        <Text style={[Layout.fill, styles.textCreateBy]}>{`Created by @muhammad`}</Text>

                        <View style={styles.buttonLive}>
                            <CustomImage source={Images.icBroadcast} width={Responsive.width(12)} height={Responsive.height(10)} />
                            <Text style={styles.textLive}>{`Live`}</Text>
                        </View>
                        <View width={Responsive.width(12)} />
                        <CustomImage source={Images.icActionOption} width={Responsive.height(24)} height={Responsive.height(24)} onPress={() => {}} />
                    </View>
                    <Text style={[Layout.fullWidth, styles.textTitle]}>{`UX Problem Analisys`}</Text>
                    <View style={[Layout.fullWidth, styles.lineItem]}></View>
                    <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { marginTop: Responsive.height(15) }]}>
                        <AvatarGroup height={Responsive.height(32)} text={'Members'} />
                    </View>
                    <View style={Layout.fill} />
                    <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { marginBottom: Responsive.height(23) }]}>
                        <View style={[Layout.row, styles.buttonInfo]}>
                            <CustomImage source={Images.icPerson} height={Responsive.height(14)} width={Responsive.height(14)} />
                            <Text>{`48`}</Text>
                        </View>
                        <View style={{ width: Responsive.width(8) }} />
                        <View style={[Layout.row, styles.buttonInfo]}>
                            <CustomImage source={Images.icTagMessage} height={Responsive.height(14)} width={Responsive.height(14)} />
                            <Text>{`6`}</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={[Common.button.rounded, styles.buttonJoinNow]}
                        onPress={() => navigate('ConversationAudio')}>
                        <Text style={styles.textButtonJoinNow}>Join Now</Text>
                    </TouchableOpacity>

                </View>

            </TouchableOpacity >
        );
    };


    return (<View style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />
        <View style={{ height: Responsive.height(1), backgroundColor: '#D5DDE5' }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
                style={[Layout.fill]}>

                <FlatList nestedScrollEnabled={false}
                    style={[Layout.fullWidth, { marginTop: Responsive.height(5) }]}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} />



            </ScrollView>

            <View style={[Layout.row, styles.floatingActionWrapper]}>
                <TouchableOpacity
                    style={[Layout.fullWidth, Common.button.rounded, styles.buttonCreate]}
                    onPress={() => {}}>
                    <Text style={styles.textButtonCreate}>Create an audio room</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </View>)
}

export default AudioContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#15172A',
        marginTop: Responsive.height(2),
        marginBottom: Responsive.height(8)
    },
    itemStyleWrapper: {
        backgroundColor: '#fff',
        borderRadius: Responsive.height(18),
        marginVertical: Responsive.height(8),
        paddingHorizontal: Responsive.height(20),
        marginHorizontal: Responsive.width(20),
        height: Responsive.height(180),
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
        width: Responsive.height(40),
        height: Responsive.height(40),
        borderRadius: Responsive.height(20),
        backgroundColor: '#BBBEDD',
    },
    dotStyle: {
        right: Responsive.height(0.1),
        bottom: Responsive.height(5),
    },
    textNameUser: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        color: '#242A31'
    },
    textUserDescription: {
        fontFamily: 'Poppins-Light',
        fontSize: Responsive.font(13),
        lineHeight: Responsive.width(22),
        color: '#8C97A7'
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
    textButtonCreate: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#ffffff',
    },
    buttonJoinNow: {
        height: Responsive.height(32),
        borderRadius: Responsive.height(8),
        position: 'absolute',
        bottom: Responsive.height(34),
        right: Responsive.width(32),
        paddingHorizontal: Responsive.width(18),
        backgroundColor: '#DEEBFF'
    },
    textButtonJoinNow: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#2773F1',
    },
});
